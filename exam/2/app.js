window.addEventListener("load", solve);

function solve() {
  let inputDOMSelectors = {
      title: document.getElementById('task-title'),
      category: document.getElementById('task-category'),
      content: document.getElementById('task-content'),
  }

  let otherDOMSelectors = {
      pubBtn: document.getElementById('publish-btn'),
      reviewList: document.getElementById('review-list'),
      pubList: document.getElementById('published-list'),
      form: document.querySelector('form'),
  }

  let saved = {
      title: null,
      category: null,
      content: null,
  };
  otherDOMSelectors.pubBtn.addEventListener('click',publishBtnHandler);

  function publishBtnHandler() {
      let allFieldsHaveValue = Object.values(inputDOMSelectors)
      .every((input) => input.value !== '');

      if(!allFieldsHaveValue){
          console.log('empty field');
          return;
      }

      let {title,category,content} = inputDOMSelectors;

      let li = createElement('li',otherDOMSelectors.reviewList,null,['rpost']);
      let article = createElement('article',li);
      createElement('h4',article,`${title.value}`);
      createElement('p',article,`Category: ${category.value}`);
      createElement('p',article,`Content: ${content.value}`);
      let editBtn = createElement('button',li,'Edit',['action-btn','edit']);
      let postBtn = createElement('button',li,'Post',['action-btn','post']);

      editBtn.addEventListener('click',editBtnHandler);
      postBtn.addEventListener('click',postBtnHandler);

      for (const key in inputDOMSelectors) {
          saved[key] = inputDOMSelectors[key].value;
      }
      otherDOMSelectors.form.reset();

      function editBtnHandler() {
          for (const key in inputDOMSelectors) {
              inputDOMSelectors[key].value = saved[key];
          }
          
          otherDOMSelectors.reviewList.innerHTML = '';
      }

      function postBtnHandler() {
          let postRef = this.parentNode;
          let postBtn = postRef.querySelector('.post');
          let editBtn = postRef.querySelector('.edit');
          otherDOMSelectors.pubList.appendChild(postRef);
          postBtn.remove();
          editBtn.remove();

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