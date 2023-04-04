function solve(arr) {
    let persons = new Array(arr.length);

    let person = {};
    for (let index = 0; index < arr.length; index++) {
        person.name = arr[index];
        person.number = arr[index].length;
        persons.push(person);
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`)
    }

}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);