
var items = "";

var productList = [
	{
		productName: "Sexy-Full-Lace-Pant",
		imageUrl: "../html/img/pd1.jpg",
		productPrice: 1000.00
	},
	
	{
		productName: "Helmed-Lace-Pant",
		imageUrl: "../html/img/pd2.jpg",
		productPrice: 500.00
	},
	
	{
		productName: "Lace Lingeries",
		imageUrl: "../html/img/pd2.jpg",
		productPrice: 300.00
	}
];	

for (let i = 0; i < productList.length; i++) {
  items = productList[i];
  console.log(items.productName, items.imageUrl + " is sold for " + items.productPrice);
}
