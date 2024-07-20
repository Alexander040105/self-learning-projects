from flask import Flask


def create_app():
    app = Flask(__name__)
    
    app.config['SECRET_KEY'] = 'alexanderJonSolis'
    
    from .search import search
    from .auth import auth
    
    app.register_blueprint(search, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')
    
    return app