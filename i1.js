// console.log("hello world from external file");

// minimum lines required for javascript(shortest program) i of 0 lines 
// JS is a synchronus programming language
// console.log(a);
// HOISTING
// var a=10;
// var is used to declare variable, here we don't need to tell data type , it is a global scope keyword.
// console.log(a);
// if we give console.log(a) before var , it assign undefined to it.

// console.log(b); 
// this gives error - refernce error .
// TDZ Temporal dead zone
//  BLOCK SCOPE
// let b=20;
// console.log(b);
// b=40;
// console.log(b);

// console.log(c);
// this also gives same error as let . difference btw const and let is 
// if we try to update value , let does it but const give error.

// const c=30;
// console.log(c);
// c=40;
// console.log(c);


// var a=30;
// console.log(a);
// let b=40;
// console.log(b);

// {
//     var a="hello";
//     console.log(a);
//     let b="hi";
//     console.log(b);

// }
// console.log(a);
// console.log(b);


// console.log("Print");
// console.log("Print");
// console.log("Print");
// console.log("Print");

// a();
// console.log(a);


//1. Name function
// function functionname(){
//     function body
// }
// function declaration
// function a(){
//     console.log("Print");
//     console.log("Print");
//     console.log("Print");
//     console.log("Print");
// }
// function invocation
// a();
// a();
// if we give a() before function , then also show value as a() stores full fuction body.

//  b();
// 2. Function Exprssion
// var b=function(){
//     console.log("function expression");
// };
// b();
// if we also call b() before function , it gives TYPEerror. but if we use let or const , then it give reference error.

// 3.Arrow function same as function expression , but difference in syntax
// var c=()=>{
//     console.log("function");
// };
// c();

// 4.Callback function
// it doesn't have its own identity 
// 5.IIFE (immediately invoked function expression)
// syntax is - ()();
// (function (){
//     console.log("callback function and iife");
// })();
// (()=> {
//     console.log("callback and iife");
// })();


// function sumoftwo(){
//     var a=10;
//     var b=20;
//     console.log("Sum of two values are", a+b);
// }
// sumoftwo();
//to make dynamic function , we use parameter and arguments.
// function sumoftwo(parameter1,parameter2){
//     console.log("sum = ",parameter1 + parameter2);
// }
// sumoftwo(30,40);
// sumoftwo(40,40);
// to give defaut vales , so that error not come on no value -
// function sumoftwo(parameter1=20,parameter2=30){
//     console.log("sum = ",parameter1 + parameter2);
//     console.log("value of p1",parameter1);
//      console.log("value of p2",parameter2);
// }
// sumoftwo();

// let arr = [1,2,3,4,5,6,7,8];
// console.log(arr);
// console.log(arr[7]);


// const arr=[1,2,3,4,5,6,7,8];
// console.log(arr);
// console.log(arr[7]);
// arr.push(9);
// console.log(arr);
// arr.push("addffe");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.unshift("dfss");
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.shift();
// console.log(arr);

// let obj = {
//     name: "sid",
//     contact: 4345,
//     email: "sid@gmail.com",
//     info:{
//         hobbies:["swimming","music"],
//         address: "dawdwa",

//     },
// };
// console.log(obj);
// console.log(obj.email);
// console.log(obj.info);
// console.log(obj.info.hobbies[0]);

//  const arr=[1,2,3,4,5,7];

// // declare variable with some initial value;condition;inc/dec
// for (let i=0;i<arr.length;i++){
//     console.log("index - ",i,"value is - ",arr[i]);
//     // arr[i] = arr[i] * 2;   -- it doesnt give us new array , it updates our old array
// }
// console.log(arr);
// // DIFFERENCE IN MAP AND FOR IS THAT (MAP) GIVES NEW ARRAY , BUT (FOR) DOESNT
// const newArr= arr.map((currentValue,Index)=>{
//     console.log("On index ",Index,"VALUE ",currentValue);
//     return currentValue * 2;

// })
// console.log(arr);
// console.log(newArr);
// // filter also returns new array
// const evenArr = arr.filter((currentValue,Index) =>{
//     return currentValue % 2 ==1;
// })
// console.log(evenArr);
// console.log(arr);

// const sumOfAll =arr.reduce((accumulator,currentValue,Index)=>{
//     console.log(accumulator,currentValue,Index);
//     return accumulator + currentValue;
// },0);
// console.log(sumOfAll);

// console.log(2==2);
// console.log(2=="2");  //true as double equal only checks value 
// console.log(2==="2") //false as triple equal also checks data type
// console.log(arr == [1,2,3,4,5,7]); // false as it checks address , THIS IS ALSO REASON WHY CHANGING VALUE DOESNT GIVE ERROR IN CONST ARR , AS WE ARE CHANGING VALUE NOT ADDRESS...
// console.log(20 - "2"); // 18 as we are doing type casting unless there is any alphabet
// console.log(20 - "2a"); // not a number , as there is alphabet.



//1. TAG SELECTOR
// let h1=document.getElementsByTagName("h1");
// console.log(h1[1]);
// it returns an array of type html collection...

// 2. CLASS SELECTOR- for selecting multiple different elements
// let b=document.getElementsByClassName("b");
// console.log(b[2]);
// it returns an array of type html collection...

// 3. ID SELECTOR - 
// RETURNS FIRST AND SINGLE ELEMENT

// let a=document.getElementById("a");
// console.log(a);

// 4. QUERY SELECTOR  - WE CAN USE ALL THREE SELECTOR INSIDE IT , BUT GET ONLY SINGLE VALUE
// let data=document.querySelector("#a");
// console.log(data);

// 5. QUERY SELECTOR ALL --- HERE WE CAN GET MULTIPLE ELEMENTS
// let myData=document.querySelectorAll(".b");
// NODE LIST ARRAY
// console.log(myData[1]);

// READ /WRITE
// console.log(myData[1].textContent);
// myData[1].textContent = "Hello world from JS";

// STYLING -

// let myNode=document.querySelectorAll("h1");
// myNode[1].style.color = "red";
// myNode[1].style.backgroundColor = "yellow";

// ADD/REMOVE/TOGGLE
// myNode[1].classList.add("d");
// myNode[1].classList.remove("e");
// myNode[1].classList.remove("d");

// let button=document.querySelector("button");
// button.addEventListener("click",()=>{
//   console.log("button clicked");
//   myNode[1].classList.toggle("e");
// }); 


let input=document.querySelector("input");
let btn=document.querySelector(".f");
let tr=document.querySelector("tr");

btn.addEventListener("click",()=>{
  if (input.value != ""){
    let tr=document.createElement("td");
  td.textContent = input.value;
  tr.appendChild(td);
  input.value ="";
  }
});
