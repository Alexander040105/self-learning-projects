from flask import Flask, render_template, request, redirect
import os
import requests
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')
from matplotlib.ticker import ScalarFormatter, MultipleLocator
import os
from io import BytesIO
import base64
from dotenv import load_dotenv, dotenv_values 
load_dotenv() 
API_KEY = os.getenv('AQI_KEY')





app = Flask(__name__)

#make the plots
def processing_image():
    city = request.form.get("city")
    api_url = 'https://api.api-ninjas.com/v1/airquality?city={}'.format(city)
    response = requests.get(api_url, headers={'X-Api-Key': API_KEY})
    if response.status_code == requests.codes.ok:
        data = response.json()
        pollutants = []
        elementsAqi = []
        elementsConcentration = []
        for elements in data:
            if isinstance(data[elements], dict) and 'aqi' in data[elements]:
                elementsAqi.append(int(data[elements]['aqi']))
                elementsConcentration.append(int(data[elements]['concentration']))
                pollutants.append(elements)
        
        # overallAqi.append(data['overall_aqi'])
        # print(overallAqi)
    else:
        print("Error:", response.status_code, response.text)
        
    dataFrame = {'Pollutants': pollutants, 'Pollutants Concentration': elementsConcentration, 'Pollutants Aqi': elementsAqi}
    pollutantsDataFrame = pd.DataFrame(dataFrame)
    
    fig, (ax1, ax2) = plt.subplots(1,2, figsize=(7,4))
    
    #plotting aqi
    ax1.bar(pollutantsDataFrame['Pollutants'], pollutantsDataFrame['Pollutants Aqi'], color='#36BFBF', label='Pollutants AQI')
    ax1.set_title('AQI of Air Pollutants')
    ax1.set_xlabel('Pollutants')
    ax1.set_ylabel('Values')
    ax1.legend()
    
    #plotting concentration
    ax2.bar(pollutantsDataFrame['Pollutants'], pollutantsDataFrame['Pollutants Concentration'], color='#36BFBF', label='Pollutants Concentration')
    ax2.set_title('Concentration of Air Pollutants')
    ax2.set_xlabel('Pollutants')
    ax2.set_ylabel('Values')
    ax2.legend()

    plt.xlabel('Pollutants')
    plt.ylabel('Values')
    plt.legend()
    plt.tight_layout()
    
    #saving the plot as image using base64
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    plot_base64 = base64.b64encode(buffer.getvalue()).decode('utf-8')
    plt.close()
    
    # Convert DataFrame to list of dictionaries
    pollutants_aqi = pollutantsDataFrame.to_dict(orient='records')
    pollutants_concentration = pollutantsDataFrame.to_dict(orient='records')
    
    
    return plot_base64, pollutants_aqi, pollutants_concentration


@app.route("/display", methods=["POST"])
def display():
    city = request.form.get("city")
    if not city:
        return render_template("fail.html")
    else:
        city2 = ((" of " + city))
        plot_base64, pollutants_aqi, pollutants_concentration = processing_image()
        return render_template("index.html", plot_base64=plot_base64, pollutantsAqi=pollutants_aqi, pollutantsConcentration=pollutants_concentration, city2=city2)

@app.route("/")
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)