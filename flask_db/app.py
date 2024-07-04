from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
# ADD SQL ALCHEMY
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SECRET_KEY'] = "helloAlexanderJon"

# Initialize the Database
dataBase = SQLAlchemy(app)

# Create the Model
class Users(dataBase.Model):
    # Primary Key means it is ID in the database
    # nullable=False means it cannot be blank
    # unique=True means that it cannot be duplicated
    id = dataBase.Column(dataBase.Integer, primary_key=True)
    username = dataBase.Column(dataBase.String(200), nullable=False)
    email = dataBase.Column(dataBase.String(200), nullable=False, unique=True)
    dateAdded = dataBase.Column(dataBase.DateTime, default=datetime.utcnow)

    # Create A String
    def __repr__(self):
        return '<Name %r>' % self.username  # Corrected from self.name to self.username

@app.route("/addDetails", methods=["GET","POST"])
def addDetails():
    if request.method == "POST":
        username = request.form['username']
        email = request.form['emailAddress']
        
        #creating a new user from the class 'Users'
        newUser = Users(username=username, email=email)
        
        #add user to the database
        dataBase.session.add(newUser)
        
        #save the changes to the database
        dataBase.session.commit()
        
        # Retrieve all users
        users = Users.query.all()
        
        return render_template('index.html', users=users)

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == '__main__':
    with app.app_context():
        dataBase.create_all()
    app.run(debug=True)
