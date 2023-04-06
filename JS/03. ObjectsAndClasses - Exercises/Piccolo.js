function solve(arr) {
    let carNumbers = [];
    for (const line of arr) {
        let [command,carNum] = line.split(', ');

        if(command === 'IN' && !carNumbers.includes(carNum)){
            carNumbers.push(carNum);
        }else if(command === 'OUT' && carNumbers.includes(carNum)){
            let index = carNumbers.indexOf(carNum);
            carNumbers.splice(index,1);        
        } 
    }
    if(carNumbers.length === 0){
        console.log('Parking Lot is Empty');
    } else {
        let sortedNumbers = carNumbers.sort((carNumA,carNumB) => carNumA.localeCompare(carNumB));
        sortedNumbers.forEach((carNum) => {
            console.log(carNum)
        })
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);