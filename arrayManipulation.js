// Task 1: processArray function
const processArray = arr => arr.map(num => num % 2 === 0? num * num : num * 3);

// Task 2: formatArrayStrings function
const formatArrayStrings = (stringArray, numberArray) => stringArray.map((str, index) => numberArray[index] % 2 === 0? str.toUpperCase() : str.toLowerCase());

const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); 

const strings = ["Elegance", "Opulence", "Sophistication", "Grace", "Refinement"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings);
