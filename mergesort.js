function combine(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while (i <= arr1.length && j <= arr2.length){
        if (arr1[i] > arr2[j]){
            result.push(arr2[j]);
            j += 1
        }
        else{
            result.push(arr1[i]);
            i += 1
        }
    }
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));

}

function mergeSort(arr){
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid+1, arr.length));
    
}