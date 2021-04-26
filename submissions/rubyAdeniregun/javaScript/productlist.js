//a var called product list with an array containing 3 objects is created//

var productList = ["bath", "facialCare", "bodyCare"]

//Assigning 3 properties (productName, imageUrl and productPrice) to each object//

let bath = {
    productName: "coconutSoap",
    imageUrl: "coconutSoapjpeg",
    productPrice: "$280",
    greeting: function(){
        return this.productName +" with " + this.imageUrl + " is sold for " + this.productPrice;
    }
}

console.log(bath.greeting())

let facialCare = {
    productName: "freshPowder",
    imageUrl: "freshPowderjpeg",
    productPrice: "$180",
    greeting: function(){
        return this.productName +" with " + this.imageUrl + " is sold for " + this.productPrice;
    }
}

console.log(facialCare.greeting())

let bodyCare = {
    productName: "freshOil",
    imageUrl: "freshOiljpeg",
    productPrice: "$480",
    greeting: function(){
        return this.productName + " with " + this.imageUrl + " is sold for " + this.productPrice;
    }
}

console.log(bodyCare.greeting())

function convertMeterToYard(number) {
    return number * 1.09361;
}

console.log(convertMeterToYard(20));
console.log(convertMeterToYard(40));
console.log(convertMeterToYard(60));
