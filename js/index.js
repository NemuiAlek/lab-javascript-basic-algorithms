// Iteration 1: Names and Input
//1.1
let hacker1 = "Magala";
//1,2
  console.log(`the driver's name is ${hacker1}`);
//1.3
  let hacker2 ="Shagaru";
//1.4
  console.log(`the navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
//2.1
if (!!hacker1.length && !!hacker2.length){
  if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has           ${hacker1.length} characters`)
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } else if (hacker1.length = hacker2.length) {
    console.log(`wow, you both have equally long names, ${hacker1.length} characters!`)
}} else {
    console.log(`You know that names are strings, right?`)
} ;

// Iteration 3: Loops
//3.1
 let n = '';
  for (let i= 0;i<hacker1.length; i++)
  n += `${hacker1.charAt(i).toLocaleUpperCase()} `;
  console.log(`${n}`);
//3.2
  n = '';
  for (let i=hacker2.length;i>=0;i--)
  n += `${hacker2.charAt(i)}`;
  console.log(`${n}`);
//3.3
let myArray = [hacker1,hacker2];
myArray.sort((a,b) => a.localeCompare(b));

if (!!hacker1.length && !!hacker2.length){
  if (hacker1===hacker2){
    console.log(`What?! You both have the same name?`)
  } else if(myArray[0] === hacker1){
    console.log(`The driver's name goes first`)
  } else if(myArray[0] === hacker2) {
    console.log(`Yo, the navigator goes first definitely`)
  } else if (hacker1===hacker2){
    console.log(`What?! You both have the same name?`)
  }} else {
    console.log(`You know that names are strings, right?`)
} ;
