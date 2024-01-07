function myFirstFunction() {
    console.log("Hello");
}

let res = myFirstFunction();

function mySecondFunction() {
    return "Hello";
}

res = mySecondFunction();

console.log(res);


function myThirdFunction(a, b = 1) {
    return a + b;
}
res = myThirdFunction(4, 2);

console.log (res)


function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);

console.log(value)

let text = "The temperature is " + toCelsius(77) + " Celsius";
console.log(text)

let myFourthFunction = function (a) {
    return a;
}

console.log(myFourthFunction(6));

let b = myFourthFunction(a);

console.log(b);

let myFifthFunction = (b) => {
    return b;
}

let mySixthFunction = c => c + 1;

console.log(mySixthFunction(7));
