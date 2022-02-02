/*
given an unsorted array, create a function that implement insertion sort to sort the array. You are not allowed to create a new array and you have to modify the original input aray

https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
*/


function insertionSort(arr){
    //view each index in the given array comparing the index to the numbers left of it
    //to determine if the number to the left is lesser value. if lesser value move index left until false
    for(let i = 1; i < arr.length; i++){
        let j = i;
        while(arr[j] < arr[j - 1]){
            // let temp = arr[j];
            // arr[j] = arr[j -1];
            // arr[j -1] = temp;
            [arr[j],arr[j -1]]=[arr[j-1],arr[j]]
            j--;
        }
    }
    return arr
}



console.log(insertionSort([5,7,2,9,1,4]))