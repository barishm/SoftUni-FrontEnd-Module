function solve(number){
    let temp = 0;
    for(let index=1; index <= number/2; index++){
        if(number % index === 0)
        {
            temp += index;
        }
    }
   
    if(temp === number && temp !== 0){
            console.log("We have a perfect number!");
        } 
    else{
            console.log("It's not so perfect.");
    }   
}
solve(1236498);