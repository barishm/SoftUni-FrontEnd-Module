function solve(string) {
    const words = string.match(/[A-Z][a-z]+/g);
    

    console.log(words.join(', '));
}

function wordSplitter(string) {
    let result = string[0];
    let lower = string.toLowerCase();

    for (let index = 1; index < string.length; index++) {
        if (string[index] !== lower[index]) {
            result += ', ';
        }

        result += string[index];
    }

    console.log(result);
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
wordSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

