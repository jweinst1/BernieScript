#extra functions for the BernieScript language

#takes two numbers, and takes there difference, and divides it equally between them
def LetsBeFair(num1, num2):
    if num1 > num2:
        diff = num1 - num2
        num1 -= diff
        num1 += diff/2
        num2 += diff/2
        return num1, num2
    elif num1 < num2:
        diff = num2 - num1
        num2 -= diff
        num1 += diff/2
        num2 += diff/2
        return num1, num2

#adds a random amount to every item in a list, to give the people what they need.
def ForThePeople(lst):
    import random
    return [elem+random.randrange(5) for elem in lst]

def TaxTheRich(container, amount):
    if container.__class__ == list:
        for i in range(len(container)):
            container[i] -= amount
        return container
    else:
        return "The Rich have hidden their taxes in offshore bank accounts!"

