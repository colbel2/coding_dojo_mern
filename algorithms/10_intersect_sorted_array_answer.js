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