const productList = [
  {
    productName: "Pepper-Soup Spice",
    imageUrl: "img/pepper-soup-spice.jpg",
    productPrice: "\u20A62,999.00",
  },
  {
    productName: "Nutmeg Seed",
    imageUrl: "img/nutmeg.jpg",
    productPrice: "\u20A62,999.00",
  },
  {
    productName: "Ginger",
    imageUrl: "img/ginger.jpg",
    productPrice: "\u20A61,499.00",
  },
];

productList.forEach((productList) => {
  console.log(
    productList.productName +
      "with" +
      productList.imageUrl +
      "is sold for" +
      productList.productPrice
  );
});
