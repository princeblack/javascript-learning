// Foreach
 var names =['Steve','John','Stella','Matilda','John','Goran'];
  var nums = [5,4,3,2,1,2,3,4,5,6,7,8];

  names.forEach(function(element){
      console.log(element);
      
  });
  console.log('::::::::::::::::::::::::::::::');

  function printOutElements(el,i,arr) {
      console.log('my current element : ' , el);
      console.log('my current index : ' , i);
      console.log('my current array : ' , arr);
  };
  
  names.forEach(printOutElements)
  console.log('::::::::::::::::::::::::::::::');
names.forEach((element) =>{
    console.log(element);
    
});
console.log('::::::::::::::::::::::::::::::');

//  REDUCE
 var num = [5,4,3,2,1,2,3,4,5,6,7,8];

 function addeverting(acc,val) {
     console.log(acc + val);
     return acc + val;
 }
 console.log(addeverting);

 num.reduce(addeverting)

 console.log('::::::::::::::::::::::::::::::');

//  Map 
const doubleNums = num.map((el) => el * 2);
console.log(nums);
console.log(doubleNums);
console.log('::::::::::::::::::::::::::::::');

function concatName(el) {
    return el + ' ' +el;
}
const doubleNames = names.map(concatName)
console.log(doubleNames);
console.log('::::::::::::::::::::::::::::::');


function addYay(el) {
    let firstLetter = el.slice(0,1);
    let rest = el.slice(1,el.length)
    return rest + firstLetter + 'YAY'
}
const pigLation = names.map(addYay)
console.log(pigLation);
console.log('::::::::::::::::::::::::::::::');

//  filter

const capitals = names.filter((el)=>{
    if (el[0] === 'S') {
        return el
    }
})
console.log(capitals);
console.log('::::::::::::::::::::::::::::::');

// SORT
const arr1 =[4,2,1,3,10];
arr1.sort(function (a,b) {    
    return a - b
});

console.log(arr1);

const arr2= ['hello',4,2,6,5,'A','c','b','D']
arr2.sort();
console.log(arr2);

let arr3=[
    {
        name: 'I am twentu',
        age: 20
    },
    {
        name: 'I am twenty six',
        age: 26
    },
    {
        name: 'I am eight',
        age: 8
    },
    {
        name: 'I am hundred an 8',
        age: 108
    },
    {
        name: 'I am four',
        age: 4
    }
];

arr3.sort(function (a,b) {
    return a.age + b.age;
})

console.log(arr3);
