// Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
// Input :
// {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }
// Output: 6

function sumEvenNumbers(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      if (obj[key] % 2 === 0) {
        sum += obj[key];
      }
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      sum += sumEvenNumbers(obj[key]);
    }
  }

  return sum;
}

var input = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};

console.log(sumEvenNumbers(input));


module.exports = sumEvenNumbers;