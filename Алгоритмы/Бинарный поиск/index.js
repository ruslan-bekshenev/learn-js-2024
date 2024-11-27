
const arr = [1,2,3,4,5,6,7,8,9,10]
const target = 7
let left = 0;
let right = arr.length - 1;
let result = -1;
let i = 0
while (left <= right) {
  let mediana = Math.floor((left + right) / 2)
  console.log(mediana)
  if (target > arr[mediana]) {
    left = mediana + 1
  }
  if (target < arr[mediana]) {
    right = mediana - 1
  }

  if (target === arr[mediana]) {
    result = mediana
    break
  }
}

console.log(result)