
// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const headerElement = document.querySelector(".article__header");
headerElement.innerText = "Welcome to the Goat blog!";

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
document.querySelectorAll(".article__header");
headerElement.classList.add("article__header__important");

const allHeaders = document.querySelectorAll(".article__header");
for(let i=0; i<allHeaders.length; i++){
    allHeaders[i].classList.add("article__header__important");
}

// Obtain a reference to the element with a class of dashed and remove it.
const dashed = document.querySelector(".dashed");
dashed.classList.remove("dashed");

// Obtain a reference to the element with a class of article_footer and add the class of goldenrod to it.

const footerina = document.querySelector(".article__footer");
footerina.classList.add("goldenrod");