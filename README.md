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
	var y = 0;
	while (y < n)
	{
		for (int i = 0; i < 1; i++)
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
