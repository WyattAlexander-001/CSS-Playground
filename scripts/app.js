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

const password = "hofsdgfsog oidpfg";
if (password.length >= 8 && password.indexOf(" ") === -1) {
    console.log("Long Enough Password and No spaces!")
} else {
    console.log("Password not LONG enough")
}

const mystery = 'P7abcdef';
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}

