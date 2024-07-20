from flask import Blueprint, render_template, request, redirect


auth = Blueprint('auth', __name__)

@auth.route("/login")
def login():
    return redirect("index.html")