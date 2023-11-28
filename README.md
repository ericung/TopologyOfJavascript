# Topology Of Javascript

### 1. Halting

![01Halting](Resources/01Halting.jpg)

### 2. Pumping Lemma

![02PumpingLemma](Resources/02PumpingLemma.jpg)

``` js
function pumpingLemma(n)
{

	var string = "";

	// constant 1
	string += "abcdefg ";
	string += "hello ";

	// monomial decider of x
	// it is coded in this style to show some rigor
	var y = 0;
	// this while loop is here to form one part of the halting property
	while (y < n)
	{
		// this represents the monomial of x
		for (int i = 0; i < 1; i++)
		{
			// these "if else" conditions form the decision functions
			if (y >= n)
			{
				break;
			}
			
			// any if conditions here are finishing states
			// for simplicity, just append to the string return variable
			string += "-loop-";

			// this increment might be overlooked but it is the second part to forming the halting property
			y++;
		}
	}

	// constant 2
	string += " world";
	string += " hijklmno";

	return string;
}
```
