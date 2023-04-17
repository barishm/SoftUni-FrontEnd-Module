window.addEventListener('load', solve);

function solve() {
    let backup = {
        firstName: null,
        lastName: null,
        age: null,
        title: null,
        genre: null,
        story: null,
      };
    let taskCount = 0;
    let inputDOMSelectors = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        label: document.getElementById('label'),
        points: document.getElementById('points'),
        assignee: document.getElementById('assignee'),
      };

    let otherDOMSelectors = {
        createBtn: document.getElementById('create-task-btn'),
        deleteBtn: document.getElementById('delete-task-btn'),
        main: document.getElementById('tasks-section'),
    };

    otherDOMSelectors.createBtn.addEventListener('click',createTaskHandler);


    function createTaskHandler() {
        let allFieldsHaveValue = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');

        if(!allFieldsHaveValue){
            console.log('empty field');
            return;
        }
        taskCount++;

        let {title,description,label,points,assignee} = inputDOMSelectors;

        let labelClass = '';
        if(label.value == 'Low Priority Bug') {
            labelClass = "low-priority";
        }else if(label.value == 'High Priority Bug'){
            labelClass = "high-priority";
        }else if(label.value == 'Feature'){
            labelClass = "feature";
        }
        let article = createElement('article',otherDOMSelectors.main,'',['task-card'],`task-${taskCount}`);
        let div1 = createElement('div',article,`${label.value}`,[`task-card-label`,`${labelClass}`]);
        let h3 = createElement('h3',article,`${title.value}`);
        let p = createElement('p',article,`${description.value}`,['task-card-description']);
        let div2 = createElement('div',article,`Estimated at ${points.value} pts`,['task-card-points']);
        let div3 = createElement('div',article,`Assigned to: ${assignee.value}`,['task-card-assignee']);
        let div4 = createElement('div',article,'',['task-card-actions']);
        let btnDelete = createElement('button',div4,'Delete');
        
        btnDelete.addEventListener('click',taskDeleteHandler);


        for (const key in inputDOMSelectors) {
            backup[key] = inputDOMSelectors[key].value;
        }

        function taskDeleteHandler(event) {
            for (const key in inputDOMSelectors) {
                inputDOMSelectors[key].value = backup[key];
            }
            otherDOMSelectors.createBtn.setAttribute('disabled',true);
            otherDOMSelectors.deleteBtn.removeAttribute('disabled');
            let input = document.getElementById("create-task-form").disabled = true;


            otherDOMSelectors.deleteBtn.addEventListener('click',deleteBtnHandler);
            function deleteBtnHandler() {
                otherDOMSelectors.main.innerHTML = '';
            }

        }



        Object.values(inputDOMSelectors).forEach((i) => {
            i.value = '';
          });
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