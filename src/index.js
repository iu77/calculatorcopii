document.getElementById("app").innerHTML = ``;

var x, y, z;
x = 3;
y = 6;
z = x + y;
function sum() {
  console.info("Adunam x  cu y ");
  for (; x < y; x++) {
    console.info("Daca x>y incrementam pe x de y ori pana x=y");
  }
  for (; x > y; y++) {
    console.info("daca x<y incrementam pe y de x ori pana cand x=y");
  }
  console.info("rezultat x+y=z");
  sum(z);
}
console.info("rezultatul adunarii este " + z);
console.info( "daca  x  este   " + x );
console.info( "si daca y este  " +y); 
console.info("atunci x+y este " +z);
console.info("x+y este x + (1+1+1+1+1....+1)de y ori");
