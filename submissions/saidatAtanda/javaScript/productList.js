let productList = [
    {
        productName: "The Summer I Turned Pretty",
        imageUrl: "../html/images/book-3.JPG",
        productPrice: "$40"
    },
    {
        productName: "To All The Boys I've Loved Before",
        imageUrl: "../html/images/book-4.JPG",
        productPrice: "$35"
    },
    {
        productName: "Master Of The Game",
        imageUrl: "../html/images/book-6.JPG",
        productPrice: "$70"
    }
];

productList.forEach(function(product) {
    console.log(product.productName + " with " + product.imageUrl + " is sold for " + product.productPrice);
}
)
