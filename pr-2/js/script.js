const outputDiv = document.getElementById('output');

function displayResult(taskNum, description, result) {
    const div = document.createElement('div');
    div.className = 'result-item';
    div.innerHTML = `<strong>Task ${taskNum}:</strong> ${description} <br> <pre>${result}</pre>`;
    outputDiv.appendChild(div);
}

// 1. Reverse a number
let n1 = 12345, rev1 = 0, temp1 = n1;
while(temp1 > 0) {
    rev1 = (rev1 * 10) + (temp1 % 10);
    temp1 = Math.floor(temp1 / 10);
}
displayResult(1, "Reverse a number (12345)", rev1);

// 2. Palindrome
let n2 = 121, rev2 = 0, temp2 = n2;
while(temp2 > 0) {
    rev2 = (rev2 * 10) + (temp2 % 10);
    temp2 = Math.floor(temp2 / 10);
}
displayResult(2, "Check Palindrome (121)", n2 === rev2 ? "Yes, it is a Palindrome" : "No");

// 3. Fibonacci
let n3 = 10, a = 0, b = 1, fib = "";
for(let i=1; i<=n3; i++) {
    fib += a + " ";
    let next = a + b; a = b; b = next;
}
displayResult(3, "Fibonacci series (10 terms)", fib);

// 4. Factorial
let n4 = 5, fact = 1;
for(let i=1; i<=n4; i++) fact *= i;
displayResult(4, "Factorial of 5", fact);

// 5. Prime Number
let n5 = 17, isPrime = true;
for(let i=2; i < n5; i++) {
    if(n5 % i === 0) { isPrime = false; break; }
}
displayResult(5, "Is 17 a Prime number?", isPrime ? "Yes" : "No");

// 6. Count Digits
let n6 = 98765, count = 0, temp6 = n6;
while(temp6 > 0) { temp6 = Math.floor(temp6/10); count++; }
displayResult(6, "Count digits in 98765", count);

// 7. Sum of Digits
let n7 = 555, sum7 = 0, temp7 = n7;
while(temp7 > 0) { sum7 += (temp7 % 10); temp7 = Math.floor(temp7/10); }
displayResult(7, "Sum of digits (555)", sum7);

// 8. Armstrong Number
let n8 = 153, sum8 = 0, temp8 = n8;
while(temp8 > 0) {
    let d = temp8 % 10;
    sum8 += (d * d * d);
    temp8 = Math.floor(temp8/10);
}
displayResult(8, "Is 153 an Armstrong number?", sum8 === n8 ? "Yes" : "No");

// 9. Power
let base = 2, exp = 3, res9 = 1;
for(let i=0; i<exp; i++) res9 *= base;
displayResult(9, "Power (2 to the 3)", res9);

// 10. Pattern
let pattern1 = "";
for(let i=1; i<=5; i++) {
    for(let j=1; j<=i; j++) {
        pattern1 += j;
    }
    pattern1 += "\n";
}
displayResult(10, "Number Pattern", pattern1);


// 11. Pattern
let pattern2 = "";
for(let i=5; i>=1; i--) {
    for(let j=1; j<=i; j++) {
        pattern2 += j;
    }
    pattern2 += "\n";
}
displayResult(11, "Number Pattern", pattern2);

// 12. Pattern
let pattern3 = "";

for (let i = 5; i >= 1; i--) {
    pattern3 += "  ".repeat(5 - i);

    for (let j = 1; j <= i; j++) {
        pattern3 += j;
    }

    pattern3 += "\n";
}
displayResult(12, "Number Pattern", pattern3);

// 13. Pattern
let pattern4 = "";

for (let i = 1; i <= 5; i++) {
    pattern4 += "  ".repeat(5 - i);

    for (let j = 1; j <= i; j++) {
        pattern4 += j;
    }

    pattern4 += "\n";
}
displayResult(13, "Number Pattern", pattern4);