// Iteration 1: Names and Input
//1.1
let hacker1 = "Simon-Garfunkle";
//1.2
console.log("The driver's name is " + hacker1);
//1.3
let hacker2 = "Laura-Ashley";
//1.4
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
//2.1
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(hacker1.length < hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
}else{
    let equal = hacker1.length === hacker2.length ? hacker1.length : false;
    console.log(`Wow, you both have equally long names, ${equal} characters!`);
}


// Iteration 3: Loops
//3.1
let hacker1Altered = "";
for(let i=0; i<hacker1.length; i++){
    hacker1Altered += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Altered);
//3.2
let hacker2Altered = "";
for(let j=hacker2.length-1; j>=0; j--){
    hacker2Altered += hacker2[j];
}
console.log(hacker2Altered);
//3.3
// To sort the strings we can use the inbuilt sort() function, but to compare it they need to be part of the same structure.
// The function sorts the string in lexicographical order by default (alphabetical also making comparison using the whole length of the string
// with length).
let comparison = [hacker1, hacker2].sort();
console.log(comparison);


