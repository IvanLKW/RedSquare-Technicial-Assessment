from fastapi import FastAPI
app = FastAPI()

@app.get("/endpoint1")
def endpoint1():
    import secrets
    hash = secrets.token_hex(nbytes=32)
    str = "Example of SHA-256 hash: \n" + hash
    return str

@app.get("/endpoint2")    
def endpoint2():
    hash = endpoint1()
    lastChar = hash[-1]
    if lastChar.isnumeric() and int(lastChar) % 2 != 0:
        str = hash + "\nThe last 1 character are `" + lastChar + "`. This is a number and odd number. Pass!"
    elif lastChar.isalpha():
        str = hash + "\nThe last 1 character are `" + lastChar + "`. This is an alphabet. Does not Pass."
    elif int(lastChar) % 2 == 0:
        str = hash + "\nThe last 1 character are `" + lastChar + "`. This is an even number. Does not Pass."
    print(str)
    return str