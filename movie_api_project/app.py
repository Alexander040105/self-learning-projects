from flask import Flask, render_template, request
import requests
import os
from dotenv import load_dotenv


API_KEY = os.getenv('API_KEY_OMDB')

app = Flask(__name__)


def getData():
    api_url = ''
    
@app.route("/")
def index():
    return "hello"

if __name__ == '__main__':
    app.run(debug=True)