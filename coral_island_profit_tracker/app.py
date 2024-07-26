from flask import Flask, render_template, redirect, request
import requests
import csv
import gspread
import os.path
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

scopes = [
    "https://www.googleapis.com/auth/spreadsheets"
]

credential = Credentials.from_service_account_file("credentials.json", scopes=scopes)
client = gspread.authorize(credential)

spreadsheet_id = "1Q_7ZcMpJeyHMhlhcFL3xvh3JpnSTZL12otyvzzZ9108"
spreadsheet = client.open_by_key(spreadsheet_id)

values = spreadsheet.sheet1.row_values(1)
print(values)

app = Flask(__name__)

@app.route('/getProfit', methods=['POST'])
def getProfit():
    dailyProfit = request.form.get("dailyProfit")
    
    # with open('file.csv', 'w', newline='') as file:
    #     dailyProfit = int(dailyProfit)
    #     writer = csv.writer(file)
    #     writer.writerow([dailyProfit])
    
    return render_template("index.html" , dailyProfit=dailyProfit)

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
    