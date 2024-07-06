from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import pandas as pd
import plotly.express as px
import plotly.io as pio


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bills.db'
app.config['SECRET_KEY'] = "billsTracker040105"

database = SQLAlchemy(app)

def process_plot():
    bills = Bills.query.all()
    
    billsToPay = [bill.billAmount for bill in bills]
    billsMonth = [bill.billMonth for bill in bills]
    
    dataFrame = {'Amount': billsToPay, 'Month': billsMonth}
    monthlyBillDataFrame = pd.DataFrame(dataFrame)
    
    figure = px.line(
            monthlyBillDataFrame, 
            x="Month", 
            y="Amount", 
            hover_name='Amount', 
            line_shape='linear', 
            render_mode='svg',
            color_discrete_sequence=['blue']  # Setting the line color to blue
        )

    plot_json = pio.to_json(figure)
    
    return plot_json

class Bills(database.Model):
    id = database.Column(database.Integer, primary_key=True)
    billMonth = database.Column(database.String(200), nullable=False, unique=True)
    billAmount = database.Column(database.Float, nullable=False)

@app.route("/addBill", methods=["GET", "POST"])
def addBill():
    if request.method == "POST":
        billAmount = request.form['billAmount']
        billMonth = request.form['billMonth']
        
        newBill = Bills(billAmount=billAmount, billMonth=billMonth)
        
        database.session.add(newBill)
        database.session.commit()
        
        bills = Bills.query.all()
        
        # Making this into a json format
        bills_list = [{
            'id': bill.id,
            'billMonth': bill.billMonth,
            'billAmount': bill.billAmount
        } for bill in bills]
        
        return redirect(url_for('display'))
    
    return "Add a bill via POST request."

@app.route("/display", methods=["GET"])
def display():
    plot_json = process_plot()
    return render_template("index.html", plot_json=plot_json)

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == '__main__':
    with app.app_context():
        database.create_all()
    app.run(debug=True)
