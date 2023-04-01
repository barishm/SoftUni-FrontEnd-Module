function solve (number) {


  /*  let arr = new Array(number);
    for (let index = 0; index < number; index++) {
        arr[index] = [];
    }
    for (let index = 0; index < number; index++) {
        for (let index2 = 0; index2 < number; index2++) {
            arr[index][index2] = number;
        }
    }
    for (let index = 0; index < number; index++) {
        for (let index2 = 0; index2 < number; index2++) {
            console.log(arr[index][index2] + " ");
        }
    }
    */
   let result = "";
    for (let index = 0; index < number; index++) {
        result += number + " ";
    }
    for (let index = 0; index < number; index++) {
        console.log(result);
    }


}
solve(7);