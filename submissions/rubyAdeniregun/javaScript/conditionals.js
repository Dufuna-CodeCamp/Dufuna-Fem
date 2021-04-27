//positive difference between 7 and 123

let firstNumber = 7
let lastNumber = 123
positiveDiff = lastNumber - firstNumber
console.log(positiveDiff)

/*to print out the numbers between 1 and 116,
lets create a var named prog */

var prog= "";
    i = 0

do {
    i++;
    prog +=i;
}
while (i < 116)
console.log(prog);

for (var prog = ""; prog < 116; prog+=i) {
if (prog / 3 === 0) { 
    console.log("software");
    }
    if (prog / 5 === 0) {
    console.log("developer");
    }
    else if (prog / 3 === 0 && prog / 5 === 0); {
    console.log("softwareDeveloper")
    }
}
