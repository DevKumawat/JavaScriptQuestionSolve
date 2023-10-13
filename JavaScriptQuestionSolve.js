const members = [{ name: 'Vijay Gupta', age: 20 },
{ name: 'Yash Jangid', age: 40 },
{ name: 'Firoz Khan', age: 41 },
{ name: 'Amrit Srivastava', age: 17 },
{ name: 'Chandraprakash Sharma'  },
{ name: 'Swpril Ahuja', age: 45 },
{ name: 'Yogesh Khatri', age: 51 }]; 

//get Entries where age is between 41-60


let result = members.filter((a) => {
    // console.log(a);
    return a.age != undefined && a.age > 41 && a.age < 60

})
console.log(result);


// GEt array of first names of everyone

let firstname = members.map((a)=>{
   let first = a.name.split(" ");
   return first[0]
})

console.log(firstname);

// Make everyones last names in uppercase

let toUpper = members.map((a)=>{
    let lastname = a.name.split(' ');
    lastname[1] = lastname[1].toUpperCase();
a.name = lastname.join(' ');
    return a
    
})

console.log(toUpper);

// Get average age
let count = 0;
function average(arr){
    let x = 0
    members.forEach((a)=>{
        if(a.age !== undefined){
        x += a.age ;
        count++;
    }
        
    });
    return x/count
}

console.log(average(members));

// Get person with maximum age

let max = 0;
let oldestMen  ;
members.forEach((a)=>{
    if(a.age !== undefined && a.age > max){
        max = a.age
        oldestMen = a
    }

})

console.log(oldestMen);

// Adding a new member at index 2

members.splice(2,0,{name : "Dev" , age: 22},)

console.log(members);

//Create a new array instance adding a new member at index 0,    and keeping existing afterwards

//method = 1

members.unshift({name:"Dev",age:22})
console.log(members);

//method = 2
const newMember = { name: 'John Doe', age: 30 };

const updatedMembers = [newMember, ...members];

console.log(updatedMembers);

//Divide persons in three groups

let ageGroups ={young :[], old:[], noage:[]}
 members.forEach((a)=>{
    if(a.age<35){
   ageGroups.young.push(a)
    }
    else if(a.age>35){
        ageGroups.old.push(a)
    }
    else{
        ageGroups.noage.push(a)
    }
})
console.log(ageGroups);

// extract first and second element using destructing 

let[firstMember , secondMember] = members;

console.log(firstMember);
console.log(firstMember.age);
console.log(secondMember);
console.log(secondMember.age);

//10. Extract properties of object using destructuring 
let {name , age} = firstMember;
console.log(name);
console.log(age);

//Rename extracted property of object while destructing 
let {name:fullName , age:years} = firstMember;
console.log(fullName);
console.log(years);

//Destructure any property of an object and use spread operator to get remaining properties in an object 
const student = {
    Name : "Devendra",
    age : 22,
    class : 12,
    city : "jaipur"
}

const {Name, ...rest} = student;
console.log(Name);
console.log(rest);

//Create a new object by copying using spread operator, override     one of the properties to assign a new value in the same step

const updatedMember = { ...members[2], age: 42 };

console.log(updatedMember);