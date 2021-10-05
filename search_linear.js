function linearSearch(arr, val) {
  for (i=0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

let arr = [1,3,4,5,6,7,67,43,87,45,5];
console.log(linearSearch(arr, 43));