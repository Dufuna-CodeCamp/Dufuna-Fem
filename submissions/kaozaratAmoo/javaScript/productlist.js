let productList = [
    {productName: "Dry Fruit Cucumber Seed",
     imageUrl: "images/Dry fruit cucumber seeds.png", 
     productPrice: "#1500",
},
    {productName: "Agrolife Maize", 
    imageUrl: "images/Agrolife Maize.png",
    productPrice: "#2000",
},
    {productName: "Ogbono Seeds", 
    imageUrl: "images/ogbono.png", 
    productPrice: "#1400"
}
]

for (let i = 0; i < productList.length; i++) {
console.log (productList[i].productName + " " + "with" + " " + productList[i].imageUrl +  " " +"is sold for" + " " + productList[i].productPrice)  
}