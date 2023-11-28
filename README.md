# Topology Of Javascript

### 1. Halting

![01Halting](Resources/01Halting.jpg)

### 2. Pumping Lemma

![02PumpingLemma](Resources/02PumpingLemma.jpg)

``` js
function pumpingLemma(n)
{

	var string = "";

	string += "abcdefg ";
	string += "hello ";

	for (let i = 0; i < n; i++)
	{
		string += "-loop-";
	}

	string += " world";
	string += " hijklmno";

	return string;
}

```
