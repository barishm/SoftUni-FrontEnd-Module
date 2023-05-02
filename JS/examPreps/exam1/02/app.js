window.addEventListener("load", solve);

// izpolzvay Array.from za transform ot collection kim querySelectorAll, children

function solve() {
  let storyState = {
    firstName: null,
    lastName: null,
    age: null,
    title: null,
    genre: null,
    story: null,
  };
  
  let inputDOMSelectors = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    title: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story'),
  };

  let otherDOMSelectors = {
    publishBtn: document.getElementById('form-btn'),
    previewList: document.getElementById('preview-list'),
    mainContainer: document.getElementById('main'),
  };

  otherDOMSelectors.publishBtn.addEventListener('click',publishStoryHandler);

  function publishStoryHandler() {
    let allFieldsHaveValue = Object.values(inputDOMSelectors)
    .every((input) => input.value !== '');

    if(!allFieldsHaveValue){
      console.log('empty field');
      return;
    }
    let {firstName,lastName,age,title,genre,story} = inputDOMSelectors;
    let li = createElement('li',otherDOMSelectors.previewList,null,['story-info']);
    let article = createElement('article',li);
    createElement('h4',article,`Name: ${firstName.value} ${lastName.value}`);
    createElement('p',article,`Age: ${age.value}`);
    createElement('p',article,`Title: ${title.value}`);
    createElement('p',article,`Genre: ${genre.value}`);
    createElement('p',article,story.value);
    let saveBtn = createElement('button',li,'Save Story',['save-btn']);
    let editBtn = createElement('button',li,'Edit Story',['edit-btn']);
    let delBtn = createElement('button',li,'Delete Story',['delete-btn']);

    editBtn.addEventListener('click',editStoryHandler);
    delBtn.addEventListener('click',deleteStoryHandler);
    saveBtn.addEventListener('click',saveStoryHandler);

    for (const key in inputDOMSelectors) {
      storyState[key] = inputDOMSelectors[key].value;
    }
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = '';
    }

    function editStoryHandler(){
      for (const key in inputDOMSelectors) {
        inputDOMSelectors[key].value = storyState[key];
      }
      otherDOMSelectors.publishBtn.removeAttribute('disabled');
      otherDOMSelectors.previewList.innerHTML = '';
      createElement('h3',otherDOMSelectors.previewList,'Preview');
    }

    function deleteStoryHandler(event) {
      let liItem = event.currentTarget.parentNode;
      liItem.remove();
      otherDOMSelectors.publishBtn.removeAttribute('disabled');
    }

    function saveStoryHandler() {
      otherDOMSelectors.mainContainer.innerHTML = '';
      createElement('h1',otherDOMSelectors.mainContainer,'Your scary story is saved!');
    }

    Object.values(inputDOMSelectors).forEach((i) => {
      i.value = '';
    });
    otherDOMSelectors.publishBtn.setAttribute('disabled',true);



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




