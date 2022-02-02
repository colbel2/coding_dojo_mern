//https://visualgo.net/en/heap


class MaximumHeap{
    constructor(){
        this.values = [null];

    }

    insert(value){
        //push the value to the end of our array
        this.values.push(value);

        //calculate the current index
        let currentIdx = this.values.length-1;

        //calculate which index the parent is at based on the current index
        let parentIdx = Math.floor(currentIdx/2);

        //if the parent is less than the current value, then swap
        while(currentIdx >1 && this.values[parentIdx]< this.values[currentIdx]){
            [this.values[parentIdx], this.values[currentIdx]]=[this.values[currentIdx], this.values[parentIdx]];

            //current index is now where parent used to be
            currentIdx = parentIdx;

            //calculate the new parent index
            parentIdx = Math.floor(currentIdx/2);
        }

        return this;
    }

    extractMax(){
        //swap the max value (idx 1) wih the last value (this.values.length-1)


        //pop the array to remove the last (save this in a variable to return later at the end)
        //poppedval = this.values.pop()
        //calculate the left child index (current idx *2)
        //calculate the right child index (current (idx *2) +1)

        //while the value at current index is less than either (or) the left child value or right child value
            //swap with the larger child

            //recalculate where the current index is now at
            //recalculate the children for the current index
            //repeat

        //return the popped value at the end
    }


}


let heap1 = new MaximumHeap()

heap1.insert(7).insert(5).insert(3).insert(-1).insert(6).insert(100)

console.log(heap1.values)


