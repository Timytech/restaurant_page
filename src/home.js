export function loadHome() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    
    const heading = document.createElement("h1");
    heading.textContent = "Continental Restaurant";

    const img = document.createElement("img");
    img.src = "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    img.setAttribute("id", "canvas");
    const imgDescription = document.createElement("p");
    imgDescription.setAttribute("id", "canvas-info");
    imgDescription.textContent = "Photo by Rachel Claire from Pexels";

    const welcomeNote = document.createElement("p");
    welcomeNote.setAttribute("id", "welcome-note");
    welcomeNote.textContent = "Welcome to Continental Restaurant! We serve exquisite dishes crafted with the finest ingredients. Enjoy an exceptional dining experience here.";
    
    contentDiv.appendChild(heading);
    contentDiv.appendChild(img);
    contentDiv.appendChild(imgDescription);
    contentDiv.appendChild(welcomeNote);
}
