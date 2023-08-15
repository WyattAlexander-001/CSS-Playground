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
