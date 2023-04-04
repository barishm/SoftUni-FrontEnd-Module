function solve(arr) {
    let words = arr[0].split(' ');
    let arr2 = [];
    for (let index = 0; index < words.length; index++) {
        arr2.push({word:words[index],count:0});
    }



    for (let index = 1; index < arr.length; index++) {
        for (let index2 = 0; index2 < words.length; index2++) {
            if(arr[index] === words[index2]){
                let curWord = arr[index];
                let word = arr2.find((m) => m.word === curWord);
                if(word){
                    word.count += 1;
                }
            }
        }
    }
    let sortedArr = arr2.sort((wordA, wordB) => {
        return wordB.count - wordA.count;
    })
    sortedArr.forEach(e => console.log(`${e.word} - ${e.count}`));
}

solve([
    'is the', 
    'first', 'sentence', 'Here', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);