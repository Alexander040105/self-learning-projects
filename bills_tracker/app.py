from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import requests
import pandas as pd
import plotly.express as px
import plotly.io as pio


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bills.db'
app.config['SECRET_KEY'] = "billsTracker040105"


database = SQLAlchemy(app)


def process_plot():
    billsToPay = []
    billsMonth = []
    response = requests.post('http://localhost:5000/addBill', data={'billAmount': 100.0, 'billMonth': 'January'})
    
    
    if response.status_code == 200:
        billsData = response.json()
        
        print(billsData)
        for bill in billsData["billAmount"]:
            billsToPay.append(bill)
        for month in billsData["billMonth"]:
            billsMonth.append(month)
        
        dataFrame = {'Amount': billsToPay, 'Month': billsMonth}
        monthlyBillDataFrame = pd.DataFrame(dataFrame)
        
        figure = px.line(
                monthlyBillDataFrame, 
                x="monthYear", 
                y="monthlyBill", 
                hover_name='monthlyBill', 
                line_shape='linear', 
                render_mode='svg',
                color_discrete_sequence=['blue']  # Setting the line color to blue
            )

        plot_json = pio.to_json(figure)
        
        return plot_json

class Bills(database.Model):
    id = database.Column(database.Integer, primary_key = True)
    billMonth = database.Column(database.String(200), nullable=False, unique=True)
    billAmount = database.Column(database.Float, nullable=False)

@app.route("/addBill", methods=["GET","POST"])
def addBill():
    if request.method == "POST":
        billAmount = request.form['billAmount']
        billMonth = request.form['billMonth']
        
        newBills = Bills(billAmount=billAmount, billMonth=billMonth)
        
        database.session.add(newBills)
        database.session.commit()
        
        bills = Bills.query.all()
        
        #making this into a json format
        # returning something like an API
        bills_list = [{
            'id': bill.id,
            'billMonth': bill.billMonth,
            'billAmount': bill.billAmount
        } for bill in bills]
        
        return jsonify({'bills': bills_list})

@app.route("/display", methods=["POST", "GET"])
def display():
    plot_json = process_plot
    return render_template("index.html", plot_json=plot_json)

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == '__main__':
    with app.app_context():
        database.create_all()
    app.run(debug=True)