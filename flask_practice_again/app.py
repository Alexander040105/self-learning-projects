from website import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)


# from flask import Flask, render_template, request

# app = Flask(__name__)


# @app.route("/")
# def index():
#     return render_template("index.html")

# if __name__ == '__main__':
#     app.run(debug=True)