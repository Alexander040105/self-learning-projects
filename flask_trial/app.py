from flask import Flask, render_template, request, redirect

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

@app.route("/registrants")
def registrants():
    #the students jinja variable is accessed in the for loop of the html
    return render_template("registered.html", students=students)


@app.route("/register", methods=["POST"])
def register():
    
    #request.form.get() if it is from a input tags
    name = request.form.get("name")
    dorm = request.form.get("dorm")
    
    # if not name or not dorm:
    #     return render_template("success.html", booleanSuccess="Put your dorm and name!")
    # return render_template("success.html", booleanSuccess="SUCCESS!!")
    if not name or not dorm:
        return render_template("fail.html")
    
    #appends the name of the student and dorms since it passes the formatted string in the list
    students.append(f"{name} from {dorm}")
    return redirect("/registrants")

if __name__ == "__main__":
    app.run(debug=True)