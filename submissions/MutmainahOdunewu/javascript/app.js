// conditional loops
let x = 123 - 7;
for (let i = 1; i <= x; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Software Developer");
  } else if (i % 3 === 0) {
    console.log("Softwear");
  } else if (i % 5 === 0) {
    console.log("Developer");
  } else {
    console.log(i);
  }
}
