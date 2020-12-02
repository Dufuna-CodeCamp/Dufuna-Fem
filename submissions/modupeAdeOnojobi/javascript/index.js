let x = 123 - 7;
for (let i = 1; i <= x; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Software Developer');
    }
    else if (i % 3 === 0) {
        console.log('Software');
    }
    else if (i % 5 === 0) {
        console.log('Developer');
    }
    else {
        console.log(i);
    }
}

// Second Task
let productList = [
    { productName: 'Victoria Sneaker', imageUrl: 'sneaker2.jpg', productPrice: '₦19,900' },
    { productName: 'Adidas Grand Court Sneaker', imageUrl: 'sneakers.jpg', productPrice: '₦20,000' },
    { productName: 'Victoria Totem 1491', imageUrl: 'sneaker3.jpg', productPrice: '₦25,000' }
]

productList.forEach((product) => {
    console.log(`${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}`);
})