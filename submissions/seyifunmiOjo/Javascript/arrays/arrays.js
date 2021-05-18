const productList = [
        {
    productName: "Apples",
    imageUrl: "images/apples.jpg", 
    productPrice: "$5"},
    {
        productName: "Strawberries",
        imageUrl: "images/strawberries.jpg",
        productPrice: "$8"},
    {
        productName:"Pawpaws",
        imageUrl: "images/pawpaws.jpg",
        productPrice: "$10"},
    ];

    productList.forEach((productList) => { 
console.log (productList.productName + " " + "with" +" " + productList.imageUrl + " " + "is sold for" + " " + productList.productPrice);});