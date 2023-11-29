# Topology Of Javascript

### 1. Halting

![01Halting](Resources/01Halting.jpg)

### 2. Pumping Lemma

![02PumpingLemma](Resources/02PumpingLemma.jpg)

### 3. Pumping Lemma Generator

g(x) = c1 + x + c2 is a generator function for the pumping lemma

``` js
function pumpingLemmaGenerator(n)
{

	var string = "";

	// constant 1
	string += "abcdefg ";
	string += "hello ";

	// monomial decider of x
	var y = 0;
	while (y < n)
	{
		for (var i = 0; i < 1; i++)
		{
			if (y >= n)
			{
				break;
			}
			else
			{
				string += "-loop-";
			}

			y++;
		}

	}

	// constant 2
	string += " world";
	string += " hijklmno";

	return string;
}
```

### 4. The Pumping Lemma Decider of Two Decision Functions

**Pumping Lemma Decider**\
1. c1 + x + c2 = c1 -x + c2\
2. c1 + x + c2 != c1 -x + c2

**Definition of Deciders**\
A decider is a set of decision functions that decide if a string is in the language

**Theorem of Generator Of A Deciders**\
If there exists a decider for a pumping lemma language, there exists a generator for the decider of a pumping lemma language

Proof\
Given c1 + x + c2 = c1 -x + c2 and c1 + x + c2 != c1 -x + c2 forming the pumping lemma language decider\
Then c1 + x + c2 is the left hand side of both decision functions forming a function\
By definition, c1 + x + c2 is a generator function\
*x*

x is a monomial of one degree meaning that for the pumping lemma language, only one generator function is needed form a generator.

``` js
// c1 + x + c2 = c1 - x + c2
// c1 + x + c2 != c1 - x + c2
function pumpingLemmaDecider(input)
{
	// set the value of the strings
	var c1_1 = "abcdefg ";
	var c1_2 = "hello ";

	var xstr = "-loop-";

	var c2_1 = " world";
	var c2_2 = " hijklmno";

	// deciding through equivalence using the length function
	var c1_1len = c1_1.length;
	var c1_2len = c1_2.length;
	var c1_n = c1_1len + c1_2len;

	var xlen = xstr.length;

	var c2_1len = c2_1.length;
	var c2_2len = c2_2.length;
	var c2_n = c2_1len + c2_2len;

	// the base case decider or the equivalence decider, using the length function to decide
	// len(c1_1) + len(c1_2) + len(xstr) + len(c2_1) + len(c2_2) = input.length
	var inputlen = input.length;
	inputlen -= c1_n - c2_n;
	// if len(input) is less than zero, it doesn't contain the constants
	// using the remainder of len(input), 
	// 	if it isn't divisible by the length of representation of x, 
	// 	it means that len(input) isn't equal to the length of the representation of x
	if ((inputlen < 0)&&(inputlen % xlen !== 0))
	{
		return false;
	}

	// the path decider or reversal decider, using the uniqueness of the string to decide

	// decider for the constant 1 for reversal
	// this two decision functions can be condensed into one decision function forming the decider
	if (input.substring(0,c1_1len) !== c1_1)
	{
		return false;
	}

	if (input.substring(c1_1len, c1_1len+c1_2len) !== c1_2)
	{
		console.log(input.substring(c1_1len, c1_1len+c1_2len));
		return false;
	}

	// monomial decider of x for reversal
	var y = 0;	// halting property 1 and also used for the length function for equivalence
	var exitWhile = false; // halting property 2
	// there are now two halting properties that we see that needs to be true for this decider to halt
	// 1. length of the current string being decided of length y, the length function
	// 2. when the decider of x enters an finishing state, exit the while loop, the finishing state function
	while ((!exitWhile) && (c1_n+xlen*(y+1) < input.length))
	{
		for (var i = 0; i < 1; i++)
		{
			// the length function
			if (c1_n+xlen*(y+1) > input.length)
			{
				exitWhile = true;
				break;
			}
			// decide if the current substring that is of the input is equal to the string of x
			else if (input.substring(c1_n+xlen*y,c1_n+xlen*y+xlen) !== xstr)
			{
				exitWhile = true;
				break;
			}

			y++;
		}

	}

	// this variable is equivalence through looping
	var c1xlen = c1_n + xlen*y;

	// decider for the constant 2 for reversal
	// again, these decision functions can be condensed into one decision function
	if (input.substring(c1xlen, c1xlen+c2_1len) !== c2_1)
	{
		return false;
	}

	if (input.substring(c1xlen + c2_1len, c1xlen + c2_1len + c2_2len) !== c2_2)
	{
		return false;
	}

	// the length function through equivalence through looping
	var decider_total = c1xlen + c2_1len + c2_2len;

	return decider_total === input.length;
}
```

