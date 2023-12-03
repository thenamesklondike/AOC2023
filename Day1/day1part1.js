const fs = require('fs');  //fs = file system module. 

let data, lines;

try {
     data = fs.readFileSync('puzzlepart1.txt', 'utf8'); // we read in puzzle.txt
     lines = data.split(/\r\n|\n/); //Split the lines up for new lines and returns
} catch (err) {
    console.error('Error reading the file:', err);
}

console.log(lines[0]);

function isNumber(char) {
    return /^[0-9]$/.test(char); //function that returns true if it is a number. 
}


function getFrontNumber(inputString){  //searches the arrays for the first number. this searches front to back.
for(i = 0; i < inputString.length; i++){
    if(isNumber(+inputString[i])){
            return inputString[i];
        }
    }

}

function getLastNumber(inputString) {  //searches the arrays for the last number. this searches back to front.
    for(i = inputString.length; i >= 0; i--){
        if(isNumber(+inputString[i])){
                return inputString[i];
        }
    }
}

let totalNumber = 0; 

for(z = 0; z < lines.length; z++){ //here we are cyclcling through each line for the first and last numbers. 
    let currentNumber = `${getFrontNumber(lines[z])}${getLastNumber(lines[z])}`
    totalNumber = totalNumber + parseInt(currentNumber); //we are converting a string to an int and then getting the sum of all the lines. 
}

console.log(`Total Number: ${totalNumber}`);
//let testNumber = 2;
//let currentNumber = `${getFrontNumber(lines[testNumber])}${getLastNumber(lines[testNumber])}`
//console.log(getFrontNumber(lines[testNumber]));
//console.log(getLastNumber(lines[testNumber]));
//console.log(currentNumber);
