export function loadMenu() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    
    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    // Sample dishes with images and descriptions
    const dishes = [
        {
          name: "Spaghetti Carbonara",
          description: "Rich, creamy pasta with crispy pancetta.",
          image: "https://images.pexels.com/photos/4518833/pexels-photo-4518833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Grilled Salmon",
          description: "Fresh salmon grilled to perfection.",
          image: "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Paella",
          description: "A flavorful Spanish rice dish with seafood.",
          image: "https://images.pexels.com/photos/12419160/pexels-photo-12419160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Ratatouille",
          description: "A hearty French vegetable stew.",
          image: "https://images.pexels.com/photos/5190684/pexels-photo-5190684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Tiramisu",
          description: "Classic Italian coffee-flavored dessert.",
          image: "https://images.pexels.com/photos/703116/pexels-photo-703116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Jollof Rice",
          description: "Popular African party dish.",
          image: "https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          name: "Waakye",
          description: "Classic Ghanaian dish of cooked rice and beans.",
          image: "https://t3.ftcdn.net/jpg/03/10/60/90/240_F_310609095_b9ceW30NNerFvZIMjsvRsz0TMjcrD5Lf.jpg"
        },
        {
          name: "Fufu",
          description: "Special West African cuisine.",
          image: "https://media.istockphoto.com/id/1280669372/es/foto/sopa-nigeriana-egusi-servida-con-%C3%B1ame-machacido.jpg?s=612x612&w=0&k=20&c=cdQQRQcoLDH_G-7UM-zEg3yYgmFjtdN72FxcnKwYNXk="
        },

      ];

    // Create a container for dishes
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("class", "menu-container");

    dishes.forEach(dish => {
        const dishDiv = document.createElement("div");
        dishDiv.setAttribute("class", "dish");

        const dishImg = document.createElement("img");
        dishImg.src = dish.image;
        dishImg.setAttribute("alt", dish.name);

        const dishName = document.createElement("h4");
        dishName.textContent = dish.name;

        const dishDescription = document.createElement("p");
        dishDescription.textContent = dish.description;

        dishDiv.appendChild(dishImg);
        dishDiv.appendChild(dishName);
        dishDiv.appendChild(dishDescription);

        menuContainer.appendChild(dishDiv);
    });

    contentDiv.appendChild(heading);
    contentDiv.appendChild(menuContainer);
}
