/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/
console.log("\n -------------------question1-------------\n");
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
console.log("\n -------------------question2-------------\n");
function isAdult(age){
    if(age>=0 && age<18){
        return("you are minor")
    }
    else if (age>=18&& age<60){
        return("you are Adult")
    }
    else {
        return ("you are Adult")
    }
}

console.log('Exercise 2 Result:', isAdult(21));

console.log("\n -------------------question3-------------\n");

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
function isCharAVowel (char){
    if (char.toLowerCase()==="a"||char.toLowerCase()==="e"||char.toLowerCase()==="i"||char.toLowerCase()==="o"||char.toLowerCase()==="u"){
        return true
    }
    else {return false 
    }

}
console.log('Exercise 3 Result:', isCharAVowel("a"));

console.log("\n -------------------question4-------------\n");

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name,domain){

    return(`${name}@${domain}`)
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

console.log("\n -------------------question5-------------\n");
/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
function greetUser(name,TOD){
    return(`Good ${TOD}, ${name}!`)
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

console.log("\n -------------------question6-------------\n");

function maxOfThree(num1,num2,num3){
    let max;
    if (num1>num2){
        max=num1
        if(max<num3){
            max=num3;
        }
    }
    else{
        if(num2>num3){
            max=num2;
            if(max<num3){
               max=num3; 
            }
        }
    }
    return max
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

console.log("\n -------------------question7-------------\n");

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(billAmount,tipPercentage){

    const tipmAmount=billAmount*(tipPercentage/100)
    return (`the tip amount is ${tipmAmount}`);
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

console.log("\n -------------------question8------------\n");


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature (temperature,string){
    let convertedTemp;
    if (string.toLowerCase()==="c"){
        convertedTemp=(temperature*(9/5))+32;
        return(`the Celsius degree ${temperature} is ${convertedTemp} in Fahrenheit`)
    }
    else if (string.toLowerCase()==="f"){
        convertedTemp=(temperature -32)*(5/9);
        return(`the Fahrenheit degree ${temperature} is ${convertedTemp} in Celsius`)
    }

}

console.log('Exercise 8 Result:', convertTemperature(32, "c"));

console.log("\n -------------------question9------------\n");

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator (num1,num2,string){
    if ( typeof num1!="number" ||typeof num2!="number"||typeof string!="string"){
        return(`please enter a valid numbers and string`)
    }
    let output;
    if (string.toLowerCase()==="add"|| string.toLowerCase()==="subtract"||string.toLowerCase()==="multiply"||string.toLowerCase()==="divide"){

       if (string.toLowerCase()==="add"){
            output=num1+num2;
        }
        else if (string.toLowerCase()==="subtract"){
            output=num1-num2;
        }
        else if (string.toLowerCase()==="multiply"){
            output=num1*num2;
        }
        else if (string.toLowerCase()==="divide"){
            output=num1/num2;
        }
        return output; 
    }

    else return (`u didn't enter a valid operation`)
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));

console.log("\n -------------------question10------------\n");

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/
function calculateGrade (score){
    if (typeof score!="number" || score<0 || score>100){
     return (`please enter a valid number`)
    }
    if (score>=90){
    gradeLetter="A";
    }
    else if (score>=80 && score<=89){
    gradeLetter="B";}
    else if (score>=70 && score<=79){
    gradeLetter="C";}
    else if (score>=60 && score<=69){
    gradeLetter="D";}
    else { gradeLetter="F"}
    return (`ur score is ${score}, so the grade is ${gradeLetter}`)   
}

console.log('Exercise 10 Result:', calculateGrade(10));


console.log("\n -------------------question11------------\n");


/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre12'.

Complete the exercise in the space below:
*/
function createUsername (fName,lName){
    const username=fName.slice(0,3)+lName.slice(0,3)+(fName.length+lName.length-1)
    return username
}


console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));


console.log("\n -------------------question11------------\n");




/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/
function numArgs(){
    let numberOfArguments =arguments.length
    return numberOfArguments
}
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));