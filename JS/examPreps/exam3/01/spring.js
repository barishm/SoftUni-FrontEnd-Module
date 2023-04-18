function solve(input) {
    let n = Number(input.shift());
    let springBoard = [];
    let tasks = [];
    let task = {};
    let todoSum = 0;
    let inProgressSum = 0;
    let codeReviewSum = 0;
    let donePointsSum = 0;
    let commandsParser = {
        'Add New': addTask,
        'Remove Task': removeTask,
        'Change Status': changeStatus,
    };
    for (let index = 0; index < n; index++) {
        let [assignee,taskId,title,status,eP] = input.shift().split(':');
        if(springBoard.hasOwnProperty(assignee)) {
            task = {taskId,title,status,eP};
            springBoard[assignee].push(task);
        }else {
            task = {taskId,title,status,eP};
            tasks.push(task);
            springBoard[assignee] = tasks;
        }
        assignee = {};
        task = {};
        tasks = [];
    }

    for (const inputLine of input) {
        let commandTokens = inputLine.split(':');
        let command = commandTokens[0];
        commandsParser[command](...commandTokens.slice(1));
        
    }
    
    for (const assignee in springBoard) {
        for (let index = 0; index < springBoard[assignee].length; index++) {
            if(springBoard[assignee][index].status === "ToDo"){
                todoSum += Number(springBoard[assignee][index].eP);
            }
            if(springBoard[assignee][index].status === "In Progress"){
                inProgressSum += Number(springBoard[assignee][index].eP);
            }
            if(springBoard[assignee][index].status === "Code Review"){
                codeReviewSum += Number(springBoard[assignee][index].eP);
            }
            if(springBoard[assignee][index].status === "Done"){
                donePointsSum += Number(springBoard[assignee][index].eP);
            }
        }
    }
    console.log(`ToDo: ${todoSum}pts`);
    console.log(`In Progress: ${inProgressSum}pts`);
    console.log(`Code Review: ${codeReviewSum}pts`);
    console.log(`Done Points: ${donePointsSum}pts`);
    if(donePointsSum >= todoSum + codeReviewSum + inProgressSum){
        console.log("Sprint was successful!");
    }else {
        console.log("Sprint was unsuccessful...");
    }


    function addTask(assignee,taskId,title,status,eP){
        if(springBoard.hasOwnProperty(assignee)){
            task = {taskId,title,status,eP};
            springBoard[assignee].push(task);
        }else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function removeTask(assignee,index){
        if(springBoard.hasOwnProperty(assignee)){
            if(index < 0 || index >= springBoard[assignee].length){
                console.log(`Index is out of range!`);
            }else {
                springBoard[assignee].splice(index,1);
                
            }
        }else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }

    }

    function changeStatus(assignee,taskId,newStatus){
        if(springBoard.hasOwnProperty(assignee)){
            let length = springBoard[assignee].length;
            for (let index = 0; index < length; index++) {
                if(springBoard[assignee][index].taskId === taskId){
                    springBoard[assignee][index].status = newStatus
                }
                else {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                }
                
            }
        }else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
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
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:0',
    'Remove Task:Joro:1',
]);