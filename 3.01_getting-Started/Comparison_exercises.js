var x = 20, y = 30;
// 1. Check whether x and y are equal.
console.log(x == y);

// 2. Check whether x and y are **not** equal.
console.log(x !== y);

// 3. Check whether x is greater than y.
console.log(x > y);

// 4. Check whether x is less than or equal to y.
console.log(x <= y);

// 5. Check whether y is greater than x.
console.log(y > x);

// 6. Declare another variable "z" and give it a value of 5. Multiply z and x and, check whether this result is greater than z added to y.
var z = 5;
var rst = z * x;
console.log(rst > z+y);

// 7. Subtract z from x and check whether this result is less than y divided by z.

var Subtract= x - z;
console.log(Subtract);
var divided = y / z;
console.log(divided);
console.log(Subtract < divided);

// 8. Check whether z, x and y are equal.
console.log(z == y && x == y);

// 9. Check whether the remainder of x divided by z and the remainder of y divided by z are equal.
var dividedxz = x / z;
console.log(dividedxz);
console.log((x % z) == (y % z));

// 10. Check whether z added to x is greater than y minus z. If it is not, find an operator which will give a result of true.

console.log((z + x) > (y - z));
// console.log((z + x) >= (y - z));
console.log(!((z + x) > (y - z)));


if (4 > 1) {
    console.log("ok");
}else{
    console.log(sorry);

}
