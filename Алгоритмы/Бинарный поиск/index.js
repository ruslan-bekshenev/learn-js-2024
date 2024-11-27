
const array = [1,2,3,4,5,6,7,8,9,10]
const element = 5

let resultIndex;
let index = 0;
let length = array.length
let half = Math.round(array.length / 2)
for (let i = index; i < length - half; i++) {
  if (element > array[half - 1]) {
    console.log('1')
    index = length - half
  } else if (element < array[half - 1]) {
    index = half - 1
  }
  if (array[index - 1] === element) {
    resultIndex = index - 1
    break;
  }
  half = Math.round(half / 2)
}

console.log(resultIndex)