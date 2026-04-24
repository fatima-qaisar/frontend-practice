let btn3=document.querySelector("#btn3");
btn3.onclick=() => {
    console.log("Button 3 was clicked.");
    let a = 25;
    a++;
    console.log(a); //26
};

let div=document.querySelector("div");
div.onmouseover=(evt) => {
    console.log("Mouse is over the div.");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

let btn4=document.querySelector("#btn4");
btn4.onclick=(e) => {
    console.log("Button 4 was clicked.");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};

let btn5=document.querySelector("#btn5");
btn5.addEventListener("click", (evt) => {
    console.log("Button 5 was clicked - Handler 1.");
    console.log(evt);
    console.log(evt.type);
});
btn5.addEventListener("click", () => {
    console.log("Button 5 was clicked - Handler 2.");  //Event doesnt get overwritten with eventListener
});
const handler3 = () => {
    console.log("Button 5 was clicked - Handler 3.");  
}
btn5.addEventListener("click", handler3);
btn5.addEventListener("click", () => {
    console.log("Button 5 was clicked - Handler 4.");  
});

btn5.removeEventListener("click", handler3); //to remove event listener must have reference to the function in form of variable

let themeBtn = document.querySelector("#theme");
let currentTheme = "light";
/*themeBtn.addEventListener("click", () => {
    console.log("You are changing the theme.");
    if (currentTheme === "light") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        currentTheme = "dark";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        currentTheme = "light";
    }
    console.log("Current theme is:", currentTheme);
    
});   //this can be implemented using CSS classes as well
*/

themeBtn.addEventListener("click", () => {
    console.log("You are changing the theme.");
    if (currentTheme === "light") {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        currentTheme = "dark";
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        currentTheme = "light";
    }
    console.log("Current theme is:", currentTheme);
    
});

let textCoLorChanger = document.querySelector("#box");
textCoLorChanger.addEventListener("mouseover", () => {
    textCoLorChanger.style.color = "red";
});
textCoLorChanger.addEventListener("mouseout", () => {
    textCoLorChanger.style.color = "blue";
});

