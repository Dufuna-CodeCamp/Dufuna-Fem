let productList = [
    {productName: 'Wine and Confectionery Basket' , imageUrl: 'wineHamper.jpg' , productPrice:'₦ 30,000'},
    {productName:'Fruit Basket', imageUrl:'fruitHamper2.jpg' , productPrice:'₦ 15,000'},
    {productName:'Corporate Basket' , imageUrl: 'coporateGift2.jpg' , productPrice:'₦ 20,000'}
]

productList.forEach ((product) => {
        console.log ( product.productName + " " +'with' + " " + product.imageUrl + " " +'is sold for' +" " + product.productPrice);
    })

// Task 2 - The Software Developer Conditional

let x = 7,
    y = 123,
    z = y - x;
for (let i = 1; i <= z; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log ('Software Developer');
    }
    else if (i % 3 === 0) {
        console.log ('Software');
    }
    else if (i % 5 === 0) {
        console.log ('Developer')
    }
    else {
        console.log ('None');
    }
}