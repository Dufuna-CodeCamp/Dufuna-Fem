var productList = [
    {
        productName:"The new samsung device",
        imageUrl:"./imgs/samsung.png",
        productPrice: "#30 000",
    },

    {
        productName:"The new iPhone device",
        imageUrl:"./imgs/samsung.png",
        productPrice: "#20 000",
    },

    {
        productName:"The new Huawei device",
        imageUrl: "./imgs/samsung.png",
        productPrice: "#10 000",
    },
];

productList.forEach(function(product){
console.log(product.productName + " with " + product.imageUrl + " is sold for" + product.productPrice);

});
