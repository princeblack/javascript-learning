//Let try to understand NOde Vs Element
console.log(document instanceof Node);
console.log(document instanceof Element);
console.log(document.firstChild);
console.log(document.firstChild  instanceof Node);
console.log(document.firstChild  instanceof Element);
console.log(document.firstChild.nextSibling);
console.log(Element.prototype.__proto__ == Node.prototype);
console.log(Document.prototype.__proto__ == Node.prototype);

const myList= document.getElementsByTagName('ul')[0]; 
let firstListItem = myList.firstChild;
console.log(firstListItem);

let x = document.getElementById("second").previousElementSibling;
console.log(x);
document.getElementById('demo').innerHTML = x.innerHTML;

let y = document.getElementById('second').previousSibling;
console.log(y);

let z=document.getElementsByTagName('ul')[0];
console.log(z);

let childList = document.getElementsByTagName('ul')[0]
console.log(childList.childNodes);

 firstListItem = document.querySelector('li');
console.log(firstListItem);

const list = firstListItem.parentElement;
let allItem = list.children;
const thirdItem = allItem[2];
console.log(thirdItem);

let pTag = document.getElementsByTagName('p')[0];
console.log(pTag)

const closestTag = pTag.previousElementSibling.closest('ul').
console.log(closestTag);





