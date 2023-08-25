
console.log("Hello World");
console.log("Hello Jim");

let total = 4; //Can use this in the console in Chrome

console.log("Enter a number:")
//let age = prompt("Enter your age:");
let age = 30;
if (age >= 21) {
    console.log("You can enter the club");
} else if (age === 21) {
    console.log("Lol, you just barely made it");
} else {
    console.log("Nah fam, too young");
}

let weight = "w";
if (weight > 325) {
    console.log(`You can't ride at ${weight}lbs`);
} else if (weight >= 100 && weight <= 325) {
    console.log("You're ok to ride");
} else if (weight < 0) {
    console.log(`You entered:${weight}lbs, please enter a valid weight`);
} else if (weight < 100) {
    console.log(`Nah fam, too light at ${weight}lbs`);
} else {
    console.log(`That's not even a number...`);
}

const password = "passwordWithNoSpaces";
if (password.length >= 8 && password.indexOf(" ") === -1) {
    console.log("Long Enough Password and No spaces!")
} else {
    console.log("Password not LONG enough")
}

const mystery = 'P7abcdef';
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}

let mishMashArr = [true, "pineapple", "kikko", 44, 12, "Anni"]
console.log(mishMashArr[2]);
console.log(mishMashArr.length); //6 elements
mishMashArr[2] = "Alex"; //replace element at specific index
console.log(mishMashArr[2]);
mishMashArr.push("Wyatt");
mishMashArr.push("Jason"); //We added two dude
console.log(mishMashArr);
mishMashArr.pop(); //pops Jason off
console.log(mishMashArr);
mishMashArr.unshift("I'm at the START!"); //added to start!
console.log(mishMashArr);

let fishTank = ["Tuna", "Salmon", "Tilapia"];
let birdCage = ["Chicken", "Turkey", "Duck"];

let TankCage = fishTank.concat(birdCage);
console.log(TankCage);
//console.log(TankCage.sort()); //sort UTF
console.log(TankCage.includes("Tuna"));//true
console.log(TankCage.includes("tuna"));//false
console.log(TankCage.indexOf("Salmon"));
//console.log(TankCage.reverse()); //Will keep it reversed!
console.log(TankCage.slice(2)); //makes copy if no arguments, or index of n to end
console.log(TankCage);
console.log(TankCage.splice(0, 3,)); //start,end,values
console.log(TankCage);
TankCage.splice(1, 0, "Super Chicken");
console.log(TankCage);
console.log("===========================================");
const nums = [1, 2, 3]; //you can add/remove all you want still

const board = [
    ["O", "X", "O"],
    ["O", "X", "O"],
    ["O", "X", "O"]
]
console.log(board);
console.log(board[1][1]);

const fitBitData = {
    totalSteps: 30870,
    totalMiles: 200,
    avgCalsBurned: 469,
    avgSleep: 2,
    userName: "JimWizard"
}
console.log(fitBitData.totalMiles);


const product = {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"]
}
console.log(product["price"]);//Every key is converted to a STRING
console.log(product.flavors[1]);



const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
console.log(fullAddress);

const midterms = {
    danny: 90,
    jim: 45
}
console.log(midterms.danny);
midterms.danny = 55;
console.log(midterms.danny);

const student = {
    firstName: 'jim',
    lastName: 'wizard',
    exams: {
        midterms: 99,
        final: 88
    }
}
console.log(student.exams.final);

const comments = [
    { userName: "", text: "", votes: 0 },
    { userName: "", text: "YOOOOOOOOOOOO", votes: 0 },
    { userName: "", text: "", votes: 0 },
]
console.log(comments[1].text);

