function solve(arr) {
    let arr2 = [];
    arr.sort(function(a, b){return a - b});
    let left = 0;
    let right = arr.length - 1;
    for (let index = 0; index < arr.length; index++) {
        if(index % 2 === 0){
            arr2[index] = arr[left];
            left++;
        }else {
            arr2[index] = arr[right];
            right--;
        }
    }
    
    return arr2;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);