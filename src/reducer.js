let n = 19;
// Output: true

let list = new Set();
let value = 0;

while (n !== 1) {
  n = [n].join().split("");
  for (let i = 0; i < n.length; i++) {
    let sq = n[i] * n[i];
    // console.log(sq);
    value += sq;
    list.add(value);
    if (value !== 1) {
      n = value;
    }
  }

  // console.log(value)

  //   console.log(value)
  //   list.add(value);

  //   if (list.has(value)) {
  //     console.log(false)
  //   }
  //   value = 0
}
console.log(list);
