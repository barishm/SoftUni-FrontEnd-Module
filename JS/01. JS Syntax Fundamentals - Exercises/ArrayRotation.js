function solve(arr,num) {
    let arr2 = [];
    let index1;
    while(arr.length <= num){
        num -= arr.length;
    }
    for (let index = 0; index < arr.length; index++) {
        if(index - num < 0){
            arr2[index - num + arr.length] = arr[index];
        }else{
            arr2[index - num] = arr[index];
        }
    }
    console.log(arr2.join(' '));
}
solve([51, 47, 32, 61, 21], 2);