import requests

response = requests.get('https://randomuser.me/api/')
print(response.status_code)
data = response.json()
