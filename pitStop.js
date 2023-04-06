// An accessory function for randomising inputs

export const randomNum = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

// Record time taken for a function for a given number of and arguments iterations

export function timeTaken(fx, iterations, ...args) {
	const startTime = performance.now();
	for (let i = 0; i < iterations; i++) fx(...args);
	const result = performance.now() - startTime;

	return result < 1000 ?
		result.toFixed(1) + ' ms':
		(result / 1000).toFixed(1) + ' s';
}

// main function for testing,analysis and comparison

export function pitStop(iterations, args, ...functions) {
	const results = [];
	for (const fx of functions) {
		results.push({
			name: fx.name,
			time: timeTaken(fx, iterations, ...args),
			output: fx(...args)
		});
	}
	return console.table(results);
}