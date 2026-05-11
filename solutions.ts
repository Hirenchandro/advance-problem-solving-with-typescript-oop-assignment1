//Problem 1:

const filterEvenNumbers=(numberArray:number[]):number[]=>{

  return  numberArray.filter((num:number)=>num%2===0)
}

const problem1Result = filterEvenNumbers([1,2,3,4,5,6,7,8,9,10])

console.log('Problem 1 Output: ',problem1Result);



//Problem 2:

function reverseString (text:string):string{

    let reverseText ="";

    for(let i =text.length -1; i>=0; i--){
        reverseText =reverseText + text[i];
    }

    return reverseText;
}


const problem2Result = reverseString('typescript')

console.log('Problem 2 Output: ',problem2Result)


//Problem 3:

function checkType (value: string | number):string {

    if(typeof value ==="number"){
return "Number"
    }
    else if(typeof value === "string"){
        return "String"
    }
    else return " "

}

const numberTypeInputResult = checkType(122546);
const stringTypeInputResult = checkType('Programming Hero');

console.log('Problem 3 Output: <>when the input is a number type is:',numberTypeInputResult, '<> when the input is a string type is:',stringTypeInputResult)


//Problem 4:

const user={
    id:1,
    name:'John Doe',
    age: 21
}

const getProperty =<X>(obj:X, key:keyof X)=>{
    return obj[key]
}

const getPropertyResult =getProperty(user,"name")

console.log("Problem 4 Output: ",getPropertyResult)


//Problem 5 :

interface Book{
    title:string;
    author: string;
    publishedYear:number;
 
}
interface BookandBookIsRead extends Book{
    isRead:boolean;
}

const toggleReadStatus =(bookObj:Book):BookandBookIsRead=>{
    return{
        ...bookObj, isRead:true
        
    }

}

const myBook ={
    title:"typescript Guide",
    author: "Jane Doe",
    publishedYear:2024
}

const problem5Result = toggleReadStatus(myBook);

console.log('Problem 5 Output: ',problem5Result)

// Problem 6:

class Person {
   name:string;
    age: number;

    constructor(name:string, age:number){
        this.name =name;
        this.age =age;
    }
}

class Student extends Person{
    grade:string

    constructor(name:string, age:number,grade:string){
        super(name,age);
        this.grade=grade;
    }
    getDetails(){
return  {
    name:this.name,
    age:this.age,
    grade:this.grade
}
 }
}

const student = new Student('Alice',20,'A')

const result6=student.getDetails()
console.log('Problem 6 OutPut:',result6)

// Problem 7:

function getIntersection (arrayNum1:number[],arrayNum2:number[]):number[]{

return arrayNum1.filter((num)=>arrayNum2.includes(num));
}


const problem7Result= getIntersection([1,2,3,4,5],[3,4,5,6,7])

console.log('Problem 7 OutPut: ',problem7Result)

//Thank you