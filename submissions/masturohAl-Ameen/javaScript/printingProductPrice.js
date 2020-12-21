var productList = [
    {
        productName: "Shorts",
        imageURL: "images/shorts.jpg",
        productPrice: "#20,000",
    },
    {
        productName: "Nightwear",
        imageURL: "images/nightwear.jpg",
        productPrice: "#10,000",
    },
    {
        productName: "Pajamas",
        imageURL: "images/pajamas.jpg",
        productPrice: "#12,000",
    }
]
productList.forEach(function(product) {
    console.log(product.productName + " with " + product.imageURL + " is sold for " + product.productPrice)
})