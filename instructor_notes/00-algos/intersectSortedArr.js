const instersect = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let result = [];
    //you can also say while(i<arr1.length && j<arr2.length)
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



//return back a new array containing only the numbers that both arrays have in common. if there are repeats in any, have the output only contain the smallest number of repeats 

console.log(intersect([1,2,3,3,4,4,6], [2,3,4,4,6] )) //[2,3,4,4,6]

/*
[2,3,4,4,6]
*/

console.log(intersect([1,2,3,3,4,4,6], [1,2,3,3,3,3,4,4,6] )) //[1,2,3,3,4,4,6]

/*
[1,2,3,3,4,4,6]
*/



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

/*

arr1 = [1, 3, 3, 4, 4, 6]   (len = 6)
arr2 = [1, 4, 4, 4, 4, 6, 6, 6]  (len = 8)
arr1Runner = 0
arr2Runner = 0
output = [1]

*/

//intersectRecursive(arr1, arr2, arr1Runner=1, arr2Runner=1, output = [1]  )
/*
arr1 = [1, 3, 3, 4, 4, 6]   (len = 6)
arr2 = [1, 4, 4, 4, 4, 6, 6, 6]  (len = 8)
arr1Runner = 1
arr2Runner = 1
output = [1]

*/

//intersectRecursive(arr1, arr2, arr1Runner=2, arr2Runner=1, output = [1]  )
/*
arr1 = [1, 3, 3, 4, 4, 6]   (len = 6)
arr2 = [1, 4, 4, 4, 4, 6, 6, 6]  (len = 8)
arr1Runner = 2
arr2Runner = 1
output = [1]

*/

//intersectRecursive(arr1, arr2, arr1Runner=3, arr2Runner=1, output = [1]  )
/*
arr1 = [1, 3, 3, 4, 4, 6]   (len = 6)
arr2 = [1, 4, 4, 4, 4, 6, 6, 6]  (len = 8)
arr1Runner = 3
arr2Runner = 1
output = [1,4]

*/

//intersectRecursive(arr1, arr2, arr1Runner=4, arr2Runner=2, output = [1,4]  )
/*
arr1 = [1, 3, 3, 4, 4, 6]   (len = 6)
arr2 = [1, 4, 4, 4, 4, 6, 6, 6]  (len = 8)
arr1Runner = 4
arr2Runner = 2
output = [1,4,4]

*/

//intersectRecursive(arr1, arr2, arr1Runner=5, arr2Runner=3, output = [1,4]  )
/*
arr1 = [1, 3, 3, 4, 4, 6]   (len = 6)
arr2 = [1, 4, 4, 4, 4, 6, 6, 6]  (len = 8)
arr1Runner = 4
arr2Runner = 2
output = [1,4,4]

*/