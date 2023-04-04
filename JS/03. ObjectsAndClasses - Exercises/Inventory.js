function solve (arr) {
    let heroes = [];
    for (const line of arr) {
        let commandTokes = line.split(' / ');
        let name = commandTokes[0];
        let level = Number(commandTokes[1]);
        let items = commandTokes[2].split(', ');
        heroes.push({name,level,items
        , print: function() {
            console.log(`Hero: ${this.name}`);
            console.log(`level => ${this.level}`);
            console.log(`items => ${this.items.join(', ')}`);
        }});
    }
    let sortedHeroes = heroes.sort((heroA, heroB) => {
        return heroA.level - heroB.level;
    })
    
    heroes.forEach(hero => hero.print());
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);