//Write a Node.js program to find the greatest common divisor (GCD) of two numbers.
function gcd(a, b) {
	if (b === 0) return a;
	return gcd(b, a % b);
}
