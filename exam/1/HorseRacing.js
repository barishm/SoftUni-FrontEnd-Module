function solve (input) {
    let arr = [];
    arr = input.shift().split('|');

    let commandsParser = {
        'Retake': retake,
        'Trouble': trouble,
        'Rage': rage,
        'Miracle':miracle,
    };

    for (const inputLine of input) {
        let commandTokens = inputLine.split(' ');
        let command = commandTokens[0];
        if(command === "Finish"){
            console.log(arr.join('->'));
            console.log(`The winner is: ${arr[arr.length-1]}`);
            break;
        }
        commandsParser[command](...commandTokens.slice(1));
        
    }

    function retake(horse1,horse2) {
        let horse2Index = arr.indexOf(horse2);
        let horse1Index = arr.indexOf(horse1);

        if(horse1Index >= 0 && horse1Index < arr.length-1 && horse2Index > 0 && horse2Index < arr.length){
            if(horse1Index < horse2Index){
                arr[horse2Index] = horse1;
                arr[horse1Index] = horse2;
                console.log(`${horse1} retakes ${horse2}.`);
            }
        }
        
    }

    function trouble(horse) {
        let horseIndex = arr.indexOf(horse);
        if(horseIndex > 0 && horseIndex < arr.length){
            let secHorse = arr[horseIndex-1];
            arr[horseIndex-1] = horse;
            arr[horseIndex] = secHorse;
            console.log(`Trouble for ${horse} - drops one position.`);
        }
        
    }

    function rage(horse) {
        index = arr.indexOf(horse);
        if(index >= 0){
            if(index === arr.length-1){
                arr.splice(index,1);
                arr.splice(index+1,0,horse);
                console.log(`${horse} rages 2 positions ahead.`);
            }else if(index < arr.length){
                arr.splice(index,1);
                arr.splice(index+2,0,horse);
                console.log(`${horse} rages 2 positions ahead.`);
            }
        }
        
    }

    function miracle() {
        let horse = arr[0];
        arr.splice(0,1);
        arr.push(horse);
        console.log(`What a miracle - ${horse} becomes first.`);
    }

}

solve((['Bella|Alexia|Sugar',
'Retake Alexia Sugar',
'Rage Bella',
'Trouble Bella',
'Finish']));