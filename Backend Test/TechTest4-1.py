def f(n):
    for x in range(1, n+1):
        fizz = x % 3 == 0
        buzz = x % 5 == 0
        if fizz and buzz:
            print("fizzbuzz")
        elif fizz:
            print("fizz")
        elif buzz:
            print("buzz")
        else:
            print(x)

f(15)