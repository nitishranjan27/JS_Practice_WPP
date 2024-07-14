// Write a JavaScript program to find the number appearing most frequently in a given array of integers.


function findMostFrequently(arr){
    let frequent = {};
    let maxcount = 0;
    for(let i=0;i<arr.length;i++){
        let number = arr[i];

        if(frequent[number]){
            frequent[number]++;
        } else {
            frequent[number] = 1;
        }

        if(frequent[number] > maxcount){
            maxcount = number;
        }

    }
    return maxcount;
}


let arr = [1, 3, 2, 3, 4, 1, 3, 2, 1, 1, 3];
console.log(findMostFrequently(arr)); //3

let arr1 = [1, 2, 3, 2, 3, 4, 1, 4, 4];
console.log(findMostFrequently(arr1)); //4
