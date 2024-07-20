from flask import Flask, render_template, request
import requests
import os
from dotenv import load_dotenv
from markupsafe import escape
from website import create_app

app = create_app()

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)
