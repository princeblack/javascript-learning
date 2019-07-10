var x = 0;
var z = 0;
labelAnnuleBoucle: while (true) {
  console.log("Boucle externe : " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Boucle interne : " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelAnnuleBoucle;
    } else if (z === 10) {
      break;
    }
  }
}