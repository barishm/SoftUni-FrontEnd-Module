function getInfo() {
    let stopIdInput = document.getElementById('stopId');
    let stopNameContainer = document.getElementById('stopName');
    let busesContainer = document.getElementById('buses');
    let BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    let stopId = stopIdInput.value;
    busesContainer.innerHTML = '';
    fetch(`${BASE_URL}${stopId}`)
    .then((res) => res.json())
    .then((busInfo) => {
        let {name,buses} = busInfo;
        stopNameContainer.textContent = name;
        for (const busId in buses) {
            let li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${buses[busId]} minutes`;
            busesContainer.appendChild(li);
            
        }
    })
    .catch((err) => {
        stopNameContainer.textContent = 'Error';
    })
}