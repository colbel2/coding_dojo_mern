/*
given an unsorted array, create a function that implement bubble sort to sort the array. You are not allowed to create a new array and you have to modify the original input aray
https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
*/


function bubbleSort(arr) {
    //your code here

    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length - 1 - j; i++) {
            //compare the value at current index with the value at the next index
            if (arr[i] > arr[i + 1]) { //if the value at current index is greater than value at next index, then its out of order and we need to swap
                //one way to swap (more lines of code)
                // temp = arr[i]
                // arr[i] = arr[i+1]
                // arr[i+1] = temp


                //destructure swap
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]] //this is an ES6 syntax feature
            }

        }
    }
    return arr
}



console.log(bubbleSort([5, 7, 2, 9, 1, 4]))