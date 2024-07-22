from flask import Flask, render_template, redirect, request
import csv

app = Flask(__name__)

@app.route('/getProfit', methods=['POST'])
def getProfit():
    dailyProfit = request.form.get("dailyProfit")
    
    with open('file.csv', 'w', newline='') as file:
        dailyProfit = int(dailyProfit)
        writer = csv.writer(file)
        writer.writerow([dailyProfit])
    
    return render_template("index.html" , dailyProfit=dailyProfit)

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
    