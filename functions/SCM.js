// Smallest Common Multiple in a range
import { lcm } from './LCM.js';

export function scm(a, b) {
	if (a > b) return scm(b, a);
	let SCM = 1; // universal divisor
	for (let i = a; i <= b; i++)
		SCM = lcm(SCM, i);
	return SCM;
}

export function scmfcc(a, b) {
	if (a > b) return scm(b, a);
	const numberDivisors = b - a + 1;
	let upperBound = 1;
	for (let i = a; i <= b; i++) {
		upperBound *= i;
	}
	// Test all multiples of 'b'
	for (let multiple = b; multiple <= upperBound; multiple += b) {
		// Check if every value in range divides 'multiple'
		let divisorCount = 0;
		for (let i = a; i <= b; i++)
			// Count divisors
			if (multiple % i === 0)
				divisorCount += 1;
				
		if (divisorCount === numberDivisors)
			return multiple;
	}
}

export function scmfcces6(a,b) {
	if (a > b) return scm(b, a);
	const range = Array(b - a + 1)
		.fill(0)
		.map((_, i) => i + a);
	// Largest possible value for SCM
	const upperBound = range.reduce((prod, curr) => prod * curr);
	// Test all multiples of 'b'
	for (let multiple = b; multiple <= upperBound; multiple += b) {
		// Check if every value in range divides 'multiple'
		const divisible = range.every((value) => multiple % value === 0);
		if (divisible) {
			return multiple;
		}
	}
}


export function scmfccgcd(a,b) {
	if (a > b) return scm(b, a);
	const range = Array(b - a + 1)
		.fill(0)
		.map((_, i) => i + a);
	const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
	const lcm = (a, b) => a * b / gcd(a, b);
	return range.reduce((multiple, curr) => lcm(multiple, curr));
}

export function scmfccpf(a,b) {
	const primeFactors = {};
	if (a > b) return scm(b, a);
	for (let i = a; i <= b; i++) {
		// Factorize number in range
		const currentFactors = getPrimeFactors(i);
		for (let prime in currentFactors) {
			// Add factor to set or update number of occurrences
			if (!primeFactors[prime] || currentFactors[prime] > primeFactors[prime]) {
				primeFactors[prime] = currentFactors[prime]
			}
		}
	}
	// Build SCM from factorization
	let multiple = 1;
	for (let prime in primeFactors) {
		multiple *= prime ** primeFactors[prime];
	}
	return multiple;
}

// Compute prime factors of a number
function getPrimeFactors(num) {
	const factors = {};
	for (let i = 2; i <= num; i++) {
		// Count occurances of factor
		// Note that composite values will not divide num
		while ((num % i) === 0) {
			factors[i] = (factors[i]) ? factors[i] + 1 : 1;
			num /= i;
		}
	}
	return factors;
}
