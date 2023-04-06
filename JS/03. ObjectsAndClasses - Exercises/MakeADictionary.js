function solve(json) {
    let objArr = [];
    let obj = {};
    for (let index = 0; index < json.length; index++) {
        obj = JSON.parse(json[index]);
        objArr.push(obj);
    }
    for (let index = 0; index < objArr.length; index++) {
        let entries = Object.entries(objArr[index]);
        for(let [key,value] of entries){
        console.log(`${key} -> ${value}`)
        }  
    }
    
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);