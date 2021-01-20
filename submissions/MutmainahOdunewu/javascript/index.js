const productList = [
  {
    productName: "Boots",
    imgUrl: "images/Boots.jpg",
    productPrice: "#20000",
  },
  {
    productName: "Sneakers",
    imgUrl: "images/sneakers.jpg",
    productPrice: "#15000",
  },
  {
    productName: "Halfshoe",
    imgUrl: "images/Halfshoe.jpg",
    productPrice: "#10000",
  },
];
for (let i of productList) {
  const output = `${i.productName} with ${i.imgUrl} is sold for ${i.productPrice}`;
  console.log(output);
}
