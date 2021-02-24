 
 let productList = [ {
     productName: "red tennis shoes",
     imageUrl: "./images/shoe2.jpg",
     productPrice: "$200",
     },
     {
        productName: "white officeshoes",
        imageUrl: "./images/shoe1.jpg",
        productPrice: "$200",
        },
        {
        productName: "silver high heeled shoes",
        imageUrl: "./images/shoe2.jpg",
        productPrice: "$200",
        },
     
 ];
 productList.forEach((price) =>{
    console.log(`${price.productName} with ${price.imageUrl} is sold for ${price.productPrice}`);
 })
    