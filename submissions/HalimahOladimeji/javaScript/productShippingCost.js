let quantity = document.getElementById('quantity');
let price = document.getElementById('price');
let shippingCost = document.getElementById('shippingCost');
let cost = document.getElementById('totalCost');
let button = document.getElementById('btn');
let totalPrice = Number(price.textContent) * quantity.value;

productPrice = (event) => {
    if (quantity.value <= 0) {
        quantity.nextElementSibling.textContent = 'Please enter a valid quantity';
        button.disabled = true;
        button.classList.add('disable')
        event.preventDefault();
        return false;
    } else {
        totalPrice = Number(price.textContent) * quantity.value;
        quantity.nextElementSibling.textContent = '';
        button.disabled = false;
        button.classList.remove('disable')
        return true;
    }
}

shippingPrice = () => {
    if (totalPrice < 1000000) {
        shippingCost.textContent = 100;
    } else if (totalPrice >= 1000000 && totalPrice <= 2000000) {
        shippingCost.textContent = 0.15 * totalPrice;
    } else if (totalPrice > 2000000 && totalPrice <= 10000000) {
        shippingCost.textContent = 0.2 * totalPrice;
    } else {
        shippingCost.textContent = 25000;
    }
    cost.textContent = Number(shippingCost.textContent) + totalPrice;
}

PriceValidation = (e) => {
    productPrice(e);
    shippingPrice();
    return true;
}

quantity.addEventListener('input', PriceValidation); 