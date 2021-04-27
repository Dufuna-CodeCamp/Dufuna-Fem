const posDiff = 123 - 7;

    var x = [];
    for (let i = 1; i <= posDiff; i++) {
        x.push(i);
    }
    for (i in x) {
        
        if (i % 3 === 0) {
            console.log('Software');
        } else if (i % 5 === 0) {
            console.log('Developer');
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('SOftware Developer');
        } else {
            console.log(i);
        }
    }
