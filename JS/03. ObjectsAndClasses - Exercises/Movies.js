 function solve(arr) {
    let movies = [];

    for (const line of arr) {
        let commandTokes = line.split(' ');
        if(line.includes('addMovie')){
            let movieName = commandTokes.slice(1).join(' ');
            addMovie(movieName);
        }else if(line.includes('directedBy')){
            let indexOfCommand = commandTokes.indexOf('directedBy');
            let movieName = commandTokes.slice(0,indexOfCommand).join(' ');
            let directorName = commandTokes.slice(indexOfCommand + 1).join(' ');
            addDirector(movieName,directorName);
        }else if(line.includes('onDate')){
            let indexOfCommand = commandTokes.indexOf('onDate');
            let movieName = commandTokes.slice(0,indexOfCommand).join(' ');
            let date = commandTokes.slice(indexOfCommand + 1).join(' ');
            addDate(movieName,date);
        }
    }
    for (const movie of movies) {
        if(movie.hasOwnProperty('name') && movie.hasOwnProperty('date'),movie.hasOwnProperty('director')){
            console.log(JSON.stringify(movie));
        }
    }
    console.log();


    function addMovie(name) {
        movies.push({name});
    }

    function addDirector(name,director) {
        let movie = movies.find((m) => m.name === name);
        if(movie) {
            movie.director = director;
        }
    }

    function addDate(name,date) {
        let movie = movies.find((m) => m.name === name);
        if(movie) {

            movie.date = date;
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);