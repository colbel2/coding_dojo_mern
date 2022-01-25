/*
Union Sorted Arrays
Efficiently combine two already-sorted arrays into a new sorted array containing the
multiset union. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].
*/


function union(arr1,arr2){

}

console.log(union([1,2,2,2,7],[2,2,6,6,7] )) //[1,2,2,2,6,6,7]


function union(arr1,arr2){
    let array = [] // created an array and set to empty
    let oneIndex = 0 // created a variable and set to 0
    let twoIndex = 0 // created a 2nd variable and set to 0
    while(oneIndex < arr1.length && twoIndex < arr2.length){ // while loop that runs while oneIndex is less than arr1 length and twoIndex is less than arr2 length
        if(arr1[oneIndex]==arr2[twoIndex]){ //if statement inside of while loop, checks if arr1[] is equal to arr2[]
            array.push(arr1[oneIndex]) //push the number inside of arr1[oneIndex] to array which was the empty array declared
            oneIndex++ //add one number to ondeIndex
            twoIndex++ // add one number to one Index
        }
        if (arr1[oneIndex]< arr2[twoIndex] && arr1[oneIndex] != undefined){  // second if statement inside while loop. if BOTH (&&) arr1[oneIndex] is less than arr2[twoIndex] and arr1[oneIndex] is not equal to undefined
            array.push(arr1[oneIndex]) //push oneIndex value inside the array we defined at beggining
            oneIndex++ // add one number to oneIndex
        }
        if (arr1[oneIndex] > arr2[twoIndex] && arr1[oneIndex] != undefined){ // third if statement inside the while loop. if BOTH (&&)  arr1[oneIndex] is greater than arr2[twoIndex] and arr1[oneIndex] is not equal to undefined
            array.push(arr2[twoIndex]) // push twoIndex value inside the array we defined at beggining
            twoIndex++ // add one number to twoIndex
        }
    }
    return array //once the while loop is no longer true the array will be complete and we can return it to see what is in it
}

console.log(union([1,2,2,2,7],[2,2,6,6,7] )) //[1,2,2,2,6,6,7] console.log our function with 2 arrays inside and see if they work!


function unionRecursive(arr1, arr2, array=[], oneIndex=0, twoIndex=0){ // creating a union function that is recursive. declare 
    if (oneIndex >= arr1.length || twoIndex >= arr2.length) return array // if statement that checks if oneIndex is greater than or equal to arr1 length or if twoIndex is greater than or equal to arr2 length. then returns array. 
    if(arr1[oneIndex]== arr2[twoIndex]){ // if statement that checks if arr1 is equal to arr2
        array.push(arr1[oneIndex]) // pushes array1 vallue to array[]
        return unionRecursive(arr1, arr2, array, oneIndex + 1, twoIndex + 1) // runs the function with new vaules??? 
    }
    if (arr1[oneIndex] < arr2[twoIndex] && arr1 != undefined){ //if statement that checks if BOTH arr1 is less than arr2 and arr1 is not undefined
        array.push(arr1[oneIndex]) // pushes array1 to array[]
        return unionRecursive(arr1, arr2, array, oneIndex+1, twoIndex) // runs function with new values??
    }
    if (arr1[oneIndex] > arr2[twoIndex] && arr1 != undefined){ // if statement that checks if BOTH arr1 is less than arr2 and arr1 is not undefined
        array.push(arr2[twoIndex]) // pushes array2 to array[]
        return unionRecursive(arr1, arr2, array, oneIndex, twoIndex+1) // ruuns function with new value??
    }
}
console.log(unionRecursive([1,2,2,2,7],[2,2,6,6,7] )) //[1,2,2,2,6,6,7] logs funtion with 2 array values to print results

function unionRecursive(arr1,arr2,i=arr1.length-1,j=arr2.length-1,result=[]){
    if(arr1.length==0 && arr2.length==0){
        return result;
    }
    if(arr1[i]>arr2[j]){
        result.unshift(arr1[i]);
        // console.log(result)
        arr1.pop()
        return unionRecursive(arr1,arr2,i-1,j,result);
    }
    else if(arr1[i]<arr2[j]){
        result.unshift(arr2[j]);
        // console.log(result)
        arr2.pop()
        return unionRecursive(arr1,arr2,i,j-1,result);
    }
    else if(arr1[i]===arr2[j]){
        result.unshift(arr1[i]);
        // console.log(result)
        arr1.pop()
        arr2.pop()
        return unionRecursive(arr1,arr2,i-1,j-1,result)
    }
    if(arr2.length){
        result.unshift(arr2[j])
        arr2.pop()
        return unionRecursive(arr1,arr2,i,j-1,result)
    }
    if(arr1.length){
        result.unshift(arr1[i])
        arr1.pop()
        return unionRecursive(arr1,arr2,i-1,j,result);
    }
}
console.log(unionRecursive([1, 2, 2, 2, 7], [2, 2, 6, 6, 7, 7, 7])) //[1,2,2,2,6,6,7,7,7]



