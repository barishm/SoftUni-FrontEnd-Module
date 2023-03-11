function solve(arr,num) {
    let arr2 = [];
    let index2 = 0;
    for (let index = 0; index < arr.length; index += num) {
        if(index <= arr.length){
            arr2[index2] = arr[index];
        }
        index2++;
    }
    return arr2;
}
solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2);