//const tinderUser=new Object();
const tinderUser ={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser); 
const regularuser={
    email:"amit@gmail.com",
    fullname:{
        userfullname:{
             firstname:"hitesh",
             lastname:"choudhary"
        }
    }
}

console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1, obj2)

const obj3={...obj1, ...obj2}
//console.log(obj3);

const users=[
    {
        id: 1,
        email:"amit@2001@gmail.com"
    },
    {
        id: 1,
        email:"amit@2001@gmail.com" 
    },
    {
        id: 1,
        email:"amit@2001@gmail.com" 
    },
    {
        id: 1,
        email:"amit@2001@gmail.com" 
    }
]

console.log(users[1].email)
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Amit"
}

//course.courseInstructor

const {courseInstructor:instructor}=course

console.log(instructor);
// {
//     "name":"Amit",    
//    coursename:"js in hindi",
//      price:"free"
// }

[
    {},
    {},
    {}
]