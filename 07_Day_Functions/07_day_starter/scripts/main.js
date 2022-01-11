console.log(countries)
alert('Open the console and check if the countries has been loaded')

/* Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight. */

function calcWeigth(mass, gravity) {
    return mass * gravity
}

/* Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
Write a function which convert oC to oF convertCelciusToFahrenheit. */

function celsToFahr(temp) {
    return temp*(9/5)+32
}

/* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 
20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */

function bmi(weigth, height) {
    let bmindex = weigth/(height**2)
    if (bmindex < 18.5) {
        return `{bmindex}: Underweight`
    } else if (bmindex < 24.9) {
        return `{bmindex}: Normal`
    } else if (bmindex < 29.9) {
        return `{bmindex}: Overweight`
    } else {
        return `{bmindex}: Obese`
    }
}

/* Quadratic equation is calculated as follows: ax2 + bx + c = 0.
Write a function which calculates value or values of a quadratic equation, solveQuadEquation. */

function solveQuadratic(a, b, c) {
    let solutions = []
    let solution1 = (-b + Math.sqrt(b*b-4*a*c))/2*a
    let solution2 = (-b - Math.sqrt(b*b-4*a*c))/2*a
    if(solution1) {
        solutions.push(solution1)
    }
    if(solution2) {
        solutions.push(solution2)
    }
    return solutions
}

/* Declare a function name reverseArray. It takes array as a parameter 
and it returns the reverse of the array (don't use method). */

function invertirArray(arr) {
    let arrInv = []
    let arrLength = arr.length
    for(let i = arrLength - 1; i >= 0; i--) {
        arrInv.push(arr[i])
    }
    return arrInv
}

/* Declare a function name evensAndOdds . It takes a positive integer as 
parameter and it counts number of evens and odds in the number. */

function evensAndOdds(num) {
    let numOdds = 0
    let numEven = 0
    for (let i = 0; i < num; i++) {
        if (i%2 === 0) {
            numEven++
        } else {
            numOdds++
        }
    }
    return `The number of odds are ${numOdds}.
            The number of even are ${numEven}.`
}

/* Write a function which takes any number of arguments and return the sum of the arguments */

function sum(...args) {
    let sum = 0
    for (const elem of args) {
        sum += elem
    }
    return sum
}

/* Write a function which generates a randomUserIp. */

generateRandomIp = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    let four = Math.floor(Math.random() * 255);
    return `IP: ${one}:${two}:${three}:${four}`
}

/* Write a function which generates a randomMacAddress. */

generateRandomHex = () => {
    let chars = "0123456789ABCDEF";
    let hex = "";
    for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }
    return `#${hex}`
}