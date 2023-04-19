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
        if(label.value == 'Low Priority Bug') {
            labelClass = "low-priority";
        }else if(label.value == 'High Priority Bug'){
            labelClass = "high-priority";
        }else if(label.value == 'Feature'){
            labelClass = "feature";
        }
        let article = createElement('article',otherDOMSelectors.main,'',['task-card'],`task-${taskCount}`);
        let div1 = createElement('div',article,`${label.value}`,[`task-card-label`,`${labelClass}`]);
        let h3 = createElement('h3',article,`${title.value}`,[`task-card-title`]);
        let p = createElement('p',article,`${description.value}`,['task-card-description']);
        let div2 = createElement('div',article,`Estimated at ${points.value} pts`,['task-card-points']);
        let div3 = createElement('div',article,`Assigned to: ${assignee.value}`,['task-card-assignee']);
        let div4 = createElement('div',article,'',['task-card-actions']);
        let btnDelete = createElement('button',div4,'Delete');
        sumPoints += Number(points.value);
        
        btnDelete.addEventListener('click',taskDeleteHandler);


        for (const key in inputDOMSelectors) {
            backup[key] = inputDOMSelectors[key].value;
        }

        function taskDeleteHandler(event) {
            for (const key in inputDOMSelectors) {
                inputDOMSelectors[key].value = backup[key];
            }
            label.value = taskLabel;
            otherDOMSelectors.createBtn.disabled = true;
            otherDOMSelectors.deleteBtn.removeAttribute('disabled');
            
            for (const input in inputDOMSelectors) {
              inputDOMSelectors[input].disabled = true;
            }


            otherDOMSelectors.deleteBtn.addEventListener('click',deleteBtnHandler);
            function deleteBtnHandler(event) {

                for (const input in inputDOMSelectors) {
                  inputDOMSelectors[input].disabled = false;
                }

                let match = div2.innerHTML.match(/\d+/);
                let num = parseInt(match[0]);
                sumPoints -= num;
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