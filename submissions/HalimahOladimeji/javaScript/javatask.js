const y = Math.abs(7-123);
for (let i = 1; i <= y; i++) {
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