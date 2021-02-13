let quantity = document.getElementById('quantity'),
    price = document.getElementById('price'),
    shippingCost = document.getElementById('shipping-cost'),
    totalCost = document.getElementById('total-cost'),
    buyButton = document.getElementById('buy-button'),
    productPrice = Number(price.textContent) * quantity.value;

handleInput = (e) => {
    if (quantity.value <= 0) {
        quantity.nextElementSibling.textContent = 'Please enter a valid quantity';
        buyButton.disabled = true;
        buyButton.classList.add('disable');
        e.preventDefault();
        return false;
    } else {
        productPrice = Number(price.textContent) * quantity.value;
        quantity.nextElementSibling.textContent = '';
        buyButton.disabled = false;
        buyButton.classList.remove('disable');
        return true;
    }
}

shippingAmount = () => {
    if (productPrice < 1000) {
        shippingCost.textContent = 100;
    } else if(productPrice >= 1000 && productPrice <= 20000) {
        shippingCost.textContent = 0.15 * productPrice;
    } else if(productPrice > 20000 && productPrice <= 100000) {
        shippingCost.textContent = 0.2 * productPrice;
    } else {
        shippingCost.textContent = 25000;
    }
    totalCost.textContent = Number(shippingCost.textContent) + productPrice;
}

InputValidation = (e) => {
    handleInput(e);
    shippingAmount();
    return true;
}

quantity.addEventListener('input', InputValidation);