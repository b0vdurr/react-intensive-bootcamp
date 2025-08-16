// Select the first element that matches
const header = document.querySelector("h1");

// Select all matches (returns NodeList)
const items = document.querySelectorAll("li");

// Select by ID
const button = document.getElementById("myBtn");

// Select by class
const inputs = document.getElementsByClassName("input-class");

// Create new element
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";

// Add into the page
document.body.appendChild(newDiv);

// Change existing element
const title = document.querySelector("h1");
title.textContent = "Updated Title";
title.style.color = "red";

//Attach an event listener
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", () => {
    console.log("Button clicked!");
});

//For submit example:
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload
    console.log("Form submitted!");
});

