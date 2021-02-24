let quantity = document.getElementById("quantity-input");
let price = document.getElementById("price");
let shippingCost = document.getElementById("shipping-cost");
let cost = document.getElementById("total-cost");
let button = document.getElementById("pricing-btn");
console.log(quantity.value);
cost.innerText = +shippingCost.innerText + +price.innerText * +quantity.value;
productPrice = (event) => {
  if (event.target.value <= 0) {
    event.target.value = 1;
  }
  cost.innerText = +shippingCost.innerText + +price.innerText * +quantity.value;
};

quantity.addEventListener("change", productPrice);
