function solve (string) {
    let text = string.toLowerCase();
    let arr = text.split(' ');
    let array = [];
    let result = "";
    for (let index = 0; index < arr.length; index++) {
        let curSen = arr[index];
        let sen = array.find((s) => s.sen === curSen);
        if(!sen){
            array.push({sen:arr[index],count:1})
        }else{
            sen.count += 1;
        }
        
    }
    for (let index = 0; index < array.length; index++) {
        if(array[index].count % 2 === 1){
            result += array[index].sen + " ";
        }
    }
    console.log(result);
}

solve('Cake IS SWEET is Soft CAKE sweet Food');