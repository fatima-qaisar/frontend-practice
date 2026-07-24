// Trying to simulate how React represents a UI element(jo function mai html return kia hai) internally.
// (This is a simplified version, not the actual React object.)
function customRender(element, container) {
    /*
    // Create an HTML element based on the type of the reactElement
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children; //u can take innerText too here
    domElement.setAttribute('href', element.props.href);
    domElement.setAttribute('target', element.props.target);
    container.appendChild(domElement);
    */
   const domElement = document.createElement(element.type);
   domElement.innerHTML = element.children;
   for (const prop in element.props) {
    if (prop === 'children') { //agar prop mai hee children dediya ho, yahan we havent kept children in props so itisnnt needed
        continue; // skip children prop as we already set innerHTML
    }
       domElement.setAttribute(prop, element.props[prop]);
   }
   container.appendChild(domElement);
}

const reactElement = {
    type: 'a',  // type of the element. can be div or span or any other html element
    props: {    // what are the properties of this element. like href, target, className etc. props is an object(key:value pairs) which contains all the properties of the element.
        href: 'https://www.google.com',
        target: '_blank',  //In HTML, the target attribute specifies where to open the linked document or resource. It's most commonly used with the <a> (anchor) tag, but it can also be used with <form>.
    },
    children: 'Click me to go to Google'  // children is the content inside the element. It can be text or other elements.
}

const mainContainer = document.querySelector('#root');

//we neeed a method to add the above element in root
customRender(reactElement, mainContainer); //inject reactElement in mainContainer
