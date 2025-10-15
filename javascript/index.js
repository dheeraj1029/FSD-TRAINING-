// console.log("hello wold");
// var a=20;
// console.log("a",a);
// console.log(a);
// let a=20;

// var a=20;
// if(a>20){
//     var a=50;
//     console.log("a inside"+a);
// }else{
//     console.log("inside the statement");
// }
// console.log("a outside value"+a);

// function greetings(msg="Hii.."){
//     console.log("hello"+msg);
// }
// greetings("welcome to ABES");



// function expression
// const data=function greeting(msg){
//     return "hello"+msg;
// }
// const msg=greeting("Good morning:");
// console.log(msg);

//Arrow function

// const data=(msg)=>{
    // console.log("hiii.."+msg);
//     return "hii"+msg;
// }
// data("Good morning");

// const data=msg=>msg;
// const data1 = data("hello");
// console.log(data1);

//IIFE
// (()=>{
//     console.log("hii...");
// })();
// setInterval(()=>{console.log("hey...")},1000);

function javacompiler() {
    return "hey, java compiler calling";
}

function ccompiler() {
    return "hey, c compiler calling";
}

function selectlanguage(lang) {
    let data;
    if (lang === 'java') {
        data = javacompiler();
    } else if (lang === 'c') {
        data = ccompiler();
    } else {
        data = "No compiler available";
    }
    return data;
}