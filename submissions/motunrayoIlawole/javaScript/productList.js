const productList = [
    {
        productName: "Brown Brim",
        imageUrl: "assets/brown-brim.png",
        productPrice: "$150"
    },
    {
        productName: "Floral Blouse",
        imageUrl: "assets/floral-blouse.png",
        productPrice: "$50"
    },
    {
        productName: "Floral Dress",
        imageUrl: "assets/floral-skirt(1).png",
        productPrice: "$100"
    }
];

productList.forEach(product => {
    // destructure each product object
    const { productName, imageUrl, productPrice } = product;

    console.log(`${productName} with ${imageUrl} is sold for ${productPrice}`);
});