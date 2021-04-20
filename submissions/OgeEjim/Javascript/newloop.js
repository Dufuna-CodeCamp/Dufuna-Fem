let productList = [
  { 
    productName:'cup cakes', 
    imageUrl:'cupcakeimage1.jpg', 
    productPrice:'$5.00',
  },
  { 
    productName:'ice cream', 
    imageUrl:'icecream.jpg', 
    productPrice:'$10.00',
  },
  { 
    productName:'vanilla scone', 
    imageUrl:'vanillascone.jpg', 
    productPrice:'$15.00',
  },
 ];
 
 for (let i in productList) {	
  console.log((productList[i].productName) + (" with ") + (productList[i].imageUrl) + (" is sold for ") + 
  (productList[i].productPrice)) 
  };