from flask import Flask,render_template,request
import sqlite3

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('testPage.html')

activeUser=0#currently set as variable to save time, turn into function if have extra time 

def loginCheck():#For checking that a user is viewing with an account
    activeUserCheck=activeUser
    if activeUserCheck==0:
        return render_template('guest.html')
        #sends user to guest page--see guest app for more info
    else:
        return str(activeUserCheck)
        #returns as string so other functions can use to connect to specific table



@app.route('/login',methods=["GET","POST"],)
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

            loginOutcome="False"
            if password==passwordInp:
                global activeUser
                activeUser=int(userID)#sets active user as logged in user
                return "test123"#loginCheck()
            else:
                loginOutcome=False
            return "render_template('testPage.html')"#restarts if false
        
        except sqlite3.OperationalError:#for if table in db doesnt exist or error
            connection.close()
            return "account does not exist"
        
    return "login_test_Json_fail"


@app.route('/SignUp',methods=["GET","POST"],)
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
    return "SignUp_test_Json_fail"


@app.route('/itemSearch',methods=["GET","POST"],)
def itemSearch():
    if request.method=="POST":
        inputSearch=request.form.get("Search")
        if inputSearch=="":
            print
        else:
            conItem=sqlite3.connect('./Database/items.db')
            curItem=conItem.cursor()
            itemIDRequest="""SELECT ItemID FROM ITEMS WHERE ItemName=='[%s]'"""%inputSearch
            curItem.execute(itemIDRequest)
            itemID=str(curItem.fetchall())
            itemID=itemID.replace('[(','')
            itemID=itemID.replace(',)]','')
            conItem.commit()
            conItem.close()

            conUser=sqlite3.connect('./Database/User.db')
            curUser=conUser.cursor()
            mainLibSearch="""SELECT MainLib FROM [%s]"""%str(activeUser)
            curUser.execute(mainLibSearch)
            mainLib=str(curUser.fetchall())
            mainLib=mainLib.replace('[(','')
            mainLib=mainLib.replace(',)]','')
            conUser.commit()
            conUser.close()#pulls the users mainLib(temp set to 10 for testing)


            conLib=sqlite3.connect('./Database/Library.db')
            curLib=conLib.cursor()
            stockCheck="""SELECT ItemID FROM [%s] WHERE UserID==0"""%mainLib#pulls all records of items if in table
            curLib.execute(stockCheck)
            emptyItem=curLib.fetchall()
            conLib.commit()
            conLib.close()

            result=[]
            conItem=sqlite3.connect('./Database/items.db')
            curItem=conItem.cursor()
            for i in range(len(emptyItem)):#cycles through all possible items with no users
                test=str(emptyItem[i])
                test=test.replace('(','')
                test=test.replace(',)','')
                itemDescriptor="""SELECT * FROM ITEMS WHERE ItemID=="""+test#needs to be added as a string after in this fashion or crash
                curItem.execute(itemDescriptor)
                itemInfo=curItem.fetchall()
                result.append(itemInfo)#makes list of all descriptors

            conItem.commit()
            conItem.close()

            return str(result)
        
    return "itemSearch_test_Json_fail"

@app.route('/guest',methods=["GET","POST"],)
def guest():
    return render_template('guest.html')#fill this out depending on guest ideas--possibly search--possibly send to login

@app.route('/logout',methods=["GET","POST"],)
def logout():
    global activeUser
    activeUser=0
    return "logged out"

if __name__=="__main__":
    app.run(debug=True)