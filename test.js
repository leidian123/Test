var box = {
    name:'Lee',
    age:100
};

// var box =  [100,'Lee',true];

// var box = [
//     {
//         "title":"a",
//         "num":1
//     },
//     {
//         "title":"b",
//         "num":2
//     },
//     {
//         "title":"c",
//         "num":3
//     }
// ]

console.log(box)

var json = JSON.stringify(box)
console.log(json)

var box = JSON.parse(json)
console.log(box)

var box = [{name:'a',age:1,height:177},{name:'b',age:2,height:188}]
var json = JSON.stringify(box,['name','age'],4)
console.log(json)