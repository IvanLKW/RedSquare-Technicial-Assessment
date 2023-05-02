def f(n):
    for x in range(1,n+1):
        if x % 3 == 0:
            if x % 5 == 0:
                print("fizzbuzz")
            else:
                print("fizz")
        elif x % 5 == 0:
            if x % 3 == 0:
                print("fizzbuzz")
            else: 
                print("buzz")
        else:
            print(x)

f(15)

