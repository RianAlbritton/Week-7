/*1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!*/

   let ages = [3, 9, 23, 64, 2, 8, 28, 93]
     console.log(ages[ages.length - 1] - ages[0]);
    
/*Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).*/

   //let ages = [3, 9, 19, 23, 64, 2, 8, 22, 28, 93]
    console.log(ages[ages.length - 1] - ages[0]);

/*Use a loop to iterate through the array and calculate the average age.*/

   //let ages = [3, 9, 23, 64, 2, 8, 28, 93];
 
    let sumOfAges = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
       
    console.log(sumOfAges / ages.length);

    
/*2 Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/
 
    let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    let length = names.map (function (element) {
        return element.length;
});

    console.log(length);

    console.log(names.join());
       
/*3 How do you access the last element of any array?  */

  let lastElement = names[names.length - 1];
    console.log(lastElement);

/*4 How do you access the first element of any array?*/
  let firstElement = names[0];
    console.log(firstElement);

/*5 Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.*/

let nameLengths = [6, 3, 2, 5, 4, 3];

let combLengths = nameLengths.concat(length)
    console.log(combLengths);

/*6 Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.*/

let tally = combLengths.reduce (function(accumulator, currentValue){
    return accumulator + currentValue;
})
console.log(tally);

/*7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello')*/

function repeatWord(word, n) {
    let repeatedWord = '';
    for (let i = 0; i < n; i++) {
        repeatedWord += word;
    }
    return repeatedWord;
}
console.log(repeatWord('Hello', 3));

/*8 Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.*/

let fullName = (firstName, lastName) => {
    console.log (firstName, "", lastName);
}

fullName("Rian", "Albritton");

/*9 Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100*/


let numbers = [25, 50, 30, 15, 10];
    let sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sumOfNumbers > 100);


/*10 Write a function that takes an array of numbers and returns the average of all the elements in the array.*/

   
    console.log(sumOfNumbers / numbers.length);


/*11 Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.*/

function theFunction (a, b) {
    console.log(a > b);
}

theFunction (sumOfAges / ages.length, sumOfNumbers / numbers.length);


/*12 Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/

let moneyInPocket = 12.00
let isHotOutside = true

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (moneyInPocket > 10.50 && isHotOutside === true) {
        console.log(true);
    }
    else{
        console.log(false);
    }
}
console.log(moneyInPocket > 10.50 && isHotOutside === true);

/*13 Create a function of your own that solves a problem. In comments, write what the function does and why you created it.*/

let cashOnHand = 140
let armbandCost = 20

function howManyFriends (cashOnHand, armbandCost) {
   console.log(cashOnHand / armbandCost);
}

howManyFriends(cashOnHand, armbandCost);
