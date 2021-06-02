    var quantity = document.querySelector('#quantity')
    var total = document.querySelector('#totalCost')
    var shippingCost = document.querySelector('#shippingCost')
    var price = document.querySelector('#price')
    var buyButton = document.querySelector('#buyButton')
    var errorMsg = document.querySelector('#error_msg')
    var initialCost = 200
    var initialQty = 1
    var productPrice = initialQty * initialCost ;    
    calculateShipcost(productPrice);      

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

    function getTotal(productPrice, shipping, totalCost) {
        price.innerHTML = '$' + productPrice;
        shippingCost.innerHTML = '$' + shipping;
        total.innerHTML = '$' + totalCost;
    }  