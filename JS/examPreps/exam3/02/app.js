window.addEventListener('load', solve);

function solve() {
  let SprintPoints = document.getElementById('total-sprint-points');
  let sumPoints = 0;
    let backup = {
        title: null,
        description: null,
        points: null,
        assignee: null,
      };
    let taskCount = 0;
    let inputDOMSelectors = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        points: document.getElementById('points'),
        assignee: document.getElementById('assignee'),
        label: document.getElementById('label'),
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

        let {title,description,points,assignee,label} = inputDOMSelectors;
        let taskLabel = label.value;
        let labelClass = '';
        let icon = '';
        if(label.value == 'Low Priority Bug') {
            labelClass = "low-priority";
            icon = '&#9737;';
        }else if(label.value == 'High Priority Bug'){
            labelClass = "high-priority";
            icon = '&#9888;';
        }else if(label.value == 'Feature'){
            labelClass = "feature";
            icon = '&#8865;';
        }
        let article = createElement('article',otherDOMSelectors.main,'',['task-card'],`task-${taskCount}`);
        let div1 = createElement('div',article,`${label.value} ${icon}`,[`task-card-label`,`${labelClass}`]);
        div1.innerHTML = `${label.value} ${icon}`;
        createElement('h3',article,`${title.value}`,[`task-card-title`]);
        createElement('p',article,`${description.value}`,['task-card-description']);
        let div2 = createElement('div',article,`Estimated at ${points.value} pts`,['task-card-points']);
        createElement('div',article,`Assigned to: ${assignee.value}`,['task-card-assignee']);
        let div4 = createElement('div',article,'',['task-card-actions']);
        let btnDelete = createElement('button',div4,'Delete');
        sumPoints += Number(points.value);
        
        btnDelete.addEventListener('click',taskDeleteHandler);


        for (const key in inputDOMSelectors) {
            backup[key] = inputDOMSelectors[key].value;
        }

        function taskDeleteHandler() {
            for (const key in inputDOMSelectors) {
                inputDOMSelectors[key].value = backup[key];
            }
            label.value = taskLabel;
            otherDOMSelectors.createBtn.disabled = true;
            otherDOMSelectors.deleteBtn.removeAttribute('disabled');
            
            for (const input in inputDOMSelectors) {
              inputDOMSelectors[input].disabled = true;
            }
            let element = this.parentNode.parentNode.id;
            let taskid = document.querySelector('#create-task-form > input');
            taskid.id = element;
            otherDOMSelectors.deleteBtn.addEventListener('click',deleteBtnHandler, { once: true });

            function deleteBtnHandler() {

              for (const input in inputDOMSelectors) {
                inputDOMSelectors[input].disabled = false;
              }
    
              let taskid = document.querySelector('#create-task-form > input');
              
              let points = document.querySelector(`#tasks-section #${taskid.id} .task-card-points`);
              let text = points.innerHTML;
              let match = text.match(/\d+/);
              //let num = parseInt(match[0]);
              sumPoints -= Number(match);
              otherDOMSelectors.createBtn.disabled = false;
              otherDOMSelectors.deleteBtn.setAttribute('disabled',true);
              article.remove();
              for (const i of Object.values(inputDOMSelectors)) {
                i.value = '';
              }
              SprintPoints.textContent = `Total Points ${sumPoints}pts`;
          }

        }
        

        SprintPoints.textContent = `Total Points ${sumPoints}pts`;
        for (const i of Object.values(inputDOMSelectors)) {
          i.value = '';
        }
        

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