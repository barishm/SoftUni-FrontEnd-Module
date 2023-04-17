// TODO
function attachEvents() {
    let BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    let titleInput = document.getElementById('title');
    let loadBtn = document.getElementById('load-button');
    let addBtn = document.getElementById('add-button');
    let todoListContainer = document.getElementById('todo-list');

    addBtn.addEventListener('click',addTaskHandler);
    loadBtn.addEventListener('click',loadTasksHandler);


    function loadTasksHandler(event) {
    if(event) {
        event.preventDefault();
    }

    todoListContainer.innerHTML = '';

    fetch(BASE_URL)
    .then((data) => data.json())
    .then((tasksRes) => {
        let tasks = Object.values(tasksRes);
        for (const {_id,name} of tasks) {
            let li = document.createElement('li');
            let span = document.createElement('span');
            let removeBtn = document.createElement('button');
            let editBtn = document.createElement('button');
            editBtn.addEventListener('click',loadEditFormHandler);
            removeBtn.addEventListener('click',removeTaskHandler);

            li.id = _id;
            span.textContent = name;
            removeBtn.textContent = 'Remove';
            editBtn.textContent = 'Edit';
            li.append(span,removeBtn,editBtn);
            todoListContainer.appendChild(li);
            
        }

    })
    .catch((err) => {
        console.log(err);
    })
    }
    function loadEditFormHandler(event) {
    let liParent = event.currentTarget.parentNode;
    let [span,_removeBtn,editBtn] = Array.from(liParent.children);
    let editInput = document.createElement('input');
    editInput.value = span.textContent;
    liParent.prepend(editInput);
    let submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.addEventListener('click',submitTaskHandler);
    liParent.appendChild(submitBtn);
    span.remove();
    editBtn.remove();
    }
    function submitTaskHandler(event) {
    let liParent = event.currentTarget.parentNode;
    let id = event.currentTarget.parentNode.id;
    let [input] = Array.from(liParent.children);
    let httpHeaders = {
        method: 'PATCH',
        body: JSON.stringify({name: input.value})
    };

    fetch(`${BASE_URL}${id}`,httpHeaders)
    .then(() => loadTasksHandler())
    .catch((err) => {
        console.log(err);
    })

    }
    function addTaskHandler(event) {
        event.preventDefault();
        let name = titleInput.value;
        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({name})
        }
        fetch(BASE_URL, httpHeaders)
        .then(() => {
            loadTasksHandler();
            titleInput.value ='';
        })
        .catch((err) => {
            console.log(err);
        })
    }
    function removeTaskHandler(event) {
        let id = event.currentTarget.parentNode.id;
        let httpHeaders = {
            method: 'DELETE'
        }
        fetch(`${BASE_URL}${id}`,httpHeaders)
        .then(() => {
            loadTasksHandler();
        })
        .catch((err) => {
            console.log(err);
        })


    }



}

attachEvents();
