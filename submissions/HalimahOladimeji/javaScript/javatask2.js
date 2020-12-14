var productList = [
    {
        productName: "SAMSUNG S20",
        imageUrl: "../HTML-forms/images/samsungS20.jpg",
        productPrice: "₦265,000"
    },
    {
        productName: "SAMSUNG GALAXY NOTE 20",
        imageUrl: "../HTML-forms/images/NOTE-20.jpg",
        productPrice: "₦350,000"
    },
    {
        productName: "SAMSUNG S10",
        imageUrl: "../HTML-forms/images/S10.jpg",
        productPrice: "₦332,000"
    },
];

productList.forEach((product) => {
    console.log(product.productName + " with " + product.imageUrl + " is sold for " + product.productPrice + ".");
})