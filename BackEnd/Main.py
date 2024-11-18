from flask import Flask,render_template,request
import sqlite3

#.\SAaDenv\Scripts\activate.bat
#http://localhost:5000/

app=Flask(__name__)



@app.route('/',methods=["GET","POST"],)
def Login():
    if request.method=="POST":
        userNameInp=request.form.get("userName")#pulls info from submit
        passwordInp=request.form.get("password")

        if userNameInp=="":
            return render_template('testPage.html')#stops crash on empty input

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
                return str(loginOutcome)
            else:
                loginOutcome=False
            return render_template('testPage.html')#restarts if false
        
        except sqlite3.OperationalError:#for if table in db doesnt exist or error
            connection.close()
            return render_template('testPage.html')
        
    return render_template('testPage.html')


@app.route('/',methods=["GET","POST"],)
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
        allTables="""SELECT name FROM sqlite_master WHERE type='table';"""
        cursor.execute(allTables)
        tablesArr=cursor.fetchall
        newUserID=len(tablesArr)+1#creates new userID by counting all tables and adding one
        tablesArr=[]

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
                    values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)"""%newUserTable,(newUserTable,"customer",forename,surname,email,phoneNum,password,age,address,postCode,mainLib,itemID,itemID,itemID))
        connection.commit()
        connection.close()

def itemSearch():
    #look up user's mainLib
    # select * from [%s] and show that first if userID=0 %lib
    # select ? from ? where userID=0,(item,lib)
    # return all
    testUserID=10
    mainLibPull="""SELECT MainLib FROM [%s]"""%testUserID#only use this if nothing is passed from frontend
    connectionUser=sqlite3.connect('./Database/User.db')
    cursorUser=connectionUser.cursor()
    cursorUser.execute(mainLibPull)
    mainLib=cursorUser.fetchall()
    connectionUser.commit()
    connectionUser.close()

    connectionLib=sqlite3.connect('./Database/Library.db')
    cursorLib=connectionLib.cursor()
    itemSearch="""SELECT ItemID FROM [%s] WHERE UserId=0"""%mainLib
    cursorLib.execute(itemSearch)
    itemArr=cursorLib.fetchall()
    connectionLib.commit()
    connectionLib.close()

    connectionItem=sqlite3.connect('./Database/User.db')
    cursorItem=connectionItem.cursor()
    itemAll=[]#seperate the content of this array to display all searched items
    for i in range(len(itemArr)):
        itemExpand="""SELECT (ItemName,Author,Type,Blurb,NumWords) FROM ITEMS WHERE ItemID=[%s]"""%itemArr[i]
        cursorItem.execute(itemExpand)
        tempItem=cursorItem.fetchall()
        itemAll.append(tempItem)
    return itemAll



if __name__=="__main__":
    app.run(debug=True)