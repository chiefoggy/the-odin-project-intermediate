//iterative method
function fibs(num){
    if (num < 1) return [];
    if (num === 1) return [0]
    let array = [0, 1];
    let new_num = 0;
    for (let i = 2; i < num; i++){
        new_num = array[i-2] + array[i-1]
        array.push(new_num)
    }
    return array;
}
//test
console.log('iterative solution: ')
console.log(fibs(8))

//recursive method
function fibsRec(num){
    if (num < 1) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];
    const a = fibsRec(num-1);
    const b = fibsRec(num-2);
    return a.concat([a[a.length-1] + b[b.length-1]]);
}
console.log('recursive solution: ')
console.log(fibsRec(8));