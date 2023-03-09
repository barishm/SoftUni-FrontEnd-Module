function solve(arr,num) {
    let arr2 = [];
    let index2 = 0;
    for (let index = 0; index < arr.length; index += num) {
        if(index <= arr.length){
            arr2[index2] = arr[index];
        }
        console.log(arr2[index2]);
        index2++;
    }
}
solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2);