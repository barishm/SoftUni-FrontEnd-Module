function solve() {
    let busContainer = document.querySelector('#info > span');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let nextStopId = 'depot';
    let stopName = null;
    function depart() {
        arriveBtn.disabled = false;
        departBtn.disabled = true;
        fetch(`${BASE_URL}${nextStopId}`)
        .then((res) => res.json())
        .then((nextStopInfo) => {
            let {name,next} = nextStopInfo;
            busContainer.textContent = `Next stop ${name}`;
            nextStopId = next;
            stopName = name;
        })
        .catch((err) => {
            busContainer.textContent = 'Error';
            arriveBtn.disabled = true;
            departBtn.disabled = true;
        })
        // TODO: 
    }

    async function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;
        busContainer.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();