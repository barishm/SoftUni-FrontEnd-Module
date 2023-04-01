function solve(pass) {
    let invalidPass = 0;
    if(pass.length > 10 || pass.length < 6) {
        invalidPass = 1;
        console.log("Password must be between 6 and 10 characters");
    }
    let passL = pass.toUpperCase();
    for (let index = 0; index < pass.length; index++) {
        
        if(passL.charCodeAt(index) <= 47 || passL.charCodeAt(index) >= 91){
            invalidPass = 1;
            console.log("Password must consist only of letters and digits");
            break;
        }else if (passL.charCodeAt(index) >= 58 && passL.charCodeAt(index) <= 64){
            invalidPass = 1;
            console.log("Password must consist only of letters and digits");
            break;
        }
    }
    let digitsCount = 0;
    for (let index = 0; index < pass.length; index++) {
        if(pass.charCodeAt(index) > 47 && pass.charCodeAt(index) < 58){
            digitsCount++;
            if(digitsCount >= 2){
                break;
            }
        }
    }
    if(digitsCount < 2){
        invalidPass = 1;
        console.log("Password must have at least 2 digits");

    }

    if(invalidPass === 0){
        console.log("Password is valid");
    }
}

solve("Pa$s$s");