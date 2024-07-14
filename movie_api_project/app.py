from flask import Flask, render_template, request
import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv('API_KEY_OMDB')

app = Flask(__name__)

@app.route("/search", methods=['POST'])
def searchMovie():
    userSearch = request.form.get('movieSearch')
    processedData = userSearch.replace(' ', '+')
    api_url = f'http://www.omdbapi.com/?apikey={API_KEY}&s={processedData}'
    response = requests.get(api_url)
    data = response.json()
    movies = data.get('Search', []) 
    
    return render_template("display.html", movies=movies)
    
@app.route("/")
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)
