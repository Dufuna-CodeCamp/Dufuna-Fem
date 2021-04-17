var unit_price = document.getElementById("price");
var unit_price_value = unit_price.getAttribute("value");
var quantity = document.getElementById("quantity").value;
var shipping = document.getElementById("shipping");
var shipping_price = shipping.getAttribute("value");
var total = (Number(unit_price_value) * Number(quantity)) + Number(shipping_price);
document.getElementById("total_cost").innerHTML = 'Total Cost: $' + total;

function total_cost() {
    unit_price_value = document.getElementById("price").getAttribute("value");
    shipping_price = document.getElementById("shipping").getAttribute("value");
    quantity = document.getElementById("quantity").value;
    if (quantity < 1 || (quantity % 1 != 0)) {
        alert('please enter a valid quantity')
        document.getElementById("buy").classList.add('disabled');
    } else {
        var product_price = Number(quantity) * Number(unit_price_value);
        if (product_price < 1000) {
            shipping_price = 100;
            shipping.innerHTML = 'Shipping Cost: $' + shipping_price;
        } else if (product_price >= 1000 && product_price <= 20000) {
            shipping_price = (15/100)*product_price;
            shipping.innerHTML = 'Shipping Cost: $' + shipping_price;
        } else if (product_price >= 20000 && product_price <= 100000) {
            shipping_price = (20/100)*product_price;
            shipping.innerHTML = 'Shipping Cost: $' + shipping_price;
        } else if (product_price > 100000) {
            shipping_price = 25000;
            shipping.innerHTML = 'Shipping Cost: $' + shipping_price;
        }

        total = (Number(unit_price_value) * Number(quantity)) + Number(shipping_price);
        document.getElementById("total_cost").innerHTML = 'Total Cost: $' + total;
        document.getElementById("buy").classList.remove('disabled');
    }
}
