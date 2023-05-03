import requests
import time

startTime = time.time()

while True:
    resp = requests.get('http://127.0.0.1:8000/endpoint2')
    print(resp.text)
    time.sleep(1.0 - ((time.time()) - startTime) % 1.0)