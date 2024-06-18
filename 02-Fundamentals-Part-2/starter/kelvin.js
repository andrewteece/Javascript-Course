// temperature in kelvin
const kelvin = 500;
// kelvin minus celsius
const celsius = kelvin - 273;
// equation to calculate fahrenheit
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(`The temperature is ${fahrenheit}
	degrees fahrenheit.`);
