// PART 1
/******************************** */
//Q1:
console.log(Number("123")+7);

//Another solution
console.log(+"123"+7); // The unary plus (+) converts the string to a number before addition
console.log("------------");
/******************************** */

//Q2:
let x = 0;
if(!(Boolean(x))){ 
    console.log('Invalid');
}
console.log("------------");
/******************************** */

//Q3:
for(let i=1 ;i<=10;++i){
    if(i%2===0) continue
    console.log(i)
}
console.log("------------");
/******************************** */

//Q4:
const arr = [1, 2, 3, 4, 5];
const evenArr = arr.filter((items)=> items%2===0);
console.log('Even numbers:', evenArr);
console.log("------------");
/******************************** */

//Q5:
let mergeArr = [...[1, 2, 3], ...[4, 5, 6]];
console.log("Merged array:", mergeArr);
console.log("------------");
/******************************** */

//Q6:
number = 2;
switch(number) {
    case 1 :
        console.log('Sunday');
        break;
    case 2 : 
        console.log('Monday');
        break;
    case 3 : 
        console.log('Tuesday');
        break;
    case 4 : 
        console.log('Wednesday');
        break;
    case 5 : 
        console.log('Thursday');
        break;
    case 6 : 
        console.log('Friday');
        break;
    case 7 : 
        console.log('Saturday');
        break;
    default :
        console.log('Invalid number');  
}
console.log("------------");
/******************************** */

//Q7:
const arrChar = ["a", "ab", "abc"];
const lengths = arrChar.map((items)=> items.length);
console.log(lengths);
console.log("------------");
/******************************** */

//Q8:
function isDivisible (num){
    if(num%3===0 && num%5===0){
       return "Divisible by both";
    }else if(num%5===0){
        return "Divisible by 5";
    }else if(num%3===0){
        return "Divisible by 3";
    }else{
        return "Not divisible by 3 or 5";
    }
}
console.log(isDivisible(15));
console.log("------------");

/******************************** */

//Q9:
const squareNum = (num)=> num*num; 
console.log(squareNum(5));
console.log("------------");
/******************************** */

//Q10:
function format({name, age}){ return `${name} is ${age} years old`; }

const person = {name: 'John', age: 25} 
console.log(format(person));
console.log("------------");
/******************************** */

//Q11:
function sum(...numbers){
    sum =0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}
console.log( sum(1, 2, 3, 4, 5) );
/******************************** */

//Q12:
function success(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("Success");
        },3000)
    })
}
success().then(message => console.log(message))
/******************************** */

//Q13:
let maxArr = [1, 3, 7, 2, 4] ;

function findMax(maxArr){
return maxArr.reduce((max, current) => 
    current > max ? current : max);
}
console.log(findMax(maxArr));
/******************************** */

//Q14:
function getkeys(obj){
    return Object.keys(obj);
}
const personK = {name:"John", age: 30};
console.log(getkeys(personK));
/******************************** */

//Q15:
const str = "The quick brown fox" ;
console.log(str.split(" "));
