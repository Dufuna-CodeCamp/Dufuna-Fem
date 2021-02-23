var output= Math.abs(7-123);
    for (var i = 1; i <= output; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Software Developer");
        }
        else if (i % 3 === 0) {
            console.log("Software");
        }
        else if (i % 5 === 0) {
            console.log("Developer");
        }
        else {
            console.log(i);
        }
    }
    