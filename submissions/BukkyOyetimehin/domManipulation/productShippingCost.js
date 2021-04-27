const domElements = {
    quantity: document.querySelector('.quantity'),
    price: document.querySelector('.price'),
    shippingCost: document.querySelector('.shipping-cost'),
    totalCost: document.querySelector('.total-cost'),
    buyBtn: document.querySelector('.buy-button'),

};
const calculateShipCost = (price) => {
    let shippingCost = 0;
    if (price < 1000) {
        shippingCost = 100;
    } else if (price >= 1000 && price < 20000) {
        shippingCost = 0.15 * price;
    } else if (price >= 20000 && price <= 100000) {
        shippingCost = 0.2 * price;
    } else if (price > 100000) {
        shippingCost = 25000;
    }
    return shippingCost;
}
const totalPrice = (price, shipping) => {
    return price + shipping;
}
const calculateCost = () => {
    const unitPrice = 5000;
    let productQuantity = Number(domElements.quantity.value);
    if (productQuantity < 1 || !Number.isInteger(productQuantity || domElements.quantity.value === "")) {
        domElements.buyBtn.disabled = true;
        domElements.buyBtn.style.backgroundColor = "grey"
        domElements.price.innerHTML = unitPrice;
        domElements.totalCost.innerHTML = unitPrice + 750;
    } else {
        domElements.buyBtn.disabled = false;
        domElements.error.classList.remove("show");
        let actualPrice = productQuantity * unitPrice;
        let shippingFee = calculateShipCost(actualPrice);
        let totalCost = totalPrice(actualPrice, shippingFee);
        domElements.price.textContent = `${actualPrice}`;
        domElements.shippingCost.textContent = `${shippingFee}`;
        domElements.totalCost.textContent = `${totalCost}`;
    }
}
domElements.quantity.addEventListener('input', calculateCost);