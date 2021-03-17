let products = ['Canon Kit Lens 15-55mm',
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

let product_price = [500.00,
    200.00,
    750.00,
    2000.00,
    1600.00,
    300.00,
    800.00,
    5000.00,
    500.00,
    600.00,
    1200.00,
    1200.00,
    2000.00,
    2000.00,
    5000.00,
    750.00,
    200.00,
    800.00,
    900.00,
    750.00
];

    /*A function calculateprice to check the length of the 
    products while affecting the price of product item*/
let calculatePrice = (products, product_price) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].length % 2 === 0) {
            product_price[i] *= 2;
        } else {
            product_price[i] /= 2;
        }
        console.log("The price of " + products[i] + " is " + product_price[i]);
    }
}

calculatePrice(products, product_price)

