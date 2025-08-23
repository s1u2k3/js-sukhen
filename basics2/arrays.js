const arr = [0, 1, 2, 3, 4, 5, 6]
const arr1 =["sukhen", "bera"]
const arr2 = new Array(1, 2, 3, 4, 5, 6)

console.log(arr[1]);

arr.push(10)
arr.push(8)
arr.pop()

arr.unshift(7)
arr.shift()

console.log(arr);



console.log(arr.includes(9));

console.log(arr.indexOf(9));

let newarr = arr.join()

console.log(newarr);
console.log(typeof(newarr));


// slice, splice

let arr4 = [0,1,2,3,4,5,6,7,8]

console.log(" A", arr4);

let myar = arr4.slice(0,3)
console.log(myar)

console.log(arr4);
console.log(arr4);



let myarr = arr4.splice(0,4)
console.log("B", myarr)
console.log("c", arr4);

console.log(arr4);







