from flask import Blueprint, render_template
#define this as a Blueprint of the site where all routes are in here
auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET','POST'])
def login():
    return render_template("login.html", boolean=True)

@auth.route('/logout')
def logout():
    return "logout"

@auth.route('/signup' , methods=['GET','POST'])
def signup():
    return render_template("sign_up.html")