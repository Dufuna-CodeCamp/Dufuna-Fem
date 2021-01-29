var x = "7";
var y = "123";
var z =  y - x ;

for (var i = 1; i <= z; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log ("Software Developer");
    }else if ((i % 3 === 0)){
        console.log ("Software");
    }else if ((i % 5 === 0)){
        console.log ("Developer");
    }else{
        console.log(i);
    }
}