const domElements = {
    quantity: document.querySelector('.quantity'),
    price: document.querySelector('.price'),
    shippingCost: document.querySelector('.shipping-cost'),
    totalCost: document.querySelector('.total-cost'),
    buyBtn: document.querySelector('.buy-now'),
    error: document.querySelector('.error')
};

//shipping cost

const calculateShipping = (price) => {
    let shippingCost = 0;

    if (price < 10000) {
        shippingCost = 1000;
    } else if (price >= 1000.00 && price < 20000) {
        shippingCost = 0.15 * price;
    } else if (price >= 20000 && price < 100000) {
        shippingCost = 0.20 * price;
    } else if (price >= 100000) {
        shippingCost = 25000;
    }

    return shippingCost;
}

//total sum

const calculateTotal = (price, shipping) => {
    return price + shipping;
}

const calculateAll = () => {
    const initialPrice = 2999;

    let theQuantity = Number(domElements.quantity.value);
    if (theQuantity < 1 || !Number.isInteger(theQuantity || domElements.quantity.value === "")) {
        domElements.buyBtn.disabled = true;
        domElements.buyBtn.classList.add('disabled');
        domElements.error.classList.add('show');
        domElements.price.innerHTML = initialPrice;
        domElements.totalCost.innerHTML = initialPrice + 1000;
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