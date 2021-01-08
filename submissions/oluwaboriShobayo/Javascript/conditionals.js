let firstNumber = 7;
let secondNumber = 123;
var positiveDifference = secondNumber - firstNumber;
console.log(positiveDifference);

// This prints the numbers from 1 to 116
var print = "",
    i = 1;
do {
    print += i;
    i++;
}
while(i <= 116)
console.log(print);

for (i=1; i<=116; i++){
    if (i % 3 === 0); {
        console.log("Software");  
} if (i % 5 === 0); {
    console.log("Developer");
} if (i % 3 === 0 && i % 5 === 0); {
    console.log("Software Developer");
} 
break;
}
