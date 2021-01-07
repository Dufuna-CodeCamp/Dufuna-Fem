//Javascript Task 1
var diff = 123 -7;

for(i = 1; i <= diff; i++){
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("Software Developer");
        continue;
    }       
    if(i % 3 == 0) {
        console.log("Software");
        continue;
    }      
    if(i % 5 == 0) {
        console.log("Developer")
        continue;
    }
    console.log(i);
}

//Javascript Task 2
var productList = [];
var add = (name, image, price) => {
    productList.push({"productName": name, "imageUrl": image, "productPrice": price})
} 

add("Michachi Vacuum Flask", "flask.jpg", "30,000");
add("Kendoz Chef Kettle", "kettle.jpg", "56,000");
add("Crown Star Pot", "pot.jpg", "78,000");

productList.forEach((product) => 
    console.log(`${product.productName} with ${product.imageUrl} is sold for ${String.fromCharCode(0x20a6)}${product.productPrice}\n`)
)