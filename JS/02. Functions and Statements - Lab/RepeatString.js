function solve (string,count) {
    let text = "";
    for (let index = 0; index < count; index++) {
        text += string;
    }
    console.log(text);
}

solve("String", 2);