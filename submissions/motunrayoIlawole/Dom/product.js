const domElements = {
    quantity: document.querySelector('.quantity'),
    price: document.querySelector('.price'),
    shippingCost: document.querySelector('.ship-cost'),
    totalCost: document.querySelector('.total-cost'),
    buyBtn: document.querySelector('.buy-now'),
    error: document.querySelector('.error')
};

const calculateShipping = (price) => {
    let shippingCost = 0;

    if (price < 1000) {
        shippingCost = 100;
    } else if (price >= 1000 && price < 20000) {
        shippingCost = 0.15 * price;
    } else if (price >= 20000 && price < 100000) {
        shippingCost = 0.20 * price;
    } else if (price >= 100000) {
        shippingCost = 25000;
    }

    return shippingCost;
}

const calculateTotal = (price, shipping) => {
    return price + shipping;
}

const calculateAll = () => {
    const initialPrice = 150;

    let theQuantity = Number(domElements.quantity.value);
    if (theQuantity < 1 || !Number.isInteger(theQuantity || domElements.quantity.value === "")) {
        domElements.buyBtn.disabled = true;
        domElements.buyBtn.classList.add('disabled');
        domElements.error.classList.add('show');
        domElements.price.innerHTML = initialPrice;
        domElements.totalCost.innerHTML = initialPrice + 100;
    }
    else {
        domElements.error.classList.remove('show');
        domElements.buyBtn.disabled = false;
        domElements.buyBtn.classList.remove('disabled');

        let actualPrice = theQuantity * initialPrice;
        let shippingFee = calculateShipping(actualPrice);
        let totalCost = calculateTotal(actualPrice, shippingFee);

        domElements.price.textContent = `${actualPrice}`;
        domElements.shippingCost.textContent = `${shippingFee}`;
        domElements.totalCost.textContent = `${totalCost}`;
    }
}

domElements.quantity.addEventListener('input', calculateAll);