import requests

url = "https://yahoo-finance15.p.rapidapi.com/api/v2/markets/tickers"

querystring = {"type":"STOCKS","page":"1"}

headers = {
	"X-RapidAPI-Key": "cf77ce770amsh138dc2dea2cc5d9p11e87ajsn3f8aca890336",
	"X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

data = response.json()
print(data)