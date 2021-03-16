let productList = [
    {productName: 'Wine and Confectionery Basket' , imageUrl: 'wineHamper.jpg' , productPrice:'₦ 30,000'},
    {productName:'Fruit Basket', imageUrl:'fruitHamper2.jpg' , productPrice:'₦ 15,000'},
    {productName:'Corporate Basket' , imageUrl: 'coporateGift2.jpg' , productPrice:'₦ 20,000'}
]

productList.forEach ((product) => {
        console.log ( product.productName + " " +'with' + " " + product.imageUrl + " " +'is sold for' +" " + product.productPrice);
    })