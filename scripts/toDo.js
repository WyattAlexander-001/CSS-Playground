console.log("Connected");
let input = prompt("Welcome To The Todo List....Pick an option.");
const todos = ['Drink Water', "Study"];

while (input != 'q' && input != 'quit') {
    if (input === 'list') {
        console.log('==========================');
        for (let i = 0; i < todos.length; i++) {
            console.log(` #${i + 1} --- ${todos[i]}`);
        }
        console.log('==========================');
    } else if (input === 'new') {
        const newTodo = prompt('Ok, new todo?');
        todos.push(newTodo);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter an index to delete'));
        todos.splice(index, 1);
    }
    input = prompt('Ok...Pick an option');
}
console.log('You quit');