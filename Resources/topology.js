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
