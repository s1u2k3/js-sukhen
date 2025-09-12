const arr = [ 1, 2, 3, 4, 5, 6, 7, 8]

for (const num of arr) {
    console.log(num)
    
}

const str = "hello"
for (const ch of str) {
    console.log(`Each character is ${ch}`);
}

const map = new Map(); // this is a collection of unique values

map.set( 1 , "India")
map.set( 2, "Aus")
map.set( 3,"Eng")

console.log(map);

for (const [key,value] of map) {
    console.log( key,value);
}


// but it will not iterable in case of object

const my = {
    1 : "me",
    2 : "all"
}

for (const key in my) {
    console.log( my[key]);
    
    
}

const nums = [ "js", "java", "c"];

for (const key in nums) {
    console.log( nums[key]); 
}

// for (const key in map) {
// console.log(map[key]);      // does not work forin loop in case of map
    
// }

//foreach

const value = [ "java", "c", "javascript"]

// value.forEach( function (item) {
//     console.log( item);
    
// })

// value.forEach( (item) => {
//     console.log(item);
    
// })

// // it could be possible befofre function declaration

// function printMe(item){
//     console.log(item);
    
// }

// value.forEach(printMe)

// // forEach can access data,index,fullarray

// value.forEach(( item,index,value) =>{
//     console.log(item,index,value);

// })

const myCoding = [
    {
        1 : "java",
        2 : "c"
    },
    {
        1 : "favarouite",
        2 : "Myresume"
    }
]
myCoding.forEach( (item) => {
    console.log(item);
    
})

myCoding.forEach( (item) => {
    console.log(item[1]);
    
})

