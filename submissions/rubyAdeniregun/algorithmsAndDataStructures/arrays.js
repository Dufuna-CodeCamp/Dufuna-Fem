var products = [
    'CanonKitLens15-55mm', 
    'Nikon3100',
    'SamsungNX300',
    'CanonEOS80D',
    'SonyAlphaA7s',
    'SonyNX300M',
    'PanasonicLumixGH4',
    'PanasonicLumixDC-GH5',
    'XiaomiY1-M1'
];

var product_price = [
    '500.00', 
    '200.00',
    '750.00',
    '2000.00',
    '1600.00',
    '300.00',
    '800.00',
    '5000.00',
    '500.00'
];

/*create a function called calculate price to check the length of the
products names*/

function calculatePrice(products) {
  for (i=0; i < products.length; i++) {
      
    if (products[i].length % 2 == 0) {
          product_price[i] = (product_price[i] * 2);
            console.log("The price of " + products[i] + " is " + product_price[i]);
        
        } else {
            product_price[i] = product_price[i] / 2;
              console.log("The price of " + products[i] + " is " + product_price[i]);
        }
    }
    return product_price;
}

calculatePrice(products);