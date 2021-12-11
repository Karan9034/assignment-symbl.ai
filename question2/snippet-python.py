# Snippet Using Python, to be used with a Python 3.6+ shell.
# Run `pip install requests` before executing the script.

import requests

res = requests.get('http://localhost:8000/')
data = res.json()['data']

for i in sorted(data, key = lambda i: i['id']):
	print(f'id: {i["id"]}, name: {i["name"]}')