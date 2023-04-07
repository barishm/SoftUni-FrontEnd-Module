function attachEvents() {
    let phoneBookContainer = document.getElementById('phonebook');
    let loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click',loadPhoneBookHandler);
    let BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';

    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');
    let createBtn = document.getElementById('btnCreate');

    createBtn.addEventListener('click',createHandler);

    function createHandler() {
        let person = personInput.value;
        let phone = phoneInput.value;
        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({person,phone})
        }
        fetch(BASE_URL,httpHeaders)
        .then((res) => res.json())
        .then(loadPhoneBookHandler)
        .then(() => {
            personInput.value = '';
            phoneInput.value = '';
        })
        .catch((err) => {
            console.log(err);
        })
    }



    async function loadPhoneBookHandler() {
        try {
            let phoneBookRes = await fetch(BASE_URL);
            let phoneBookData = await phoneBookRes.json();
            phoneBookData = Object.values(phoneBookData);
            phoneBookContainer.innerHTML = '';
            for (const {phone,person,_id} of phoneBookData) {
                let li = document.createElement('li');
                let button = document.createElement('button');
                button.textContent = 'Delete';
                button.id = _id;
                button.addEventListener('click',deletePhoneBookHandler);
                li.innerHTML = `${person}: ${phone}`;
                li.appendChild(button);
                phoneBookContainer.appendChild(li);
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function deletePhoneBookHandler() {
        let id = this.id;
        let httpHeaders = {
            method: 'DELETE'
        };
        fetch(`${BASE_URL}${id}`,httpHeaders)
        .then((res) => res.json())
        .then(loadPhoneBookHandler)
        .catch((err) => {
            console.log(err);
        })
    }
    // TODO:
}

attachEvents();