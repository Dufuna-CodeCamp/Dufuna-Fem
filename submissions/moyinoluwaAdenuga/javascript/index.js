let productList = [
    {
        productName : 'Laced Ankara top',
        imageUrl : 'images/amod1.png',
        productPrice : '5000'
    },
    {
        productName : 'Off-shoulder Ankara Top',
        imageUrl : 'images/amod2.png',
        productPrice : '5000'
    },
    {
        productName : 'Ankara Top with Belt',
        imageUrl : 'images/amod3.png',
        productPrice : '4000'
    }   
];
for (let i = 0; i < productList.length; i++) {
    const output = productList[i].productName + ' with ' + productList[i].imageUrl + ' is sold for ' + productList[i].productPrice;
    console.log(output);
}