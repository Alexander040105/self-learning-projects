from flask import Flask, render_template, redirect, request
import requests
import csv
import gspread
import pandas as pd
import plotly.express as px
import plotly.io as pio
import os.path
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google.oauth2.service_account import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import datetime

scopes = [
    "https://www.googleapis.com/auth/spreadsheets"
]

credential = Credentials.from_service_account_file("credentials.json", scopes=scopes)
client = gspread.authorize(credential)

spreadsheet_id = "1Q_7ZcMpJeyHMhlhcFL3xvh3JpnSTZL12otyvzzZ9108"
workbook = client.open_by_key(spreadsheet_id)

sheet1 = workbook.worksheet("Sheet1")

app = Flask(__name__)

def process_plot():
    dataframe = pd.DataFrame(sheet1.get_all_records())

    # Convert the 'Entry Date' column to datetime format
    dataframe['Entry Date'] = pd.to_datetime(dataframe['Entry Date'], format='%m/ %d/ %Y %H:%M:%S')


    current_date = datetime.datetime.now()
    current_month = current_date.month
    current_year = current_date.year
    current_month_fullname = current_date.strftime('%B')

    filtered_dataframe = dataframe[
        (dataframe['Entry Date'].dt.month == current_month) & 
        (dataframe['Entry Date'].dt.year == current_year)
    ]


    services_from_spreadsheet = {
        'cleaning': filtered_dataframe['Cleaning'],
        'check-up': filtered_dataframe['Check-up'],
        'dismantle': filtered_dataframe['Dismantle'],
        'relocation': filtered_dataframe['Relocation'],
        'installation': filtered_dataframe['Installation']
    }


    services_availed = {
        'cleaning': 0,
        'check-up': 0,
        'dismantle': 0,
        'relocation': 0,
        'installation': 0
    }

    servicesNames = []
    numberAvailed = []

    for customers in services_from_spreadsheet['cleaning']:
        if 'Availed' in customers:
            services_availed['cleaning'] += 1
            
    for customers in services_from_spreadsheet['check-up']:
        if 'Availed' in customers:
            services_availed['check-up'] += 1
            
    for customers in services_from_spreadsheet['dismantle']:
        if 'Availed' in customers:
            services_availed['dismantle'] += 1
            
    for customers in services_from_spreadsheet['relocation']:
        if 'Availed' in customers:
            services_availed['relocation'] += 1
            
    for customers in services_from_spreadsheet['installation']:
        if 'Availed' in customers:
            services_availed['installation'] += 1
            
    for keys in services_availed:
        servicesNames.append(keys.upper())
        numberAvailed.append(services_availed[keys])
        
    print(servicesNames)
    print(numberAvailed)
    servicesDataFrame = {'Names': servicesNames, 'Number of Availed': numberAvailed}
    finalDataFrame = pd.DataFrame(servicesDataFrame)



    fig = px.bar(
        finalDataFrame,
        x='Names',
        y='Number of Availed',
        title=f'Number of Availed Services for the Month of {current_month_fullname}',
        labels={'Names': 'Service Type', 'Number of Availed': 'Number of Times Availed'},
        color='Names'
    )
    
    plot_json = pio.to_json(fig)
    
    return plot_json

@app.route('/clients', methods=['GET'])
def showClients():
    cell_display = sheet1.get_all_values()
    cellList = list(cell_display)
    # return render_template("index.html", billList=billList, nameList=nameList, headers=headers)
    return render_template("client-table.html", cellList=cellList)

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/analytics', methods=['GET'])
def plots():
    plot_json = process_plot()
    return render_template("analytics.html", plot_json=plot_json)

@app.route("/getDetails", methods=['POST', 'GET'])
def getDetails():
    #services availed
    cleaning = request.form.get("cleaning")
    check_up = request.form.get("check-up")
    dismantle = request.form.get("dismantle")
    relocation = request.form.get("relocation")
    installation = request.form.get("installation")
    
    #client details
    clientBill = request.form.get("clientBill")
    clientName = request.form.get("clientName")
    clientNumber = request.form.get("clientNumber")
    clientAddress = request.form.get("clientAddress")
    
    client_bill_display = sheet1.col_values(2)
    
    empty_row = len(client_bill_display) + 1  # +1 for the next row
    currentTime = datetime.datetime.now().strftime('%m/ %d/ %Y %X')
    
    #updates the customer details on the google spreadsheet
    sheet1.update_cell(empty_row, 1, currentTime)
    sheet1.update_cell(empty_row, 2, clientName)
    sheet1.update_cell(empty_row, 3, clientBill)
    sheet1.update_cell(empty_row, 4, clientNumber)
    sheet1.update_cell(empty_row, 5, clientAddress)
    
    sheet1.update_cell(empty_row, 6, cleaning)
    sheet1.update_cell(empty_row, 7, check_up)
    sheet1.update_cell(empty_row, 8, dismantle)
    sheet1.update_cell(empty_row, 9, relocation)
    sheet1.update_cell(empty_row, 10, installation)
    
    return redirect("/")
    
if __name__ == '__main__':
    app.run(debug=True)
    
#name 
#address
#services
#total price of service