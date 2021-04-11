let productList = [
    {
        'productName': "Red Tennis Shoes",
        'imageUrl': "../HTML/Images/shoes-2.jpg",
        'productPrice': "$200"
    },
    {
        'productName': "Black Office Shoes",
        'imageUrl': '../HTML/Images/shoes-3.jpg',
        'productPrice': "$350"
    },
    {
        'productName': "Red High-Heeled shoes",
        'imageUrl': '../HTML/Images/shoes.jpg',
        'productPrice': "$230"
    }
]

for (let i = 0; i < productList.length; i++) {
    console.log(productList[i].productName + " with " + productList[i].imageUrl + " is sold for " + productList[i].productPrice);
}
