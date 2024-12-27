export function loadAbout() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    
    const heading = document.createElement("h1");
    heading.textContent = "About Us";

    const img = document.createElement("img");
    img.src = "https://images.pexels.com/photos/3009793/pexels-photo-3009793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    img.setAttribute("id", "canvas");
    const imgDescription = document.createElement("p");
    imgDescription.setAttribute("id", "canvas-info");
    imgDescription.textContent = "Photo by ELEVATE from Pexels";


    const aboutText = document.createElement("p");
    aboutText.setAttribute("id", "about-note")
    aboutText.textContent = "Continental Restaurant has been serving the finest dishes in the city for over 10 years. From humble beginnings to a beloved local institution, we pride ourselves on our dedication to quality, service, and innovation.";

    contentDiv.appendChild(heading);
    contentDiv.appendChild(img)
    contentDiv.appendChild(imgDescription);
    contentDiv.appendChild(aboutText);
}
