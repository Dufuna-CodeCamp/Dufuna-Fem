var positiveDifference = 123 - 7;


for (var i = 1; i<=positiveDifference; i++){
    if (i % 3 == 0) {
        console.log("Software")
    }
    else if (i % 5 == 0){
        console.log ("Developer")
    }
    else if ( i % 3 == 0 && i % 5 == 0){
        console.log("Software Developer")
    }
    else {
        console.log(i)
    }
}
