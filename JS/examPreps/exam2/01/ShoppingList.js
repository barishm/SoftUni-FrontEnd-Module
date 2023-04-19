function solve (input) {
    let arr = [];
    arr = input.shift().split('!');

    let commandsParser = {
        'Urgent': addItem,
        'Unnecessary': removeItem,
        'Correct': correctItem,
        'Rearrange':rearrange,
    };

    for (const inputLine of input) {
        let commandTokens = inputLine.split(' ');
        let command = commandTokens[0];
        let secCmd = commandTokens[1];
        if(command === "Go" && secCmd === "Shopping!"){
            console.log(arr.join(', '));
            break;
        }
        commandsParser[command](...commandTokens.slice(1));
        
    }

    function removeItem(item) {
        if(arr.includes(item)){
            let i = arr.indexOf(item);
            arr.splice(i,1);
        }
    }

    function addItem(item) {
        if(!arr.includes(item)){
            arr.unshift(item);
        }
    }

    function correctItem(item,newItem) {
        if(arr.includes(item) && !arr.includes(newItem)){
            arr[arr.indexOf(item)] = newItem;
        }
    }

    function rearrange(item) {
        if(arr.includes(item)){
            let i = arr.indexOf(item);
            arr.splice(i,1);
            arr.push(item);
        }
    }

}

solve((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Milk Banana",
"Go Shopping!"]));
