var productList = [
    {
        productName:"The new samsung device",
        imageUrl:"../HTML/Images/pg2.png",
        productPrice: "#30 000",
    },

    {
        productName:"The new iPhone device",
        imageUrl: "../HTML/Images/Apple_announce-iphone12pro_10132020.jpg.og.jpg",
        productPrice: "#20 000",
    },

    {
        productName:"The new Huawei device",
        imageUrl: "../HTML/Images/960x0.jp",
        productPrice: "#10 000",
    },
];

productList.forEach(function(product){
console.log(product.productName + " with " + product.imageUrl + " is sold for " + product.productPrice);

});
