var diff = 123 -7;

for(i = 1; i <= diff; i++){
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("Software Developer");
        continue;
    }       
    if(i % 3 == 0) {
        console.log("Software");
        continue;
    }      
    if(i % 5 == 0) {
        console.log("Developer")
        continue;
    }
    console.log(i);
}