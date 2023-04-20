// TODO:
function attachEvents() {
    let BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    let inputDOMSelectors = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
    }

    let otherDOMSelectors = {
        todoSec: document.querySelector('#todo-section .task-list'),
        inProgSec: document.querySelector('#in-progress-section .task-list'),
        codeRevSec: document.querySelector('#code-review-section .task-list'),
        doneSec: document.querySelector('#done-section .task-list'),
        loadBtn: document.getElementById('load-board-btn'),
        crtBtn: document.getElementById('create-task-btn'),
        form: document.querySelector('form'),
    }

    otherDOMSelectors.loadBtn.addEventListener('click',loadAllTasksHandler);
    otherDOMSelectors.crtBtn.addEventListener('click',createTaskHandler);

    let currentTask = [];
    let TaskToEdit = [];

    function loadAllTasksHandler(event) {
        if (event) {
            event.preventDefault();
        }

        otherDOMSelectors.todoSec.innerHTML = '';
        otherDOMSelectors.inProgSec.innerHTML = '';
        otherDOMSelectors.codeRevSec.innerHTML = '';
        otherDOMSelectors.doneSec.innerHTML = '';
        

        fetch(BASE_URL)
        .then((res) => res.json())
        .then((allTaskRes) => {
            let tasks = Object.values(allTaskRes);
            for (const {title , description, status, _id} of tasks) {
                if(status === 'ToDo'){
                    let li = createElement('li',otherDOMSelectors.todoSec,'',['task']);
                    li.id = _id;
                    createElement('h3',li,title);
                    createElement('p',li,description);
                    let moveBtn = createElement('button',li,'Move to In Progress');
                    moveBtn.addEventListener('click',moveTaskHandler,title,description,status);
                }else if(status === 'In Progress'){
                    let li = createElement('li',otherDOMSelectors.inProgSec,'',['task']);
                    li.id = _id;
                    createElement('h3',li,title);
                    createElement('p',li,description);
                    let moveBtn = createElement('button',li,'Move to Code Review');
                    moveBtn.addEventListener('click',moveTaskHandler);
                }else if(status === 'Code Review'){
                    let li = createElement('li',otherDOMSelectors.codeRevSec,'',['task']);
                    li.id = _id;
                    createElement('h3',li,title);
                    createElement('p',li,description);
                    let moveBtn = createElement('button',li,'Move to Done');
                    moveBtn.addEventListener('click',moveTaskHandler);
                }else if(status === 'Done'){
                    let li = createElement('li',otherDOMSelectors.doneSec,'',['task']);
                    li.id = _id;
                    createElement('h3',li,title);
                    createElement('p',li,description);
                    let moveBtn = createElement('button',li,'Close');
                    moveBtn.addEventListener('click',deleteTaskHandler);
                }
            }
        })
    }

    function createTaskHandler(event){
        event.preventDefault();
        let {title, description} = inputDOMSelectors;
        let payload = JSON.stringify({
            title: title.value,
            description: description.value,
            status: 'ToDo',
        });
        let httpHeaders = {
            method: 'POST',
            body: payload
        };

        fetch(BASE_URL,httpHeaders)
        .then(( )=> {
            loadAllTasksHandler();
            otherDOMSelectors.form.reset();
        })
        .catch((err) => {
            console.error(err);
        })
    }

    function moveTaskHandler(event) {
        event.preventDefault();

        let _id = this.parentNode.id;
        let li = this.parentNode;
        let title = li.querySelector('h3');
        let description = li.querySelector('p');
        let status = this.textContent;
        if(status === 'Move to In Progress'){
            status = 'In Progress';
        }else if(status === 'Move to Code Review'){
            status = 'Code Review';
        }else if(status === 'Move to Done'){
            status = 'Done';
        }
        
        let payload = JSON.stringify({
            title: title.textContent,
            describe: description.textContent,
            status: status,
        });
        let httpHeaders = {
            method: 'PATCH',
            body: payload
        };
        fetch(`${BASE_URL}${_id}`,httpHeaders)
        .then(() => {
            loadAllTasksHandler();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    function deleteTaskHandler(event) {
        let _id = this.parentNode.id;
        let httpHeaders = {
            method: 'DELETE',
        };
        fetch(`${BASE_URL}${_id}`,httpHeaders)
        .then(( )=> {
            loadAllTasksHandler();
        })
        .catch((err) => {
            console.error(err);
        })
    }

    function createElement(type,parentNode, content,classes,id,attributes,useInnerHtml) { 
        let htmlElement = document.createElement(type);
      
        if(content && useInnerHtml) {
          htmlElement.innerHTML = content;
        }
        
        if(content && type !== 'input'){
          htmlElement.textContent = content;
        }
        
        if(content && type == 'input'){
          htmlElement.value = content;
        }
        
        if(id) {
          htmlElement.id = id;
        }
        
        if(classes) {
          htmlElement.classList.add(...classes);
        }
        
        if(attributes) {
          for (const key in attributes) {
            htmlElement.setAttribute(key,attributes[key]);
          }
        }
        
        if(parentNode) {
          parentNode.appendChild(htmlElement);
        }
        
        
        return htmlElement;
    }

}

attachEvents();