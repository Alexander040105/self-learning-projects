from flask import Flask


def create_app():
    app = Flask(__name__)
    
    #encrypt or secure session cookies of the session data?
    app.config['SECRET_KEY'] = 'alexanderJonSolis_040105'
    
    #importing the Blueprint from views.py to here in the __init__ file
    from .views import views
    from .auth import auth
    
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')
    
    return app