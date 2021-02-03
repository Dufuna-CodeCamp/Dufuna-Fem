var productList = [
    {
        productName: "Cherry blossom",
        imageUrl: "../HTML/images/prod2.jpeg",
        productPrice: "₦20,000"
    },
    {
        productName: "Carnation",
        imageUrl: "../HTML/images/Carnation4.png",
        productPrice: "₦5,000"
    },
    {
        productName: "Peony",
        imageUrl: "../HTML/images/peony1.jpeg",
        productPrice: "₦15,000"
    }
];

productList.forEach((listItem) => {
    console.log(listItem.productName + " with " +listItem.imageUrl + " is sold for " + listItem.productPrice + ".");
})