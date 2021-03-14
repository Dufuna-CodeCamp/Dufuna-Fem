var age = 38 ;
console.log (age) ;

let price = 100 ;
console.log (price);
price = 350
console.log (price);

let x = 4 ,
    y = 9 ;
console.log (x+y);

let firstName = "Omolayo";
    surname = "O";
console.log (firstName + " " + surname);

let hour = new Date().getHours();
console.log (hour);
if (hour < 18 ) { 
    console.log ("Good Day")
}
else if (hour < 20) {
    console.log ( "Good Evening")
}
else {
    console.log ( "Good Night")
};

let fruit = "Papaya";
switch (fruit){
    case "orange":
        console.log ("i love oranges");
        break;
    case "Papaya":
        console.log ("Papayas are amazing");
        break;
    default:
        console.log ("I dont have a favourite fruit");
}

let size = 45;
    weight = 65
if (size = 45 || weight > 65) {
    console.log ('You can apply')
}
else {
    console.log ('You cannot apply')
};

let device = 'andriod';
if (!(device === 'andriod')) {
    console.log ('device is not andriod')
}
else { console.log ('device is andriod')
};


const t = 10;
const colour = t > 10 ? 'red' : 'blue';
console.log (colour);

let phone = 'andriod';
output = (phone === 'andriod')? 'you use an andriod phone':'you do not use an andriod phone';
console.log(output)

let productList = [
    {
        productName: 'Wine and Confectionery Basket' ,
        imageUrl: '' ,
        producPrice:'₦ 30,000' ,
    }
    {
        productName:'Just Fruit Basket',
        imageUrl: ,
        productPrice:'₦ 15,000',
    }
    {
        productName:'Corporate Basket' ,
        imageUrl: ,
        productPrice:'₦ 20,000' ,
    }
];

productList.forEach (
    (product) => {
        console.log ( product.productName + 'with' + product.imageUrl + 'is sold for' + product.productPrice)
    }

)