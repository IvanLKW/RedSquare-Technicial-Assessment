# Backend Test

### Question 1
The Python code file **TechTest4-1.py** is written to have the function f(n) in which when it is inside the loop:
1. When the counter is divisable by 3, print "fizz"
2. When the counter is divisable by 5, print "buzz"
3. When the counter is divisable by both 3 and 5, print "fizzbuzz"
4. Or else print out the number

#### Sample result when f(15) is entered
```
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
```

### Question 2
The Python code file **TechTest4-2.py** is an API Service for a Random Hash Machine Application. The API is created using the FastAPI library.
There are two endpoints on this API whereby:
1. Endpoint 1 returns a random hash string using SHA-256 algorithm generated using the *secrets* library.
2. Endpoint 2 checks the last character of the string and see if it is numeric and odd number to send a success response body.

There is also a seperate Python code file **loadTest.py** to make a request every second from endpoint 2.

To run the code, enter the following line into the terminal:
```
uvicorn TechTest4-2:app --reload
```

To run the load test code, enter the following line into a seperate terminal:
```
py loadTest.py
```

#### Sample result
```
Example of SHA-256 hash: 
8cd83ba08732b9c9d9aff80c1a4be5b73522eb4fd930c8ff0c1cef03f7a87de0
The last 1 character are `0`. This is an even number. Does not Pass.
INFO:     127.0.0.1:50217 - "GET /endpoint2 HTTP/1.1" 200 OK
Example of SHA-256 hash: 
1c594cd5e37d1adf31494b4cb5ce6062814f6eb24fd159b67e65c1f7b318bf7f
The last 1 character are `f`. This is an alphabet. Does not Pass.
INFO:     127.0.0.1:50217 - "GET /endpoint2 HTTP/1.1" 200 OK
Example of SHA-256 hash: 
5ec0d4ea1d02598183483a03f679efecc0b31c8f1abd08f2d8b4dc1b233d79f9
The last 1 character are `9`. This is a number and odd number. Pass!
INFO:     127.0.0.1:50220 - "GET /endpoint2 HTTP/1.1" 200 OK
```
