function solve (word,string) {
    const text = string.split(' ');
    let found = 0;
    for (let index = 0; index < text.length; index++) {
        const textt = text[index].toLowerCase();
        if(textt === word){
            console.log(word);
            found = 1;
            break;
        }
        
    }
    if(Boolean(!found)){
        console.log(`${word} not found!`)
    }
}
solve('python',
'JavaScript is the best programming language');