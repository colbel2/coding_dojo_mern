function insertionSort(inputArr) {
    let a = inputArr.length;
    for (let i = 1; i < a; i++) {
        let current = inputArr[i];
        let j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = current;
    }
    return inputArr;
}

console.log(insertionSort([5, 7, 2, 9, 1, 4]))