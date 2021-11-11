function pivot(arr, start=0, end=arr.length+1) {

  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {                                    //if the array has more than 1 element
    let pivotIndex = pivot(arr, left, right);  
    quickSort(arr, left, pivotIndex-1);                   //left
    quickSort(arr, pivotIndex+1, right);                 //right
  }
  return arr;  
}

var result = quickSort([4,6,9,1,2,5,3]);
console.log(result);