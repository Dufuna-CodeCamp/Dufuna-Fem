var productList = [
	{productName: "Red Tennis Shoes", imageUrl: "../html/images/shoes2.jpg", productPrice: "=N=10,000.00"},
	{productName: "Black Office Shoes", imageUrl: "../html/images/shoes3.jpg" , productPrice: "=N=25,000.00"},
	{productName: "Red High-heeled Shoes", imageUrl: "../html/images/shoes.jpg" , productPrice: "=N=18,000.00"}
]

for (let i in productList) {	
console.log((productList[i].productName) + (" with url of") + (productList[i].imageUrl) + (" is sold for ") + (productList[i].productPrice + (" only..."))); 
}