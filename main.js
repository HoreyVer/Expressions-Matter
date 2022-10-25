function expressionMatter(a, b, c) {
	let max = 0;
	let a1 = a * (b + c);
	let a2 = a * b * c;
	let a3 = a + b * c;
	let a4 = (a + b) * c;
	let a5 = a + b + c;
	if (a1 >= max) {
		max = a1;
	}
	if (a2 >= max) {
		max = a2;
	}
	if (a3 >= max) {
		max = a3;
	}
	if (a4 >= max) {
		max = a4;
	}
	if (a5 >= max) {
		max = a5;
	}
	return max;// highest achievable result
}

//comment task