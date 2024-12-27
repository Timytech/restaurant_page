import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';

import "./template.html";
import "./styles.css";

loadHome();

// Get the navbar buttons
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

// Event listeners for button clicks
homeButton.addEventListener("click", () => {
    loadHome();
});

menuButton.addEventListener("click", () => {
    loadMenu();
});

aboutButton.addEventListener("click", () => {
    loadAbout();
});
