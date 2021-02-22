let submitBuy = document.getElementById("buyme");
    number = document.getElementById("number");
    price = document.getElementById("price");
    shippingcost = document.getElementById("shippingcost");
    totalcost = document.getElementById("totalcost");
    submit = document.getElementById("submit");
    price.value =1500;
    price.readOnly = true;
    shippingcost.readOnly = true;
    totalcost.readOnly = true;
function required(field, e){
        e.preventDefault();
        if (field.value === ""){
        field.nextElementSibling.innerHTML ="This field is required";
        e.preventDefault();
        return false;
        }else{
            field.nextElementSibling.innerHTML= " ";
            return true;
        }
}
function quantityValidation(event){
        event.preventDefault(); 
        if(number.value === ""){
              number.nextElementSibling.innerHTML = "Please enter your quantity";
              event.preventDefault();
              return false;
        }else if(number.value < 1 || number.value === typeof float){
               number.nextElementSibling.innerHTML = "Please enter a valid quantity";
               submit.disabled = true;
               submit.style.backgroundColor = "#b1b1b1";
               submit.style.color = "#ffffff";
               event.preventDefault();
               return false;
         }else{
               number.nextElementSibling.innerHTML =" ";
               return true;
       }
}
number.oninput = function(e) {
        const a = quantityValidation(e);
        if(!a) return
        let p = number.value * price.value;
        price.value = p;
        console.log(typeof(p));
        console.log(price.value)
        if (p < 1000){
            shippingcost.value =100;
        }else if(p > 1000 && p < 20000){
            shippingcost.value = (15*100)/p;
        }else if(p > 20000 && p < 100000){
            shippingcost.value =  (20*100)/p;
        }else{
            shippingcost.value = 25000;
        }
        totalcost.value = parseInt(p)  + parseInt(shippingcost.value);  
}  
function formValidate(e){
        quantityValidation(e);
        return true;
}
submitBuy.addEventListener("submit", formValidate);
    
