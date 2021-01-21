// Positive difference between 7 nd 123
const diff = 123 - 7;

//to print out the numbers between 1 and 116,lets create a var named count //
var  count = 1;

while (count < diff) {
    switch (true) {
        case ((count % 3 === 0) && (count % 5 === 0)):
            console.log("Software Developer");
            break;
        case ((count % 5) === 0):
            console.log("Developer");
            break;
        case ((count % 3) === 0):
            console.log("Software");
            break;
        default:
            console.log(count);
    }
    count++;
};



// Second Task
let productList = [
    { productName: 'Palissy Briefcase', imageUrl: 'leather-palissy-25hour-bag-chocolate-1.jpg', productPrice: '₦27,500' },
    { productName: 'leather Belth', imageUrl: 'sku_brown_1_10.jpg', productPrice: '₦8,000' },
    { productName: 'Wrist Watch', imageUrl: 'images1.jpg', productPrice: '₦10,000' }
]

productList.forEach((product) => {
    console.log(`${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}`);
})