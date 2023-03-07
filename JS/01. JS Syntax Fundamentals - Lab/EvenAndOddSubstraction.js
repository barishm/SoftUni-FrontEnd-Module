function solve(arr) {
    let evenSum=0;
    let oddSum=0;
    for(let i=0;i<arr.length;i++){
        arr[i]=Number(arr[i]);
        if(arr[i] % 2 == 0){
            evenSum += arr[i];
        }else{
            oddSum += arr[i];
        }
    }
    console.log(evenSum - oddSum);

}

solve([2,4,6,8,10]);