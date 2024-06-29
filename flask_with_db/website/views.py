from flask import Blueprint, render_template

#define this as a Blueprint of the site where all routes are in here
#it is better to name it the same as the file to avoid confusion
views = Blueprint('views', __name__)


@views.route('/')
def index():
    return "<h1>Test</h1>"
