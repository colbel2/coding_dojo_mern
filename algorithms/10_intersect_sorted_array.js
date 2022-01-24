const intersect = (arr1 = [], arr2 = [], arr3 = []) => {
    let curr1 = 0;
    let curr2 = 0;
    let curr3 = 0;
    const res = [];
    while ((curr1 < arr1.length) && (curr2 < arr2.length) && (curr3 < arr3.length)) {
        if ((arr1[curr1] === arr2[curr2]) && (arr2[curr2] === arr3[curr3])) {
            res.push(arr1[curr1]);
            curr1++;
            curr2++;
            curr3++;
        }
        const max = Math.max(arr1[curr1], arr2[curr2], arr3[curr3]);
        if (arr1[curr1] < max) {
            curr1++;
        };
        if (arr2[curr2] < max) {
            curr2++;
        };
        if (arr3[curr3] < max) {
            curr3++;
        };
    };
    return res;
};

const arr1 = [4, 7, 8, 11, 13, 15, 17];
const arr2 = [1, 3, 4, 13, 18];
const arr3 = [2, 4, 7, 8, 9, 10, 13];
console.log(intersect(arr1, arr2, arr3));

// console.log(intersect([1,2,3,3,4,4,6], [2,3,4,4,6] )) //[2,3,4,4,6]

// /*
// [2,3,4,4,6]
// */

// console.log(intersect([1,2,3,3,4,4,6], [1,2,3,3,3,3,4,4,6] )) //[1,2,3,3,4,4,6]

// /*
// [1,2,3,3,4,4,6]
// */

const intersect = (arr1,arr2)=>{

}



//return back a new array containing only the numbers that both arrays have in common. if there are repeats in any, have the output only contain the smallest number of repeats 

console.log(intersect([1,2,3,3,4,4,6], [2,3,4,4,6] )) //[2,3,4,4,6]

/*
[2,3,4,4,6]
*/

console.log(intersect([1,2,3,3,4,4,6], [1,2,3,3,3,3,4,4,6] )) //[1,2,3,3,4,4,6]

/*
[1,2,3,3,4,4,6]
*/



const intersect = (arr1, arr2) => {
    let array = []
    let oneIndex = 0
    let twoIndex = 0
    while (oneIndex < arr1.length && twoIndex < arr2.length){
        if(arr1[oneIndex]==arr2[twoIndex]){
            array.push(arr1[oneIndex])
            oneIndex++
            twoIndex++
        }
        else if (arr1[oneIndex]< arr2[twoIndex]){
            oneIndex++
        }
        else{
            twoIndex++
        }
    }
    return array
}

let array1 = [1,2,3,3,4,5,6]
let array2 = [2,3,3,5,5,6]
console.log(intersect(array1, array2))




const intersect = (arr1,arr2)=>{
    let newArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        }
        else if (arr2[j] < arr1[i]) {
            j++
        }
        else if (arr1[i] == arr2[j]) {
            newArr.push(arr1[i]);
            i++;
            j++;
        }
    }
    return newArr;
}




const intersect = (arr1, arr2, oneIndex=0, twoIndex=0,array = []) => {
    if(oneIndex >= arr1.length || twoIndex >= arr2.length)return array
    if(arr1[oneIndex]==arr2[twoIndex]){
        array.push(arr1[oneIndex])
        oneIndex++
        twoIndex++
        return intersect(arr1, arr2, oneIndex, twoIndex, array)
    }
    if(arr1[oneIndex] < arr2[twoIndex]){
        oneIndex++
        return intersect(arr1, arr2, oneIndex, twoIndex, array)
    }
    else{
        twoIndex++
        return intersect(arr1, arr2, oneIndex, twoIndex, array)
    }
}

let array1 = [1,2,3,3,4,5,6]
let array2 = [2,3,3,5,5,6]
console.log(intersect(array1, array2))



const intersect = (arr1,arr2) => {
    let i=0;
    let j=0;
    let results = [];

    while (i<arr1.length && j<arr2.length) {
        if (arr1[i]<arr2[j]) {
            i++;
        }
        else if (arr1[i]>arr2[j]) {
            j++;
        }
        else {
            results.push(arr1[i]);
            j++;
            i++;
        }
    }
    return results;
}

let x=[1,2,3,3,4,4,5,6];
let y=[2,3,3,4,4,4,5];

console.log(intersect(x,y));



const instersectArrays = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let result = [];
    while (arr1[i] && arr2[j]) {
      // once either array is outside of array range we stop looping there will be nore more dupes
      if (arr1[i] < arr2[j]) {
        // which value
        i++;
      } else if (arr2[j] < arr1[i]) {
        j++;
      } else if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        i++;
        j++;
      }
    }
    return result;
  };



  const intersectRecursive = (arr1, arr2, arr1Runner = 0, arr2Runner = 0, output = []) => {
    if ((arr1.length == arr1Runner) || (arr2.length == arr2Runner)){  //if we have reached the end of either array
        return output;
    }
    else if (arr1[arr1Runner] == arr2[arr2Runner]) { //if the values at respective indices of each array are the equal to each other, push the value to result 
        output.push(arr1[arr1Runner]);
        return intersectRecursive(arr1, arr2, arr1Runner + 1, arr2Runner + 1, output);
    }
    else if (arr1[arr1Runner] > arr2[arr2Runner]){ //if first array has larger value
        return intersectRecursive(arr1, arr2, arr1Runner, arr2Runner + 1, output);
    }
    else { //if second array has larger value
        return intersectRecursive(arr1, arr2, arr1Runner + 1, arr2Runner, output);
    }
}

console.log(intersectRecursive([1, 3, 3, 4, 4, 6], [1, 4, 4, 4, 4, 6, 6, 6]));