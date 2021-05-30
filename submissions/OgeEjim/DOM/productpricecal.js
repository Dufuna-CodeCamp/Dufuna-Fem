document.addEventListener("load", initialise());

var initialCost;
var initialQty;
var quantity;
var total;
var shippingCost;
var price;
var buyButton;
var errorMsg;


//used arrow functions which are prolly not supported

function calculateShipcost(price) {
    let shippingCost = 0;
    if(price < 1000) {
        shippingCost = 100;
    }else if(price >= 1000 && price < 20000){
        shippingCost = (15 * price)/100
    }else if(price >= 20000 && price < 100000){
        shippingCost = (20 * price)/100;
    }else if(price >= 100000 ){
        shippingCost = 25000;
    }
    return shippingCost;
}

function calculateCost() {
    let productQuantity = Number(quantity.value);
    if (productQuantity < 1 || !Number.isInteger(productQuantity || quantity.value === "")){
        buyButton.disabled = true;
        buyButton.style.backgroundColor = "grey";
        errorMsg.innerHTML = "please enter a valid quantity"
    } else {
        let productPrice = productQuantity * initialCost;
        let shipping = calculateShipcost(productPrice);
        let totalCost = productPrice + shipping
        buyButton.disabled = false;
        buyButton.style.backgroundColor = "rgb(255, 169, 8)";
        errorMsg.innerHTML = ""
        getTotal(productPrice, shipping, totalCost)
    }
}

quantity.addEventListener('input', calculateCost);


function initialise() {
    quantity = document.querySelector('#quantity')
    total = document.querySelector('#totalCost')
    shippingCost = document.querySelector('#shippingCost')
    price = document.querySelector('#price')
    buyButton = document.querySelector('#buyButton')
    errorMsg = document.querySelector('#error_msg')

    initialCost = 200
    initialQty = 1

    var productPrice = initialQty * initialCost ;
    var shipping = calculateShipcost(productPrice);
    
    totalCost = productPrice + shipping;   
    
    console.log("LOADED: ", totalCost)
    getTotal(productPrice, shipping, totalCost)
    
}

function getTotal(productPrice, shipping, totalCost) {
    price.innerHTML = '$' + productPrice;
    shippingCost.innerHTML = '$' + shipping;
    total.innerHTML = '$' + totalCost;
}

// function valQuantity(quantity,event)

// document.quantity.addEventListener('input');