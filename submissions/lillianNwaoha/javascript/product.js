 
 var productPrice = {
     productName: "red tennis shoes",
     imageUrl: "./images/shoe2.jpg",
     productPrice: "$200",
     price: function(){
        return this.productName + "with" + this.imageUrl + "is sold for" + this.productPrice;
     }
   
 };
 console.log(productPrice.price());