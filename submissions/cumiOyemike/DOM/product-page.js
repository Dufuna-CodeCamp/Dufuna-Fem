let submitForm = {
    quantity: document.querySelector('.quantity'),
    price: document.querySelector('.price'),
    shippingCost: document.querySelector('.ship-cost'),
    totalCost: document.querySelector('.total-cost'),
    button: document.querySelector('.buy-now'),
    errorMsg: document.querySelector('.error')
};

const shippingExpenses = (price) => {
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

let totalExpenses = (price, shipping) => {
    return price + shipping;
}

const calculateAll = () => {
    const initialPrice = 500;

    let totalQuantity = Number(submitForm.quantity.value);
    if (totalQuantity < 1 || !Number.isInteger(totalQuantity || submitForm.quantity.value === "")) {
        submitForm.button.disabled = true;
        submitForm.button.classList.add('disabled');
        submitForm.errorMsg.classList.add('show');
        submitForm.price.innerHTML = initialPrice;
        submitForm.totalCost.innerHTML = initialPrice + 100;
    }
    else {
        submitForm.errorMsg.classList.remove('show');
        submitForm.button.disabled = false;
        submitForm.button.classList.remove('disabled');

        let finalPrice = totalQuantity * initialPrice;
        let shippingFees = shippingExpenses(finalPrice);
        let totalCost = totalExpenses(finalPrice, shippingFees);

        submitForm.price.textContent = `${finalPrice}`;
        submitForm.shippingCost.textContent = `${shippingFees}`;
        submitForm.totalCost.textContent = `${totalCost}`;
    }
}

submitForm.quantity.addEventListener('input', calculateAll);