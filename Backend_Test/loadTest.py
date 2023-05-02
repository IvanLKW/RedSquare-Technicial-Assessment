import requests

resp = requests.get('http://127.0.0.1:8000/my-first-api?name=Ander')
resp.text