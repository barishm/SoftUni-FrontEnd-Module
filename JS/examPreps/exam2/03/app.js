function attachEvents() {

    let BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
    let inputDOMSelectors = {
        product: document.getElementById('product'),
        count: document.getElementById('count'),
        price: document.getElementById('price'),
    }
    let otherDOMSelectors = {
        addBtn: document.getElementById('add-product'),
        updateBtn: document.getElementById('update-product'),
        loadBtn: document.getElementById('load-product'),
        courseCont: document.getElementById('tbody'),
        form: document.querySelector('.list'),
    }

    let currentProducts = [];
    let productToEdit = {};

    otherDOMSelectors.loadBtn.addEventListener('click',loadAllProductsHandler);
    otherDOMSelectors.updateBtn.addEventListener('click',updateProductHandler);
    otherDOMSelectors.addBtn.addEventListener('click',addProductHandler);
    function loadAllProductsHandler(event) {
        if (event) {
            event.preventDefault();
        }
        otherDOMSelectors.prodCont.innerHTML = '';

        fetch(BASE_URL)
        .then((res) => res.json())
        .then((allProductRes) => {
            currentProducts = Object.values(allProductRes);
            for (const {product , count, price, _id} of currentProducts) {
                let tableRow = createElement('tr',otherDOMSelectors.prodCont);
                tableRow.id = _id;
                createElement('td',tableRow,product,['name']);
                createElement('td',tableRow,count,['count']);
                createElement('td',tableRow,price,['product-price']);
                let btnTd = createElement('td',tableRow,null,['btn']);
                let updBtn = createElement('button',btnTd,'Update',['update']);
                let delBtn = createElement('button',btnTd,'Delete',['delete']);
                updBtn.addEventListener('click',loadUpdateHandler);
                delBtn.addEventListener('click',deleteProductHandler);
            }
        })
    }

    function loadUpdateHandler() {
        let id = this.parentNode.parentNode.id;
        productToEdit = currentProducts.find((p) => p._id === id);
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = productToEdit[key];
        }
        otherDOMSelectors.addBtn.setAttribute('disabled',true);
        otherDOMSelectors.updateBtn.removeAttribute('disabled'); 

    }

    function updateProductHandler(event) {
        event.preventDefault();
        let {product, count, price} = inputDOMSelectors;
        let payload = JSON.stringify({
            product: product.value,
            count: count.value,
            price: price.value
        });
        let httpHeaders = {
            method: 'PATCH',
            body: payload
        };
        fetch(`${BASE_URL}${productToEdit._id}`,httpHeaders)
        .then(() => {
            loadAllProductsHandler();
            otherDOMSelectors.addBtn.removeAttribute('disabled');
            otherDOMSelectors.updateBtn.setAttribute('disabled',true);
            otherDOMSelectors.form.reset();
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    function deleteProductHandler() {
        let id = this.parentNode.parentNode.id;
        let httpHeaders = {
            method: 'DELETE',
        };
        fetch(`${BASE_URL}${id}`,httpHeaders)
        .then(( )=> {
            loadAllProductsHandler();
        })
        .catch((err) => {
            console.error(err);
        })
    }

    function addProductHandler(event) {
        event.preventDefault();
        let {product, count, price} = inputDOMSelectors;
        let payload = JSON.stringify({
            product: product.value,
            count: count.value,
            price: price.value
        });
        let httpHeaders = {
            method: 'POST',
            body: payload
        };

        fetch(BASE_URL,httpHeaders)
        .then(( )=> {
            loadAllProductsHandler();
            otherDOMSelectors.form.reset();
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