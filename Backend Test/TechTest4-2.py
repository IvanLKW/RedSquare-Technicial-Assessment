import secrets
from fastapi import FastAPI
app = FastAPI()

@app.get("/my-first-api")
def endpoint1():
    print("Example of SHA-256 hash")
    hash = secrets.token_hex(nbytes=32)
    print(hash)
    return hash
    
def endpoint2():
    hash = endpoint1()
    lastChar = hash[-1]
    if lastChar.isnumeric() and int(lastChar) % 2 != 0:
        print("The last 1 character are `" + lastChar + "`. This is a number and odd number. Pass!")
    elif lastChar.isalpha():
        print("The last 1 character are `" + lastChar + "`. This is an alphabet. Does not Pass.")
    elif int(lastChar) % 2 == 0:
        print("The last 1 character are `" + lastChar + "`. This is an even number. Does not Pass.")
            
