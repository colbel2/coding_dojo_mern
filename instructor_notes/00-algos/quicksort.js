/*
QUICK SORT-

1. First build out the partition function - this is the helper function that we will need in order to do quick sort

Partition is when you are given an unsorted array and you pick any value in that array, and rearrange that array so that that value you picked (pivot value) has everything that to the left of it is less than it and everything to the right of it is greater than it
    -for simplicity, pick the first element in the array (at index 0) as our "pivot"
    -hint: count how many values are less than the pivot value
        -anotha hint: any time you see a value that is less than the pivot, increment some counter and also swap the element at index i with the counter position
    -Lastly, the partition function should return the index where the pivot value ended up at


let x = [1, 3, 2, 0, 6, 8, 12, 9]
                               i
pivotidx= 0->1->2->3->4


2. Quick sort will implement the partition function recursively
*/


const partition = (arr, start = 0, end = arr.length-1)=>{
    let pivot = arr[start];
    let pivotIndex = start;
    //goal is to iterate throuh the array and keep track of how many values are less than our pivot value. 
        //Each time we find a value that is less than pivot value, we increment our counter (pivotIndex variable)
        //Each time we find a value that is less than pivot value, we also want to swap the value at the current index with the pivot index-> the purpose of this is to jumble up the values that are less than pivot value together
    for(let i = start+1; i<= end; i++){
        if(pivot>arr[i]){
            pivotIndex++
            [arr[i],arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }

    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    // console.log(arr)
    return pivotIndex;

}

const quickSort = (arr, left = 0, right = arr.length-1)=>{
    // console.log({left, right, arr})
    if(left < right){
        let pivotIndex = partition(arr,left,right)
        quickSort(arr=arr, left, pivotIndex-1) //left side 
        quickSort(arr=arr, pivotIndex+1, right) //right side
    }
    return arr;
}




/*

arr= [2,0,3,1,5,7,9,9]
i=1->2->3->4->5->6->7
pivot = 5
pivotIndex = 0->1->2->3->4



*/

console.log(quickSort([5,0,9,7,3,1,9,2]))
console.log(quickSort([8,7,6,5,4,3,2,1,0]))

// [2,0,3,1,5,7,9,9]
// [1,0,2,3,5,7,9,9]
