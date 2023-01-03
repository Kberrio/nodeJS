// Write a Node.js program to calculate the factorial of a number.
function factorial(n) {
	if (n === 1) return 1;
	return n * factorial(n - 1);
}
