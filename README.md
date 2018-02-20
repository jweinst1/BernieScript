# BernieScript

BernieScript is an fun, easy to use, programming language based around Bernie Sanders and his personality, campaign focus, and speeches. BernieScript was developed with the idea of learning to code in funny, yet educational and inspirational way.

[Playground and Website](http://jweinst1.github.io/BernieScript)
[NPM Page](https://www.npmjs.com/package/berniescript)

### Transcompilation

BernieScript transcompiles to Python code, and can then be executed via a Python Interpreter.

## PlayGround

Try out BernieScript here, and watch your code become Python code!

## Guide

### Phrases

BernieScript uses a special type of keyword called phrases, which are multiple words treated as a single keyword. This compounds the meaning of groups of words into one. For example, when a function is defined in BernieScript, we use the phrase `here's the story`, followed by the function name and parameters. However, the words `the story` or `here's` have no individual meaning or use, and will raise an error.

#### Numbers

In order to convey the accurate, most understandable information to the people, we need simplicity. Therefore, BernieScript only uses integers as numerical values. We don't do doubles, floats, binary numbers, or any of that stuff. Just like how the tax code is full of loopholes for billionaires and is totally incomprehensible to the average citizen, we believe coding should be a straight forward learning process.

#### Booleans

Instead of using the traditional `True` or `False` values, the language uses more descriptive and accurate terms, related to people who speak the truth, and those who don't. A value that is true is represented as `sounds like bernie`, and a value that is false is represented as `sounds like trump`.

#### Variables

In BernieScript, it's important to understand the importance of one's vote, and that every vote counts. Therefore, when you want to include a variable, we declare a variable by using the phrase `voting as`. So `x voting as 5` means the value of 5 is referenced by x. This is transcompiled to `x = 5`.

You can also do multiple assignment variables, such as `x voting as y voting as z voting as 6`, which assigns all of the variables to the value 6.

#### Arithmetic Operators

When your coding in BernieScript, it's very important to have a good coverage of your arithmetic operators, because proper math leads to everyone getting their fairshare, and prevents greedy corporations and people from obscuring how many is spent or avoiding taxes.

When you want to add something, you simply say `plus`, such as `5 plus 5`, which will return 10.

When you want to subtract two numbers, you type `minus`, such as coding `3 minus 2 minus 1` will give zero.

If you want to multiply something, just type multiply! As in `5 multiply 6 multiply 7`.

Now, when we get to the concept of division, we have to be more cautious on our wording. All too often, things in society, namely the distribution of wealth is divided unequally and unfairly. Therefore, when you want to divide something, you say `fairshare`, or as an example, `10 fairshare 5` will return 2.

When you want to do modulo division, or get the remainder of division, we use the word `tax`, so `10 tax 4` returns 2.

In BernieScript, there is no exponential operator. It's unfair for one number to increase so rapidly and disproportionately to the other numbers in a program, so to make it fair, we passed a bill to prevent that.

BernieScript has a special phrase, thats used for rebinding a variable and adding another number to it, called `fairgame`. Here is an example:

```
>>> x voting as 5
>>> x fairgame 10
>>> x
15
```

#### Comparison Operators

When your programming, it's important to be able to compare certain values to one another. However, we need to be clear on exactly what defines if those values are equal, and where they stand in terms of the people of this country. Each of these phrases specifically identifies the key issues and disparity among values in your code.

###### `too much money`:

When one wants to test if a value is greater than another value, you this the too much money phrase. For example, `6 too much money 7` returns `sounds like trump`, because it's false.

###### `below the poverty line`:

When one wants to test if a value is less than another value, we use the `below the poverty line` phrase, such as `5 below the poverty line 100` returns `sounds like bernie`, since it's true.

###### `income equality`:

Too make sure two values are equal, and especially equal in their income, we use the `income equality` phrase. for example, `7 income equality 3` returns `sounds like trump`, because those two values are not equal.

###### `income inequality`:

Conversely, the opposite of equality is inequality, so you use the phrase `income inequality` to test if two values are unequal.

### Data Structures

BernieScript has two distinct data structures, the `corporation` and `billionaire`. These are important, because they allow you to store values and access them in useful ways, but they also represent the upper class who can easily give and take values and objects as they please.

#### Corporation:

A `corporation` is an ordered collection of elements. It is initialized and represented by special brackets, `$| |$`. For example, one can initialize a `corporation` function in two ways, by saying `lst voting as $|5, 3, 3|$`, or using the corporation function, `lst voting as corporation(3, 4, 4)`.

Corporations have several built in methods, that allow them to control and dominate the computer program, by taking and removing values as they please:

###### `.append()`:

The append method adds a new value at the end of a corporation, so `$|5, 4, 4|$.append(5)` becomes `$|5, 4, 4, 5|$`.

###### `.pop()`:

The pop method removes and returns the last value of the corporation. It can also take a value as a parameter, and will remove and return the first occurrence of the value.

###### `.remove(val)`:

The remove method of the corporation removes the first occurrence of the given parameter `val`. It does not return the value.

###### `.extend(corp)`:

Extends one corporation by another, merge their values together in sequential order. `$|2, 3|$.extend($|4, 4, 4|$)` becomes `$|2, 3, 4, 4, 4|$`

###### `.index(num))`:

The index method gets the value at the `num` index of the corporation. It is non-destructive, and does not remove any values from it.

#### Billionaire:

A `billionaire` is one step up from the abilities of a `corporation`. Instead of ordering their stored values with numbers and indexes, billionaires by pass those rules completely. Instead, they can just put values any where they want them. They have all the power. They can even give values indexes that aren't even numbers! They are represented by the even richer brackets, `$$| |$$`

For example, lets say we make a billionaire, by doing `TheKochBrothers voting as $$| |$$`, we assign a variable to an empty billionaire. Billionaires, work by hoarding and collecting key-value pairs. Lets see some examples below:

```
>>> TheKochBrothers[5] voting as 3
>>> TheKochBrothers
$$|5:3|$$

>>> TheKochBrothers[5]
3
```

As you can see here, `TheKochBrothers` and other billionaires don't abide by the rules of ordering like a `corporation` does, so it can store values in more complex and unfair ways.

#### Loops

BernieScript has two distinct phrases for loops. One is similar to a for loop, while another is similar to a while loop. Here are the formats

When you want to use a for loop, you use the phrase
`to each citizen named <variable> in the working class <data structure>:` Here, the data structure, in brackets, is the name of either the corporation of billionaire you are looping through, and the variable is the assigned variable you will manipulate for each element of the container. Here is an example:

```
>>> Mcdonalds voting as $|5, 5, 5|$
>>> total voting as 0
>>> to each citizen named arnold in the working class Mcdonalds:
>>>    total fairgame arnold
>>> give to the people total
```

Here, `give to the people` returns the variable total. This is a basic procedure of iterating through a corporation, and summing it's values.

If you want to use a while loop, you use the phrase `long as Wallstreet runs congress <condition>:` and then the series of commands you want to execute while the condition evaluates to true, or rather `sounds like bernie`.

#### Control Structures

BernieScript has three distinct control structures, for determining the direction in a function or program.

`when bernie gets elected` corresponds to a condition that if the following value `sounds like bernie`, than the conditions below that phrase are executed. If the value `sounds like trump`, then the statements below the phrase are 	NOT evaluated.

`when you feel the bern` is a repeated `when bernie gets elected` phrase in the same line of control structures. It's the same as `elseif` in python, and follows the same concept as the elected statement.

`otherwise`: is the else statement of BernieScript, it is the default path for any case in which the elected or `when you feel the bern` statements sound like trump.

#### Functions

To define a function in BernieScript, you use a special phrase called `here's the story`, followed by the function name and the paramters. For example, `here's the story addto(num, val):` declares a function named `addto`, with the parameters `num` and `val`.


#### Example Usage:

Here are some example functions written in BernieScript, and their equivalent python code.

```

>>> here's the story sum(corp):
>>>    total voting as 0
>>>    to each citizen named elem in the working class corp:
>>>          total fairgame elem
>>>    give to the people total
>>>
>>> def sum(corp):
>>>    total = 0
>>>    for elem in corp:
>>>       total += elem
>>>    return total
>>>
>>>
```

```
>>> here's the story sumtonum(n):
>>>     current voting as 0
>>>     long as wallstreet runs congress current below the poverty line n:
>>>         current fairgame current plus 1
>>>      give to the people current
>>>
>>> def sumtonum(n):
>>>    current = 0
>>>    while current < n:
>>>       current += current + 1
>>>    return current
>>>
```
