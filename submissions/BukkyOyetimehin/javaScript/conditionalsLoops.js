var n = 0;
var a = 7;
var b = 123;
let pdiff = (b - a)

while (++n <= pdiff) {
	if (n % 5 == 0 && n % 3 == 0) {			
		console.log("Software Developer");
	} 	else if (n % 3 == 0) {		
		console.log("Software");
	}	else if (n % 5 == 0) {
		console.log("Developer");
	}	else {
		console.log(n)
	}
}



