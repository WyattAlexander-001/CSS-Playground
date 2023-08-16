console.log("Connected");
let input = prompt("Welcome To The Todo List");
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
    }
    input = prompt('What would you like to add?');
}
console.log('You quit');