### 5. The Pumping Lemma Decision Function of Equivalence

First, this equation needs to be true

c1 + x + c2 = c1 - x + c2

``` js
// c1 + x +  c2 = c1 + -x + c2
// equivalence <=> a = -a
function pumpingLemmaDeciderEquivalence(input)
{

	// set the value of the strings
	var c1_1 = "abcdefg ";
	var c1_2 = "hello ";

	var xstr = "-loop-";

	var c2_1 = " world";
	var c2_2 = " hijklmno";

	// deciding through equivalence using the length function
	var c1_1len = c1_1.length;
	var c1_2len = c1_2.length;
	var c1_n = c1_1len + c1_2len;

	var xlen = xstr.length;

	var c2_1len = c2_1.length;
	var c2_2len = c2_2.length;
	var c2_n = c2_1len + c2_2len;

	// equivalence through the length function
	// len(c1) + len(xlen*x) + len(c2) = len(c1) + len(xlen)y + len(c2)
	// len(xlen*x)/len(xlen) = y <=> len(xlen*x)%len(xlen) === y such that y is the remainder
	// y is 0 because we are using equivalence meaning we are taking x/x in Q*
	
	return (input.length - c1_n - c2_n) % xlen === 0;
}
```

### 6. The Pumping Lemma Decision Function of Reversal

Then this equation also has to be true

c1 + x + c2 != c1 - x + c2

We are taking the string, s, such that s is in c1 + x + c2 on the left hand side

``` js
// c1 + x + c2 != c1 -x + c2
// reversal <=> a != -a 
function pumpingLemmaDeciderReversal(input)
{
	// set the value of the strings
	var c1_1 = "abcdefg ";
	var c1_2 = "hello ";

	var xstr = "-loop-";

	var c2_1 = " world";
	var c2_2 = " hijklmno";

	// keep track of path
	const path = [];

	// decider for c1 for reversal of a != -a
	var c1 = c1_1 + c1_2;
	var x = 0;
	var finishX = false;

	if (input.length < c1.length)
	{
		return false;
	}

	while (!finishX)
	{
		for (var i = 0; i < c1.length; i++)
		{
			if (input[x] !== c1[i])
			{
				path.push("0");
				finishX = true;	
				break;
			}

			x++;
		};

		if (!finishX)
		{
			path.push("1");
		}

		finishX = true;
	}


	// monomial decider of x for reversal of a != -a
	var y = 0;	// halting property 1 and also used for the length function for equivalence
	var finishY = false; // halting property 2
	// there are now two halting properties that we see that needs to be true for this decider to halt
	// 1. length of the current string being decided of length y, the length function
	// 2. when the decider of x enters an finishing state, exit the while loop, the finishing state function
	while (!finishY)
	{
		for (var i = 0; i < 1; i++)
		{
			// decide if the current substring that is of the input is equal to the string of x
			if (input.substring(x+xstr.length*y,x+y*xstr.length+xstr.length) !== xstr)
			{
				path.push("0");
				finishY = true;
				break;
			}

			path.push("1");
			y++;
		}
	}

	// just remove extra 0
	path.pop();

	// decider for c2 for reversal of a != -a
	var c2 = c2_1 + c2_2;
	var z = 0;
	var finishZ = false;

	if (input.length < (x + y*xstr.length + c2.length))
	{		
		path.push("0");
		finishZ = true;
	}

	while (!finishZ)
	{
		for (var i = 0; i < c2.length; i++)
		{
			if (input[x + y*xstr.length + z] !== c2[i])
			{
				path.push("0");
				finishZ = true;
				break;
			}

			z++;
		};

		if (!finishZ)
		{
			path.push("1");
		}

		finishZ = true;
	}

	// output path
	console.log(path.join(""));

	return true;
}
```
