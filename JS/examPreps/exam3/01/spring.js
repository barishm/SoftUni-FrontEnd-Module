function solve(input) {
    let n = Number(input.shift());
    let springBoard = {};
    let tasks ={};
    let commandsParser = {
        'Add New': addTask,
        'Remove Task': removeTask,
        'Change Status': changeStatus,
    };
    for (let index = 0; index < n; index++) {
        let [assignee,taskId,title,status,eP] = input.shift().split(':');
        tasks[taskId] = {title,status,eP};
        if(springBoard.hasOwnProperty(assignee)){
            springBoard[assignee][taskId] = {title,status,eP}; 
        }else {
            springBoard[assignee] = tasks;
        }
        

        tasks = {};
    }

    for (const inputLine of input) {
        let commandTokens = inputLine.split(':');
        let command = commandTokens[0];
        commandsParser[command](...commandTokens.slice(1));
        
    }
    
    for (const piece in piecesCollection) {
        const {key,composer} = piecesCollection[piece];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
    }

    function addTask(assignee,taskId,title,status,eP){
        if(springBoard.hasOwnProperty(assignee)){
            
            springBoard[assignee][taskId] = {title,status,eP}; 
            tasks = {};
        }else {
            
        }
    }

    function removeTask(assignee,index){
        if(springBoard.hasOwnProperty(assignee)){
            delete springBoard[assignee][index];
        }else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }

    }

    function changeStatus(piece,newKey){
        if(piecesCollection.hasOwnProperty(piece)){
            piecesCollection[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        }else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }

    }

}

solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]);