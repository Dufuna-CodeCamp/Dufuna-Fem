//const post = document.querySelectorAll(".post");
//console.log(post[0]);
//work2.innerText = "Hello world";
//post[0].innerHTML = "water";

//for (let i=0; i<post.length; i++){
// //    post[i].style.color = "";
// //post.forEach(Element => {
// //    Element.style.color= "turquoise";
// //});

// //const secondsss = document.getElementById("secondss");
// //console.dir(secondsss);

// //let container = document.querySelector(".container");
// //newSpan = document.createElement("span");
// //.innerHTML = "Spantastic";
// //newSpan.style.color = "green";

// //console.log(container);
// //container.appendChild(newSpan);




  


 let quantity = document.getElementById("quantity"),
      price = document.getElementById("price"),
      shippingCost = document.getElementById("shippingCost"),
      quantityRegex = /^[1-9]+[0-9]*$/;
      totalCost = document.getElementById("totalCost"),
      button = document.getElementById("buy-now");

 calculatePrice = (event) => {
     if(!quantity.value.match(quantityRegex) ){
         quantity.nextElementSibling.innerHTML = 'Please enter a valid quantity';
         button.disabled = true;
         button.classList.add('disable')
        button.style.backgroundColor = "grey";
         event.preventDefault();
         return false;
     } else {
         price.innerHTML = 5000 * quantity.value;
         quantity.nextElementSibling.innerHTML = '';
         button.disabled = false;
         button.classList.remove('disable')
        button.style.backgroundColor = "orange";
         return true;
     }
 }

 addShippingCost = () => {
     if (price.innerHTML < 1000) {
         shippingCost.innerHTML = 100;
     } else if(price.innerHTML >= 1000 && price.innerHTML <= 20000) {
         shippingCost.innerHTML = 0.15 * price.innerHTML;
     } else if(price.innerHTML > 20000 && price.innerHTML <= 100000) {
         shippingCost.innerHTML = 0.2 * price.innerHTML;
    } else {
        shippingCost.innerHTML = 25000;
     }
     totalCost.innerHTML = Number(shippingCost.innerHTML) + Number(price.innerHTML);
 }

 InputValidation = (e) => {
     calculatePrice(e);
     addShippingCost();
     return true;
 }

 quantity.addEventListener('input', InputValidation);

// const work2 = document.querySelector(".work2")
// console.dir(work2);