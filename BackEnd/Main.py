from flask import Flask,render_template,request
import sqlite3

#.\SAaDenv\Scripts\activate.bat
#http://localhost:5000/

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('testPage.html')

@app.route('/',methods=["GET","POST"],)
def Login():
    if request.method=="POST":
        userNameInp=request.form.get("userName")#pulls info from submit
        passwordInp=request.form.get("password")

        if userNameInp=="":
            #return render_template('testPage.html')#stops crash on empty input
            return render_template('SignUp.html')# test for current

        userSplit=list(userNameInp)#converts userID into database table name
        userID=1
        tempList=[]
        for i in range(len(userSplit)-2):
            temp=userSplit[i]
            temp=temp.upper()
            tempNum=ord(temp)-64#turns into num up to 26 for calculation
            tempList.append(tempNum)
        tempList.append(int(userSplit[4]))#done seperate as couldnt change from negative after orb()
        tempList.append(int(userSplit[5]))

        for i in range(len(tempList)):
            userID=userID*tempList[i]#gets a single number from temp list

        connection=sqlite3.connect('./Database/User.db')
        cursor=connection.cursor()
        searchPass="""SELECT Password FROM [%s]"""%int(userID)

        try:
            cursor.execute(searchPass)
            passwordfetch=cursor.fetchall()
            connection.commit()
            connection.close()#fetches password from specific database
            password=''.join(str(passwordfetch))
            password=password.replace("[('","")
            password=password.replace("',)]","")#strips password to same format as input

            loginOutcome=False
            if password==passwordInp:
                loginOutcome=True
                return loginOutcome
            else:
                loginOutcome=False
            return render_template('testPage.html')#restarts if false
        
        except sqlite3.OperationalError:#for if table in db doesnt exist or error
            connection.close()
            return loginOutcome
        
    return render_template('testPage.html')


@app.route('/SignUp/',methods=["GET","POST"],)
def signUp():
    if request.method=="POST":
        forename=request.form.get("forename")
        surname=request.form.get("surname")
        email=request.form.get("email")
        password=request.form.get("password")
        phoneNum=request.form.get("number")
        age=request.form.get("age")
        postCode=request.form.get("postcode")
        #below are need to be change later
        mainLib="0"
        address="N/A"
        itemID=0

        connection=sqlite3.connect('./Database/User.db')
        cursor=connection.cursor()
        for i in range(26*26*26*26*9*9):#checks to see if it can pull a userID up to max amount of accounts
            tableCount="""SELECT UserID FROM [%s]"""%str(i+1)#checks each to allow for account deletion
            try:
                cursor.execute(tableCount)
            except:
                newUserID=i+1#adds one to amount counted and stops the loop
                break

        newUserTable="""CREATE TABLE IF NOT EXISTS [%s](
        UserID VARCHAR,
        Privilege CHAR,
        Forename CHAR,
        Surname CHAR,
        Email VARCHAR,
        PhoneNumber CHAR,
        Password VARCHAR,
        Age INT,
        Address VARCHAR,
        Postcode VARCHAR,
        MainLib INT,
        Item1ID INT,
        Item2ID INT,
        Item3ID INT
        );"""%newUserID
        cursor.execute(newUserTable)
        cursor.execute("""INSERT INTO [%s] (UserID,Privilege,Forename,Surname,Email,PhoneNumber,Password,Age,Address,Postcode,MainLib,Item1ID,Item2ID,Item3ID)
                    values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)"""%newUserID,(newUserID,"customer",forename,surname,email,phoneNum,password,age,address,postCode,mainLib,itemID,itemID,itemID))
        connection.commit()
        connection.close()
        return "new user created"
    return render_template('SignUp.html')


@app.route('/itemSearch/',methods=["GET","POST"],)
def itemSearch():
    if request.method=="POST":
        inputSearch=request.form.get("Search")
        testUser=10
        if inputSearch=="":
            print
        else:
            conItem=sqlite3.connect('./Database/items.db')
            curItem=conItem.cursor()
            itemStatement="""SELECT * FROM ITEMS WHERE ItemName=='[%s]'"""%inputSearch
            curItem.execute(itemStatement)
            itemDescript=curItem.fetchall()
            itemIDRequest="""SELECT ItemID FROM ITEMS WHERE ItemName=='[%s]'"""%inputSearch
            curItem.execute(itemIDRequest)
            itemID=str(curItem.fetchall())
            itemID=itemID.replace('[(','')
            itemID=itemID.replace(',)]','')
            conItem.commit()
            conItem.close()#creates list of descriptors and gets item ID

            conUser=sqlite3.connect('./Database/User.db')
            curUser=conUser.cursor()
            mainLibSearch="""SELECT MainLib FROM [%s]"""%str(testUser)
            curUser.execute(mainLibSearch)
            mainLib=str(curUser.fetchall())
            mainLib=mainLib.replace('[(','')
            mainLib=mainLib.replace(',)]','')
            conUser.commit()
            conUser.close()#pulls the users mainLib(temp set to 10 for testing)


            conLib=sqlite3.connect('./Database/Library.db')
            curLib=conLib.cursor()
            stockCheck="""SELECT UserID FROM [%s]"""%mainLib#,itemID#pulls all records of items if in table
            curLib.execute(stockCheck)
            emptyUser=curLib.fetchall()
            conLib.commit()
            conLib.close()
            results=[]
            for i in range(len(emptyUser)):
                if emptyUser[i]=="0":#currently identifies no users needs to be used to confirm if a already searched book has no user
                    results.append(emptyUser[i])
            return str(emptyUser)
        
    return render_template('itemSearch.html')


if __name__=="__main__":
    app.run(debug=True)