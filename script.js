
//Even or Odd
const check=(num)=>{

    if(num%2===0)
    return "even"
    else
    return "odd"
}

console.log(check(4));
console.log(check(7));
console.log(check(0));


//Result Evaluator
function evaluateResult(marks) {

    if (marks < 0 ||marks > 100) {
        console.log("Invalid marks");
        return null;
    }

    if (marks >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(evaluateResult(75));   
console.log(evaluateResult(40));   
console.log(evaluateResult(120));  


//Maximun Finder
const findMax = (a, b, c) => {

    if (a >= b && a >= c) {
        return a;
    } 
    else if (b >= a && b >= c) {
        return b;
    } 
    else {
        return c;
    }
};

console.log(findMax(10, 25, 15)); 
console.log(findMax(5, 3, 8));    
console.log(findMax(9, 9, 2));    


//Accumulator
function sumToN(n) {

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;   
    }
    return sum;
}

console.log(sumToN(5));   
console.log(sumToN(10));  


//Multiplication Table Generator
function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num, "x", i, "=", num * i);
    }
}
printTable(3);


//Digit Counter 
function countDigits(num) {

    let count = 0;
    if (num === 0) {
        return 1;
    }

    while (num > 0) {
        num = (num - (num % 10)) / 10;
        count++;
    }
    return count;
}

console.log(countDigits(1234));   
console.log(countDigits(9));      
console.log(countDigits(10000));


//Number Reverser
function reverseNumber(num) {

    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = (num - (num % 10)) / 10;
    }
    return reversed;
}

console.log(reverseNumber(1234)); 
console.log(reverseNumber(500));  
console.log(reverseNumber(91));   


//Factorial Engine
function factorial(n) {

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(1)); // 1


// Prime Validator
function isPrime(num) {

    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;  
        }
    }
    return true;  
}

console.log(isPrime(7));   
console.log(isPrime(10));  
console.log(isPrime(2)); 


//Pattern Builder — Star Triangle
function printPattern(n) {

    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row = row + "*";
        }
        console.log(row);
    }
}
printPattern(4);
