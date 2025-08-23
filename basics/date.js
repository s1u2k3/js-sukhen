let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toTimeString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleTimeString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());

let newDate = new Date(2025, 0 , 24, 11, 11, 48)
console.log(newDate.toLocaleString());

let othDate = new Date("01-24-2025")
console.log(newDate.toLocaleString());

let time = Date.now()
console.log(time);

console.log(othDate.getTime())

console.log(Math.floor(time/1000));

let date = new Date();
console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getMonth()+1);

//`${newDate.getDay()}`

newDate.toLocaleString('default',{
    weekday: "long"
})

