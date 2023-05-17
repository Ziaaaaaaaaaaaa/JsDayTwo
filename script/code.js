let subject = ["Python", "C++", "VB.Net", "Javascript", "Assembly"]
console.log(subject.pop());
let x = Math.floor(subjects.lenth / 2)
if (x % 2 == 0){
    console.log(subjects[x]);
} else {
    console.log(subjects.slice(x - 1, x + 1));
}
function findElement(arr,index){
    return index < arr.length ? arr[index] : "Index out of range"
}
console.log(findElement(subjects, 2));

// console.log(subject)

// let middle = subject[Math.round((subject.length - 1) / 2)];
// console.log(middle);

// console.log(subject.at(-1));
// let x = Math.floor(subject.lenth/2);
// console.log(subject[x]);

// let x = Math.floor(subject.lenth/2);
// if(x % 2 == 0 ){
//     console.log(subject [x]);
// }else {
//     console.log(subject.slice());
// }   

