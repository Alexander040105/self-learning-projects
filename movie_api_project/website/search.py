from flask import Blueprint, render_template, request
import requests
from markupsafe import escape
import os
from dotenv import load_dotenv
import requests

load_dotenv()

API_KEY = os.getenv('API_KEY_OMDB')

search = Blueprint('search', __name__)


@search.route("/search", methods=['GET', 'POST'])
def searchMovie():
    if request.method == 'POST':
        userSearch = request.form.get('movieSearch')
        processedData = userSearch.replace(' ', '+')
        page = 1
    else:
        userSearch = request.args.get('movieSearch')
        processedData = userSearch.replace(' ', '+')
        page = int(request.args.get('page', 1))
    
    api_url = f'http://www.omdbapi.com/?apikey={API_KEY}&s={escape(processedData)}&page={page}'
    response = requests.get(api_url)
    data = response.json()
    movies = data.get('Search', [])
    
    if 'totalResults' in data and data['totalResults'] is not None:
        try:
            total_results = int(data['totalResults'])
        except ValueError:
            total_results = 0
    else:
        total_results = 0

    total_pages = (total_results + 9) // 10  # 10 results per page

    return render_template("display.html", movies=movies, total_pages=total_pages, current_page=page, user_search=userSearch)
