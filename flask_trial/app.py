from flask import Flask, render_template, request, redirect
import os
import smtplib
import csv
#configure app
app = Flask(__name__)

#where we store students names
students = []

numberOfRegistrant = 0
@app.route("/")
def index():
    #request.args.get() if from jinja
    #second parameter in the request.args.get() is the default value
    # helloName = request.args.get("name", "world")
    
    #renders the html on the webpage
    #jinjaVariableName=pythonVariableName when using the second parameter for render_template
    return render_template("index.html")

@app.route("/registered")
def registered():
    #putting the contents of the CSV file onto a List 
    file = open("registered.csv", "r")
    readCSV = csv.reader(file)
    students = list(readCSV)
    file.close()
    # the students jinja variable is accessed in the for loop of the html
    return render_template("registered.html", students=students)


@app.route("/register", methods=["POST"])
def register():
    
    #request.form.get() if it is from a the form
    name = request.form.get("name")
    dorm = request.form.get("dorm")
    
    # if not name or not dorm:
    #     return render_template("success.html", booleanSuccess="Put your dorm and name!")
    # return render_template("success.html", booleanSuccess="SUCCESS!!")
    if not name or not dorm:
        return render_template("fail.html")
    
    #adding the data from the site onto a csv file
    file = open("registered.csv", "a")
    writeCSV = csv.writer(file)
    #writes the data onto a row in the csv
    writeCSV.writerow((name, dorm))
    file.close()
    
    return render_template("success.html")
    # #appends the name of the student and dorms since it passes the formatted string in the list
    # students.append(f"{name} from {dorm}")
    # return redirect("/registrants")

if __name__ == "__main__":
    app.run(debug=True)