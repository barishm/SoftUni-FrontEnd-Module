window.addEventListener('load', solve);

function solve() {
    let totalLikes = 0;

    let inputDOMSelectors = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
    };

    let otherDOMSelectors = {
        addBtn: document.getElementById('add-btn'),
        allHitsCont: document.querySelector('.all-hits-container'),
        savedCont: document.querySelector('.saved-container'),
        likedCont: document.querySelector('.likes > p'),
    };

    otherDOMSelectors.addBtn.addEventListener('click',addSongHandler);



    function addSongHandler(event) {
        event.preventDefault();

        let allInputsAreNonEmpty = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');
        if (!allInputsAreNonEmpty) {
            console.log("empty fields");
            return;
        }    
        let {genre,name,author,date} = inputDOMSelectors;
        let songContainer = createElement('div',otherDOMSelectors.allHitsCont,'',['hits-info']);

        createElement('img',songContainer,null,null,null,{src: './static/img/img.png'});
        createElement('h2',songContainer,`Genre : ${genre.value}`);
        createElement('h2',songContainer,`Name : ${name.value}`);
        createElement('h2',songContainer,`Author : ${author.value}`);
        createElement('h3',songContainer,`Date : ${date.value}`);
        let saveBtn = createElement('button',songContainer,'Save song',['save-btn']);
        let likeBtn = createElement('button',songContainer,'Like song',['like-btn']);
        let deleteBtn = createElement('button',songContainer,'Delete',['delete-btn']);

        likeBtn.addEventListener('click',likeSongHandler);
        deleteBtn.addEventListener('click',deleteSongHandler);
        saveBtn.addEventListener('click',saveSongHandler);
        clearAllInputs();
    }
    function likeSongHandler() {
      this.setAttribute('disabled',true);
      totalLikes++;
      otherDOMSelectors.likedCont.textContent = `Total Likes: ${totalLikes}`;
    }

    function deleteSongHandler() {
      this.parentNode.remove();
    }

    function saveSongHandler() {
      let songRef = this.parentNode;
      let saveBtn = songRef.querySelector('.save-btn');
      let likeBtn = songRef.querySelector('.like-btn');
      otherDOMSelectors.savedCont.appendChild(songRef);
      saveBtn.remove();
      likeBtn.remove();
    }


    function clearAllInputs() {
        Object.values(inputDOMSelectors).forEach((input) => {
            input.value = '';
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