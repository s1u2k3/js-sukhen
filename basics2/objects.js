//singletone
// Object.create

// object literals

const mySum = Symbol("mykey")

const jsUser = {
    name : "sukhen",
    age : 20,
    [mySum] : "mykey",
    email : "sukhen@gmail.com",
    location: "barasat",
    isLogged : true,
    lastLogin : ["mon", "tue"]
}

// access

console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(jsUser[mySum]);
console.log(typeof(mySum));

// value lock
jsUser.email = "mygmail@gmail.com"
//Object.freeze(jsUser)
console.log(jsUser);

jsUser.greeting = function(){
    console.log(`welcome js user ${this.name}`);
    
}
console.log(jsUser.greeting());


// constructor object

//const user = new Object()

const user1 ={}

user1.name = "sukhen"
user1.id = "123@abc"
console.log(user1);

const regUser = {
    email : "sukhen@gmail.com",
    fullname: {
        username:{
            firstname: "sukhen",
            lastname: "bera"
        }
    }
}

// console.log(regUser.fullname);
// console.log(regUser.fullname.username.firstname);


const obj1 ={
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1,...obj2}

console.log(obj3);


const userdata = [
    {
        id : 1,
        email : "sukhen@gmail.com"
    },
    {
      id : 2,
        email : "rukhen@gmail.com"  
    },
    {
      id : 3,
        email : "mukhen@gmail.com"  
    },
]

//console.log(userdata[1].id);

console.log(Object.keys(jsUser));
console.log(Object.values(jsUser));
console.log(Object.entries(jsUser));



console.log(jsUser.hasOwnProperty('name'));
