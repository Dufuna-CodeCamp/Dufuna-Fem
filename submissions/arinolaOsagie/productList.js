var productList = [
    {
        productName: "Sneakers",
        imageURL: "https://imgur.com/a/XnkI3Bg",
        productPrice: "#30,000",
    },
    {
        productName: "Shoes",
        imageURL: "https://imgur.com/a/FSZ4Nyr",
        productPrice: "#40,000",
    },
    {
        productName: "Shirt",
        imageURL: "https://imgur.com/a/QRW1lub",
        productPrice: "#28,000",
    }
]

productList.forEach(function(product) {
    console.log(product.productName + " with " + product.imageURL + " is sold for " + product.productPrice)
})