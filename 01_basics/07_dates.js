//Dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate);

//let myCreatedDate=new Date(2025, 0, 23)
//console.log(myCreatedDate.toDateString());
//let myCreatedDate=new Date("2025-01-20")
//let myCreatedDate=new Date("01-14-2023")
//let myCreatedDate=new Date(2025, 0, 23, 5, 3, 6)
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleDateString('default',{
   weekday: "long", 
})
