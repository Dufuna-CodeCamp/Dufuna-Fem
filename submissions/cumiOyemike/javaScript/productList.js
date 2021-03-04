const productList = [
    {
      productName: 'Amethyst Diamond Earrings',
      imageUrl: 'images/img_6.jpg',
      productPrice: '$499.99'
    },
    {
      productName: 'Emerald Earrings',
      imageUrl: 'images/img_5.jpg',
      productPrice: '$409.99'
    },
    {
      productName: 'Pearl and Sapphire Necklace',
      imageUrl: 'images/img-7.jpg',
      productPrice: '$99.99'
    }
  ];
  
  productList.forEach(product => {
      console.log(`${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}`)
});