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


for (let i = 1; i < 116; i++) {
    if (i % 3 == 0 & i % 5 == 0) {
        console.log("Software Developer")
    } else if (i % 3 == 0) {
        console.log("Software")
    } else if (i % 5 == 0) {
        console.log("Developer")
    }
}