let  Sform = document.getElementById("form");
     quantity = document.getElementById("quantity")
     shippingCost = document.getElementById("shippingCost");
     totalCost = document.getElementById("totalCost");
  let price = document.getElementById("price")
 
    // price = productPrice
//  let  shipping = document.getElementById("shipping");
//  let  total = document.getElementById("total");

    function numberValidation (event) {
    if (quantity.value == '') {
        quantity.nextElementSibling.innerHTML = "Please enter a valid quantity";
        event.preventDefault()
        return false;
    }   
    let numRegex = /^[1-9]/;
    if (!quantity.value.match(numRegex)) {
        quantity.nextElementSibling.innerHTML = "Please enter a valid quantity";
        event.preventDefault();
        // console.log(quantity)
        return false;
    } else {
        quantity.nextElementSibling.innerHTML = "";
        return true;
    }
}

// Sform.addEventListener("input", validateForm);
// Sform.addEventListener("submit", validateForm);



function calculateproductPrice () {
    let priceperUnit = 8000;
        quantity = quantity.value;
        productPrice = (priceperUnit * quantity)
        price.innerHTML = (productPrice) 
}
        // price.innerHTML = (priceperUnit * quantity)
    // shippingCost.innerHTML = (priceperUnit * quantity)

    // shippingCost = (productPrice * 15/100)
  
    // event.preventDefault()
    // return true;

// }
function calculateShippingCost() {
    let priceperUnit = 8000;
      let  quantity = quantity.value;
        productPrice = (priceperUnit * quantity)
        // shippingCost = ''
        shippingCost = (productPrice * 15/100)
        console.log(shippingCost)
        
    // if (productPrice < 1000) {
    //     shippingCost.innerHTML = "100";
    //     // event.preventDefault()
    //     // return false;
    // } else if (productPrice >= 1000 && productPrice <= 20000) {
    //     shippingCost = productPrice * 15/100
        // shippingCost.innerHTML = (productPrice * 15/100)
        // event.preventDefault()
        // return true;
//        console.log(shippingCost)
// }
}
// function calc (event) {
    // if (price.value < 1000) {
    //      shippingCost = 100;
    //      shipping.nextElementSibling.innerHTML = shippingCost
    // //   quantity.input = () => alert("shippingcost");
    // }
    //   else if (productPrice <= 20000) {
    //     shippingCost = productPrice * 15/100
function validateForm(e) {
    numberValidation(e);
    calculateproductPrice(e)
    // calculateShippingCost(priceperUnit)
    calculateShippingCost(e)
    // quantityChanged(e)
    return true;
}
Sform.addEventListener("input", validateForm);
Sform.addEventListener("submit", validateForm);

// function quantityChanged(event){
//     let quantity = document.getElementById("quantity")
//     for (let i=1; i<quantity.value.length; i++) {
//         var input = quantity.value[i]
//         input.addEventListener('onchange', quantityChanged)
//         event.preventDefault()
//     } 
// }
// function totalChanged (event){
//     let total = productPrice * quantity
//     for (let i=1; i<total; i++) {
//         // var input = total[i]
//         quantity.addEventListener('onchange', totalChanged)
//         event.preventDefault()
//     } 
// }

// let quantity = document.getElementById("quantity")
// for (let i=1; i<quantity.value.lenght; i++) {
//     var input = quantity.value[i]
//     input.addEventListener('onchange', quantityChanged)
// }

// function quantityChanged(event) {
//     let productPrice = price.value * quantity.value;
//     event.preventDefault()
//     console.log(productPrice);
// }

// function updateCartTotal() {
//     //    price 
//     // var quantity = quantity.value
//     var total = 0
//     total = total + (price * quantity)
//         console.log(total)

// }
// document.getElementsByClassName("field4")[0].innerText = '&#x20A6;' + total






//  for (let i=1; i<quantity.value; i++) {

//  }



// Calculations
// var price = 8000
// var productPrice = price * quantity.value;
// console.log(productPrice);
// var quantity =""
// for (let i=1; i<quantity; i++) {
//     quantity[i]
//     console.log(quantity)
// }
// var shipping = 0;
// var total = price + shippingcost; 
// let productPrice = price * quantity
    // console.log(total);
// var shippingCost = '';
// function calc (event) {
// if (price.value < 1000) {
//      shippingCost = 100;
//      shipping.nextElementSibling.innerHTML = shippingCost
// //   quantity.input = () => alert("shippingcost");
// }
//   else if (productPrice <= 20000) {
//     shippingCost = productPrice * 15/100
//     shipping.nextElementSibling.innerHTML = shippingCost;
//     quantity.value.onchange = () => shippingCost;
//     shipping.nextElementSibling.innerHTML = shippingCost
// } else if (price <=100000) {
//     shippingCost = productPrice * 20/100
//     quantity.onchange =() => shippingCost
// }
// if (price >100000) {
//     shippingcost = 25000;
// }



// console.log(shippingcost)
// onclick = "shippingCost"
//     price.nextElementSibling.innerHTML = "100"
//     // alert("Shipping fee costs &#x20A6;100")
//   event.preventDefault();
//   console.log(shippingCost)
//   return false;
// }
// }
// } else if (productPrice <1000)
// }
// Sform.addEventListener("input", quantity);


// (price *quantity)
