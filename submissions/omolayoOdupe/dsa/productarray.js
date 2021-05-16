let product = [
    'Canon Kit Lens 15-55mm',
    'Nikon 3100',
    'Samsung NX300',
    'Canon EOS 80D',
    'Sony Alpha A7s',
    'Sony NX 300M',
    'Panasonic Lumix GH4',
    'Panasonic Lumix DC-GH5',
    'Xiaomi Y1-M1',
    'Fujifilm X-A10',
    'Canon DSLR Rebel T7',
    'Canon DSLR EOS 2000D',
    'Sony A7ii',
    'Sony A6500 Mirrorless',
    'Sony Alpha A7r III',
    'Sony NEX-3N',
    'Nikon V1',
    'Sony NEX-F3',
    'Sony NEX-5',
    'Olympus PEN E-PL6'
];

let product_price = [
    '500.00',
    '200.00',
    '750.00',
    '2,000.00',
    '1,600.00',
    '300.00',
    '800.00',
    '5,000.00',
    '500.00',
    '600.00',
    '1,200.00',
    '1,200.00',
    '2,000.00',
    '2,000.00',
    '5,000.00',
    '750.00',
    '200.00',
    '800.00',
    '900.00',
    '750.00'
];

function newPrice(product) {
    for (i=0; i < product.length; i++) {

      if (product[i].length % 2 == 0) {
                product_price[i] = (product_price[i] * 2);
              console.log("The price of " + product[i] + " is " + product_price[i]);

          } else {
                product_price[i] = product_price[i] / 2;
                console.log("The price of " + product[i] + " is " + product_price[i]);
          }
      }
      return product_price;
  }

  newPrice(product);