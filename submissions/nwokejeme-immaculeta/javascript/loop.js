// Positive difference between 7 nd 123
const diff = 123 - 7;

//to print out the numbers between 1 and 116,lets create a var named count //
var  count = 1;

while (count < diff) {
    switch (true) {
        case ((count % 3 === 0) && (count % 5 === 0)):
            console.log("Software Developer");
            break;
        case ((count % 5) === 0):
            console.log("Developer");
            break;
        case ((count % 3) === 0):
            console.log("Software");
            break;
        default:
            console.log(count);
    }
    count++;
};
