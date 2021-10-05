//Loop
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) return mid;

    if (val < arr[mid]) {
      end = mid - 1;
    }
    else {
      start = mid + 1;
    }
  }
  return -1;
}

let arr = [2,5,6,9,13,15,28,30];
console.log(binarySearch(arr, 15));




//Recursive
function binarySearch2(arr, val, start=0, end = arr.length-1) {
  const mid = Math.floor((start + end) / 2);

  if (val === arr[mid]) return mid;
  if (start >= end) return -1;

  if (val < arr[mid]) {
    return binarySearch(arr, val, start, mid-1);
  }
  else {
    return binarySearch(arr, val, mid + 1, end);
  }
}

console.log(binarySearch2(arr, 15));













