from flask import Blueprint, render_template
#define this as a Blueprint of the site where all routes are in here
auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return "login"

@auth.route('/logout')
def logout():
    return "logout"

@auth.route('/signup')
def signup():
    return "signup"