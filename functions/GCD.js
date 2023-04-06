// euclidean algorithm by subtraction

export function gcd(a, b) {
	a = Math.abs(a);
	b = Math.abs(b);
	while (a !== b)
		a > b ? a = a - b : b = b - a;
	return a;
}

// recursive euclidean algorithm by subtraction

export function gcdr(a, b) {
	a = Math.abs(a);
	b = Math.abs(b);
	return a == b ?
		a :
		a > b ?
		gcdr(a - b, b) :
		gcdr(a, b - a);
}

// euclidean algorithm by division

export function gcdd(a, b) {
	a = Math.abs(a);
	b = Math.abs(b);

	if (b > a)[a, b] = [b, a];
	while (b != 0)[a, b] = [b, a % b];

	return a;
}

// recursive euclidean algorithm by division

export function gcddr(a, b) {
	a = Math.abs(a);
	b = Math.abs(b);

	if (b > a)[a, b] = [b, a];
	return b === 0 ? a : gcddr(b, a % b);
}