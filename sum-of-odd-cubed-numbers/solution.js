'use strict';

function cubeOdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") return;
    if (arr[i]%2) sum += Math.pow(arr[i], 3);
  }
  return sum;
}
