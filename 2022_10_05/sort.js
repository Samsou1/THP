const fs = require('fs');
const fileName = process.argv[2];

let list;
try {
    const data = fs.readFileSync(fileName, 'utf8');
    list = data.split(' ').map(element => parseFloat(element));
} catch (error) {
    console.error(error.message);
    return;
}

let comparisonQuickSort;
let comparisonMerge;


// console.log(bubbleSort([...list]));
// console.log();
// console.log('$'.repeat(50));
// console.log();
// console.log(insertionSort([...list]));
// console.log();
// console.log('$'.repeat(50));
// console.log();
// console.log(selectionSort([...list]));
// console.log();
// console.log('$'.repeat(50));
// console.log();
// console.log(quickSort([...list]));
// console.log();
// console.log('$'.repeat(50));
// console.log();
console.log(mergeSort([...list]));

// let timeNow = Date.now();
// bubbleSort([...list]);
// let timeToResolveBubbleSort = Date.now() - timeNow;
// console.log("Bubble Sort : (" + timeToResolveBubbleSort, "ms)");

// timeNow = Date.now();
// insertionSort([...list]);
// let timeToResolveInsertionSort = Date.now() - timeNow;
// console.log("Insertion Sort : (" + timeToResolveInsertionSort, "ms)");

// timeNow = Date.now();
// selectionSort([...list]);
// let timeToResolveSelectionSort = Date.now() - timeNow;
// console.log("Selection Sort : (" + timeToResolveSelectionSort, "ms)");

// timeNow = Date.now();
// quickSort([...list]);
// let timeToResolveQuickSort = Date.now() - timeNow;
// console.log("Quick Sort : (" + timeToResolveQuickSort, "ms)");

// timeNow = Date.now();
// mergeSort([...list]);
// let timeToResolveMergeSort = Date.now() - timeNow;
// console.log("Merge Sort : (" + timeToResolveMergeSort, "ms)");

function bubbleSort(ary){
    let comparison = 0;
    for(let i = 0; i < ary.length; i++){
        for(let j = 0 ; j < ary.length - i - 1 ; j++){
            if(ary[j]>ary[j+1]){
                [ary[j], ary[j+1]] = [ary[j+1], ary[j]];
            }
            comparison++;
        }
    }
    return `Bubble sort: ${comparison} comparisons ` + ary;
}

function insertionSort(ary){
    let comparison = 0;
    for(let i = 1; i < ary.length; i++){
        let currentValue = ary[i];
        let j = i - 1;
        while ((j >= 0) && (currentValue < ary[j])) {
            ary[j+1] = ary[j];
            j--;
            comparison++;
        }
        ary[j+1] = currentValue;
    }
    return `Insertion sort: ${comparison} comparisons ` + ary;
}

function selectionSort(ary){
    let comparison = 0;
    for(let i = 0; i < ary.length; i++){
        let min = ary[i];
        for(let j = i + 1; j < ary.length; j++){
            if(ary[j] < min){
                min = ary[j];
            }
            comparison++;
        }
        ary.splice(i, 0, min);
        // Here we look for the value min to destroy it but we have to be careful not to delete the first value we just copied.
        // Hence the i + 1 stating that we are only looking for the value after index i + 1
        ary.splice(ary.indexOf(min, i + 1), 1)
    }
    return `Selection sort: ${comparison} comparisons ` + ary;
}

function quickSort(ary){
    comparisonQuickSort = 0;
    let result = qs(ary);
    return `Quick sort: ${comparisonQuickSort} comparisons ` + result;
}

function qs(ary){
    if(ary.length <= 1){
        return ary;
    }
    let pivot = ary.pop();
    let greaterThanPivot = [];
    let smallerThanPivot = [];
    ary.map(function(element){
        if(element < pivot){
            smallerThanPivot.push(element);
        }else{
            greaterThanPivot.push(element);
        }
        comparisonQuickSort++;
    })
    return (qs(smallerThanPivot).concat([pivot], qs(greaterThanPivot)));
}


function mergeSort(ary){
  comparisonMerge = 0;
  ary = ms(ary);
  return `Merge sort: ${comparisonMerge} comparisons ` + ary;
}

function ms(ary){
  length = ary.length;
  if(length < 2 ){
    return ary;
  }
  let middle = parseInt(length / 2);
  let leftAry = ary.splice(0, middle);
  
  return merge(ms(leftAry), ms(ary));
}

function merge(left, right){
  let ary = [];
  while(left.length > 0 && right.length > 0){
    if(left[0] >= right[0]){
      ary.push(right.shift());
    }else{
      ary.push(left.shift());
    }
    comparisonMerge++;
  }
  if(left.length > 0){
    ary = ary.concat(left);
  }else{
    ary = ary.concat(right);
  }
  return ary;
}
