/*
 * Create a function that will console.log(); children, teenagers, young people, old people from the age
 */


function AgeCal(ageGulu){
    let age=ageGulu;
    if (age>=0 && age<=12) {
        return(" You are a children");
    }else if (age>=13 && age<=20) {
        return( " You are a Teenagers");
    }else if (age>=21 && age<=35) {
        return(" You are a Young Man");
    }else if (age>=36 && age<=70) {
        return(" You are a Old man");
    }else if (age>=71 && age<=120) {
        return(" You are a double old man");
    } else{
        return("apni ki  sottie manus")
    } 
}


/**
 * Create a function that will return the area of a rectangle, square, triangle
 */

const areaCal=function(type, val1, val2=null){
    switch (type) {
        case 'r' :
            return`This is ractangular area=${val1*val2}`;
            break;
        case 's' :
            return`This is Square area=${val1*val1}`;
            break;
        case 't' :
            return`This is Square area=${.5*val1*val1}`;
            break;
        
    }
}

