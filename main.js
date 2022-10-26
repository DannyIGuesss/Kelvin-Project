// setting a variable to represent kelvin temperature
let kelvin = 0;

// setting the celsius temperature in a variable 
let celsius = kelvin - 273;

// setting fahrenheit temperature by using a formula 
let fahrenheit = celsius * (9/5) + 32;

//using the floor method to round down any floating points we get
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
