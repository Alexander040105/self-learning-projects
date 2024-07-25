from flask import Flask, render_template, redirect, requests


app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/getDetails", methods=['POST'])
def getDetails():
    print()
    
    
if __name__ == '__main__':
    app.run(debug=True)
    
#name 
#address
#services
#total price of service