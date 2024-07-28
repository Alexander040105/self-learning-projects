from flask import Flask, render_template, redirect, request
import requests
import csv
import gspread
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


@app.route('/', methods=['GET'])
def index():
    cell_display = sheet1.get_all_values()
    cellList = list(cell_display)
    # return render_template("index.html", billList=billList, nameList=nameList, headers=headers)
    return render_template("index.html", cellList=cellList)

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