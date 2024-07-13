
let input = prompt("What would you like to do?");
const todos = ['Collect eggs', 'go to costco' ];

while(input !== 'quit' && input !== 'q'){
    if(input === 'list'){
        console.log('************')
        for(let i = 0;  i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('************')
    } else if(input === 'new') {
        const newTodo = prompt('ok, Input new Todo!');
        todos.push(newTodo); 
        console.log(`${newTodo} added to the list`)
    }else if (input === 'delete'){
       const index = parseInt(prompt("What are trying to delete?, enter index:"));
       if (!Number.isNaN(index)) {
          const deleted = todos.splice(index, 1);
          console.log(`ok, deleted ${deleted[0]}`);
       } else {
         console.log('Unkown Index')
       }
      
       
    }
    input = prompt("What would you like to do?")
}
console.log("OK you quit the app!")