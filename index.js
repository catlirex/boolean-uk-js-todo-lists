

//Challenge 1 : After you select a user, add the option to either show the todos or add a new todo to the list
let yourId = null
let yourPosition = null

for(let action = 0; action != 5;){

    if (action === 0) chooseUser();

    action = parseInt(prompt(`
    Welcome ${users[yourPosition].name}!
    Choose action (Enter the number):
    0: Switch user
    1: Show uncompleted to-do-list
    2: Add new todo
    3: Delete todo item
    4: Update todo item
    5: Exit`))

    if(action === 1) viewTodo();
    else if(action === 2) addTodo();
    else if(action === 3) delTodo();
    else if(action === 4) updateTodo();
    else if (action > 5) alert("Input incorrect, please re-enter.")
}


//   - Create an alert that lists all users, with their ids, names and what city they're from

function chooseUser(){
    let output = []
    for (let i = 0; i < users.length; i++){
        output.push(`
        User ${users[i].id} /  ${users[i].name} / from: ${users[i].address.city}`)
    }

    alert(output.join("\n"))

// - Prompt the user for a user id

    yourId = parseInt(prompt("Please enter your user ID"))

    for (let i = 0; i < users.length; i++){
        if (users[i].id === yourId) yourPosition = i;
    }

    if (yourPosition === null){
        alert("ID incorrect, please re-enter.");
        chooseUser();
    }
    
}

// Add new todo

function addTodo(){
    newTitle = prompt("What is the task?")

    todos.push( {
        userId : yourId,
        id: todos.length + 1,
        title: newTitle,
        completed: false
    })
}

// - Display an alert with the username and all the todos titles that belong to that user 

function viewTodo(){
    const yourList = []
   

    for (let i = 0; i < todos.length; i++){

        if(todos[i].userId === yourId && todos[i].completed === false) 
        yourList.push(todos[i].id + " : " + todos[i].title);
    }

    alert(`
To-do-list for ${users[yourPosition].name}:
(Remember the item no. if you wish to update / delete)

${yourList.join("\n")}`)

}

function delTodo(){
    // delete or update a todo
    viewTodo();
    const delId = parseInt(prompt("Which item you wish to del?"));
    let delPosition = null

    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === delId ) delPosition = i;
    }

    if(todos[delPosition].userId === yourId){
    todos.splice(delPosition , 1);
    viewTodo();
    }
    else{
        alert('Wrong item ID, please re-enter');
        delTodo();
    }

}

function updateTodo(){
    // delete or update a todo
    viewTodo();
    const updateId = parseInt(prompt("Which item you wish to update?"));
    let updatePosition = null

    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === updateId ) updatePosition = i;
    }

    if(todos[updatePosition].userID === yourId){
         
        const updateAction = parseInt(prompt(`What update you want to have?
        1: Mark as completed 
        2: Update Task content
        `))

        if(updateAction === 1){
            todos[updatePosition].completed = true
            viewTodo()
        }
        if(updateAction === 2){
            todos[updatePosition].title = prompt("Please input your task here.")
            viewTodo()
        }

    }
    else{
        alert('Wrong item ID, please re-enter');
        delTodo();
    }

}