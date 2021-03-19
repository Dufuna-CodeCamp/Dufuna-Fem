let a = 0;
let b= 7;
let c= 123;
let d= (c-b);

for(a=0; a<d;) {
d+=1;
if ((d % 3 === 0) && (d % 5 === 0)) {
    console.log("Software Developer"); 
} else if (d % 3 === 0)  {
    console.log("Software");
} else if (d % 5 === 0) {
    console.log("Developer");
} else{
    console.log(a);
}
};