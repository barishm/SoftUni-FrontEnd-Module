window.addEventListener("load",attachEvents);

function attachEvents() {
    let BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    let inputDOMSelectors = {
        title: document.getElementById('course-name'),
        type: document.getElementById('course-type'),
        description: document.getElementById('description'),
        teacher: document.getElementById('teacher-name'),
    }

    let otherDOMSelectors = {
        addBtn: document.getElementById('add-course'),
        editBtn: document.getElementById('edit-course'),
        loadBtn: document.getElementById('load-course'),
        courseCont: document.getElementById('list'),
        form: document.querySelector('form'),
    }

    let currentCourses = [];
    let courseToEdit = {};

    otherDOMSelectors.loadBtn.addEventListener('click',loadCourseHandler);
    otherDOMSelectors.addBtn.addEventListener('click',addCourseHandler);
    otherDOMSelectors.editBtn.addEventListener('click',editCourseHandler);

    function loadCourseHandler(event) {
        if (event) {
            event.preventDefault();
        }
        otherDOMSelectors.courseCont.innerHTML = '';

        fetch(BASE_URL)
        .then((res) => res.json())
        .then((allCoursesRes) => {
            currentCourses = Object.values(allCoursesRes);
            for (const {title , type, description,teacher, _id} of currentCourses) {
                let div = createElement('div',otherDOMSelectors.courseCont,null,['container']);
                div.id = _id;
                createElement('h2',div,title);
                createElement('h3',div,teacher);
                createElement('h3',div,type);
                createElement('h4',div,description);
                let edtBtn = createElement('button',div,'Edit Course',['edit-btn']);
                let finishBtn = createElement('button',div,'Finish Course',['finish-btn']);
                edtBtn.addEventListener('click',loadEditHandler);
                finishBtn.addEventListener('click',finishCourseHandler);
            }
        })
    }

    function loadEditHandler(event) {
        event.preventDefault();
        let id = this.parentNode.id;
        courseToEdit = currentCourses.find((p) => p._id === id);
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = courseToEdit[key];
        }
        otherDOMSelectors.addBtn.setAttribute('disabled',true);
        otherDOMSelectors.editBtn.removeAttribute('disabled');
    }
    function editCourseHandler(event){
        event.preventDefault();
        let id = this.parentNode.id;
        let {title, type, description,teacher} = inputDOMSelectors;
        let payload = JSON.stringify({
            title: title.value,
            type: type.value,
            description: description.value,
            teacher: teacher.value,
            _id: id,
        });
        let httpHeaders = {
            method: 'PUT',
            body: payload
        };
        fetch(`${BASE_URL}${courseToEdit._id}`,httpHeaders)
        .then(() => {
            loadCourseHandler();
            otherDOMSelectors.addBtn.removeAttribute('disabled');
            otherDOMSelectors.editBtn.setAttribute('disabled',true);
            otherDOMSelectors.form.reset();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    
    

    function addCourseHandler(event){
        event.preventDefault();
        let {title, type, description,teacher} = inputDOMSelectors;
        let payload = JSON.stringify({
            title: title.value,
            type: type.value,
            description: description.value,
            teacher: teacher.value,
        });
        let httpHeaders = {
            method: 'POST',
            body: payload
        };

        fetch(BASE_URL,httpHeaders)
        .then(( )=> {
            loadCourseHandler();
            otherDOMSelectors.form.reset();
        })
        .catch((err) => {
            console.error(err);
        })
    }

    function finishCourseHandler(event) {
        event.preventDefault();
        let id = this.parentNode.id;
        let httpHeaders = {
            method: 'DELETE',
        };
        fetch(`${BASE_URL}${id}`,httpHeaders)
        .then(( )=> {
            loadCourseHandler();
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