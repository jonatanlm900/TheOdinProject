// a <p> with red text that says “Hey I’m red!”
const p_red = document.createElement("p");

p_red.textContent = "Hey I'm Red"; 
p_red.style.color = "red";

document.body.appendChild(p_red); 

// an <h3> with blue text that says “I’m a blue h3!”
const h3_blue = document.createElement("h3");

h3_blue.textContent = "I'm a blue h3"; 
h3_blue.style.color = "blue";

document.body.appendChild(h3_blue);

// a <div> with a black border and pink background color with the following elements inside of it:
const div = document.createElement("div");

div.style.border = "solid";
div.style.borderColor = "black";
div.style.backgroundColor = "pink";

document.body.appendChild(div);

//     another <h1> that says “I’m in a div”
const h1_inside = document.createElement("h1");

h1_inside.textContent = "I'm in a div";

div.appendChild(h1_inside);
//     a <p> that says “ME TOO!”
const p_inside = document.createElement("p");

p_inside.textContent = "ME TOO!";

div.appendChild(p_inside);
//     Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
