from flask import Flask, request, render_template, redirect
import os
import sqlite3

currentlocation = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__)

@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/", methods = ["POST"])
def checklogin():
    UN = request.form['Username']
    PW = request.form['Password']

    sqlconnection = sqlite3.Connection(currentlocation + "/user.db")
    cursor = sqlconnection.cursor()
    query1 = "SELECT Username, Password FROM UserInfo WHERE Username = '{un}' AND Password = '{pw}'".format(un = UN, pw = PW)

    rows = cursor.execute(query1)
    rows = rows.fetchall()
    if len(rows) == 1:
        return render_template("loggedIn.html")
    else:
        return redirect("/register")

@app.route("/register", methods=["GET", "POST"])
def registerpage():
    if request.method == "POST":
        dUN = request.form['DUsername']
        dPW = request.form['DPassword']
        Uemail = request.form['EmailUser']
        sqlconnection = sqlite3.Connection(currentlocation + "/user.db")
        cursor = sqlconnection.cursor()
        query1 = "INSERT INTO UserInfo VALUES('{u}', '{p}','{e}')".format(u=dUN, p = dPW, e = Uemail)
        cursor.execute(query1)
        sqlconnection.commit()
        return redirect("/")
    return render_template("register.html")

@app.route("/eng_to_hindi")
def index1():
    return render_template("index1.html")

@app.route("/eng_to_jpn")
def index2():
    return render_template("index2.html")

@app.route("/cmp_fnd")
def index3():
    return render_template("index3.html")

if __name__=="__main__":
    app.run()