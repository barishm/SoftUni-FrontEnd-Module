function solve(kmh,area) {
    let result;
    let status;
    if(area === "motorway"){
        if(kmh > 130){
            if(kmh - 130 > 40){
                status = "reckless driving";
            }else if(kmh - 130 <= 40 && kmh - 130 > 20){
                status = "excessive speeding";
            }else {
                status = "speeding";
            }
            result = `The speed is ${kmh - 130} km/h faster than the allowed speed of 130 - ${status}`;
        }else{
            result = `Driving ${kmh} km/h in a 130 zone`
        }
    }else if(area === "interstate"){
        if(kmh > 90){
            if(kmh - 90 > 40){
                status = "reckless driving";
            }else if(kmh - 90 <= 40 && kmh - 90 > 20){
                status = "excessive speeding";
            }else {
                status = "speeding";
            }
            result = `The speed is ${kmh - 90} km/h faster than the allowed speed of 90 - ${status}`;
        }else{
            result = `Driving ${kmh} km/h in a 90 zone`
        }
    }else if(area === "city"){
        if(kmh > 50){
            if(kmh - 50 > 40){
                status = "reckless driving";
            }else if(kmh - 50 <= 40 && kmh - 50 > 20){
                status = "excessive speeding";
            }else {
                status = "speeding";
            }
            result = `The speed is ${kmh - 50} km/h faster than the allowed speed of 50 - ${status}`;
        }else{
            result = `Driving ${kmh} km/h in a 50 zone`
        }
    }else if(area === "residential"){
        if(kmh > 20){
            if(kmh - 20 > 40){
                status = "reckless driving";
            }else if(kmh - 20 <= 40 && kmh - 20 > 20){
                status = "excessive speeding";
            }else {
                status = "speeding";
            }
            result = `The speed is ${kmh - 20} km/h faster than the allowed speed of 20 - ${status}`;
        }else{
            result = `Driving ${kmh} km/h in a 20 zone`
        }
    }
    console.log(result);
}
solve(120, 'interstate');