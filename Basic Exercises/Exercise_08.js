//Write a Node.js program to check if a number is prime.
function isPrime(n) {
	for (let i = 2; i < n; i++) {
		if (n % i === 0) return false;
	}
	return n !== 1;
}
