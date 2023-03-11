function solve(arr) {
    let arr2 = [];
    arr.sort(function(a, b){return a - b});
    let firstArrIndex = 0;
    for (let index = 0; index < arr.length; index += 2) {
        arr2[index] = arr[firstArrIndex];
        arr2[index + 1] = arr[arr.length - firstArrIndex - 1];
        firstArrIndex++;
    }
    return arr;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);