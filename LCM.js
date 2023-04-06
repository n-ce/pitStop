import { gcddr, gcd } from './GCD.js';

// lcm with gcd with divisive recursion

export function lcmgcddr(a, b) {
	return (a * b) / gcddr(a, b);
}

// lcm with gcd with subtraction

export function lcmgcd(a, b) {
	return (a * b) / gcd(a, b);
}

// lcm without gcd

export function lcmLow(a, b) {
	if (a > b) return lcmLow(b, a);
	for (let i = b; i <= a * b; i += b)
		if (i % a === 0)
			return i;
}
export function lcmHigh(a, b) {
	if (a > b) return lcmHigh(b, a);
	for (let i = a; i <= a * b; i += a)
		if (i % b === 0)
			return i;
}