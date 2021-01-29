var product1 = {productName:"Gucci Bag",
               imgUrl:"https://media.istockphoto.com/photos/september-19-2018-milan-italy-street-style-outfits-in-detail-during-picture-id1087241520?b=1&k=6&m=1087241520&s=170667a&h=fCYxYKDPzRSrOgZF_dkmgayndaOypk37PcFFRG5mA54=",
               productPrice:3500}
var product2 = {productName:"Gucci Shoe",
               imgUrl:"https://cdn.pixabay.com/photo/2014/04/26/00/34/shoes-332197__340.jpg",
               productPrice:2500}
var product3 = {productName:"Gucci Watch",
               imgUrl:"https://cdn.pixabay.com/photo/2017/07/09/21/33/watch-2488193__340.jpg",
               productPrice:2500}
var productList = [product1, product2, product3];
for (var i = 0; i < productList.length; i++) {
  console.log(productList[i].productName + " with " + productList[i].imgUrl + " is sold for " + productList[i].productPrice);
} 

