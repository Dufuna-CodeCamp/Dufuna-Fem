const productList = Array("object1", "object2", "object3");
let object1 = {
    name: "bellaDress",
    imageurl: " belladress.url ",
    productPrice: 8500 ,
    greeting: function(){
                return "bellaDress " + "with" + this.imageurl  +  "is sold for "  +  this.productPrice  + '.'
}
}
console.log(object1.greeting())

let object2 = {
    name: "miraDress",
    imageurl: " miradress.url ",
    productPrice: 8000 ,
    greeting: function(){
                return "miraDress " + "with" + this.imageurl  +  "is sold for "  +  this.productPrice  + '.'
}
}
console.log(object2.greeting())

let object3 = {
    name: "magentaDress",
    imageurl: " magentadress.url ",
    productPrice: 10000 ,
    greeting: function(){
                return "magentaDress " + "with" + this.imageurl  +  "is sold for "  +  this.productPrice  + '.'
}
}
console.log(object3.greeting())