for (let i = 0; i < 5; i++) {
    console.log(`Hi number ${i + 1}`);
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

const animals = ['Wolf', "Tiger", "Gorilla"];
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

console.log("===========================");
for (let i = animals.length - 1; i >= 0; i--) {
    console.log(i, animals[i]);
}

//Outer happens once, then inner five times 60x!
for (let i = 0; i <= 10; i++) {
    console.log(`i is ${i}`);
    for (let j = 0; j <= 5; j++) {
        console.log(`    j is ${j}`);
    }
}

const seating = [
    ["Kris", "Bea", "Maria"],
    ["Wyatt", "Anni", "Hubert"],
    ["Mark", "Menchie", "Katrina"]
]

for (let i = 0; i < seating.length; i++) {
    console.log(seating[i]);
}
console.log('=====^Prints out each array^==========')

for (let i = 0; i < seating.length; i++) {
    const row = seating[i];
    console.log(`ROW: #${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

for (let row of seating) {
    for (let student of row) {
        console.log(student + " New VERSION ");
    }
}
const konohaNinjas = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
]

//--------------------------------------------
/*
while (!gameOver) {
}
*/
/*
const secret = "Password";
let guess;
while (guess !== secret) {
    guess = prompt("Enter Password");
}
console.log("Yay, you entered correctly");
*/
/*
let input = prompt("Hey say MEAT").toUpperCase();
while (true) {
    input = prompt("You said: " + input).toUpperCase();
    if (input === "MEAT") {
        break;
    }
}
console.log("What are you LUFFY?");
*/

/*
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}

if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}
*/

//for of is short hand for loop
const subreddits = ["Pikmin", "Books", "Bleach", "Naruto"]
for (let sub of subreddits) {
    console.log(sub);
}

//functions
console.log(`Dice:`)
console.log(Math.floor(Math.random() * 6) + 1); //die

function rollDice(sides) {
    console.log(Math.floor(Math.random() * sides) + 1);
}

rollDice(6);
rollDice(6);
rollDice(6);
rollDice(20);

function hiPerson(person, age) {
    console.log(`HI ${person} you are ${age} years old!`);
}

hiPerson('Wyatt', 29);
hiPerson('Anni', 28);

function rant(message) {
    for (let i = 0; i < 3; i++) {
        console.log(message.toUpperCase());
    }
}

rant('I HATE beets..');

function repeat(str, num) {
    for (let i = 0; i < num; i++) {
        console.log(str);
    }
}

repeat("I'm gonna repeat", 5);

function combine(str1, str2) {
    return `${str1} ${str2} SWAG!!!!!`;
}
let sum = combine("YOLO", "GUCCI");
console.log(sum);

//Methods are just functions inside objects

const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num ** 2;
    },
    cube: function (num) {
        return num ** 3;
    },
}

console.log(myMath.square(4));
console.log(myMath.cube(2));

//js shorthand
const myNewMath = {
    blah: "Hi!",
    add(x, y) {
        return x + y;
    },
    multiply(x, y) {
        return x * y;
    }
}

console.log(myNewMath.add(5, 4));

const human = {
    name: "Jim",
    gender: "m",
    hairColor: "black",
    attack() {
        console.log(`${this.name} punches!`);
    }
}
human.attack();

//arr method .forEach

const fruit = ['kiwi', 'apple', 'pear', 'lemon'];

//this sucks....Old way, This is an annoymous function
fruit.forEach(function (el) {
    console.log(el);
});
console.log(`============`);

//this is better
for (let f of fruit) {
    console.log(f);
}

console.log(`============`);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const triples = numbers.map(function (num) {
    return num * 3
});
console.log(numbers);
console.log(triples);

const titles = ['red dead redemption', 'breaking bad', 'better call saul'];
const upperTitles = titles.map(function (i) {
    return i.toUpperCase();
});

console.log(upperTitles);

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{ first: 'Albus', last: 'Dumbledore' },
{ first: 'Harry', last: 'Potter' },
{ first: 'Hermione', last: 'Granger' },
{ first: 'Ron', last: 'Weasley' },
{ first: 'Rubeus', last: 'Hagrid' },
{ first: 'Minerva', last: 'McGonagall' },
{ first: 'Severus', last: 'Snape' }];

// Write your code here
const firstNames = fullNames.map(function (i) {
    return i.first;
});

console.log(firstNames);

//arrow functions make functions shorter
const squareArrow = (x) => {
    return x ** 2;
}

const randomNum = () => {
    return Math.floor(Math.random() * 100) + 1;
}

console.log(squareArrow(7));
console.log(randomNum());

//implicit returns. FANCY!

const newRandomNum = () => (Math.floor(Math.random() * 100) + 1);
console.log('Fancy');
console.log(newRandomNum());

const newAdd = (a, b) => a + b;
console.log(`Super FANCY`)
console.log(newAdd(5, 100));


const faveGames = [{
    title: 'Pikmin 4',
    score: 10,
    genre: 'RTS',
    hero: 'Olimar',
},
{
    title: 'Halo 3',
    score: 9,
    genre: 'FPS',
    hero: 'Master Chief',
},
{
    title: 'Ace Attonery',
    score: 8,
    genre: 'Visual Novel',
    hero: 'Phoenix Wright',
},
];

const starScores = faveGames.map(function (i) {
    return `${i.title}: ${i.score / 2} STARS`;
});
console.log(starScores);

const newStarScores = faveGames.map(i => `${i.title}: ${i.score / 2} STARS`);
console.log(`FANCY`)
console.log(newStarScores);

//Set Time out
setTimeout(() => {
    console.log('are you still there?')
}, 3000);

//Every 2 seconds interval generate a random number
/*
const id = setInterval(() => {
    console.log(Math.random());
}, 2000);
*/
//use clearInterval(id); to stop it.

//filter, creates new arr matching elements you want

const smallNums = numbers.filter(n => n < 5);
console.log(smallNums);

const amazingGames = faveGames.filter(f => f.score >= 9);
console.log(amazingGames);

//every returns true if all in an arr match condition
const examGrades = [75, 65, 68, 100, 99, 88, 77];
console.log("Did every student get a 65 at least?")
console.log(examGrades.every(score => score >= 65));
console.log("I lied, 70 is the passing grade...");
console.log(examGrades.every(score => score >= 70));

//some returns true if there's at least one entry that is true..Ambiguous
console.log("Did any student get a 100?");
console.log(examGrades.some(score => score === 100));
console.log("Did any student get a 0?");
console.log(examGrades.some(score => score === 0));















