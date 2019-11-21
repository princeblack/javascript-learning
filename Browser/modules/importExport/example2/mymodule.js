function addTextToBody(text) {
    const div = document.createElement('div')
    div.textContent= text;
    document.body.appendChild(div);
}

function sayHello(name) {
    console.log(`Hello ${name}`);
    
}
export {addTextToBody};
export default sayHello;