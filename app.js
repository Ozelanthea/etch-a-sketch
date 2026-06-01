const container = document.querySelector("#container");
const button = document.querySelector("#grid-button");


// const container = document.createElement("div");

function gridCreation(size) {

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row-container");

        for (let i = 0; i < size; i++) {
            const square = document.createElement("div");
            let hoverCount = 0;
            square.classList.add("square"); 
            square.style.width = `${960 / size}px`;
            square.style.height = `${960 / size}px`;

            square.addEventListener("mouseenter", () => {
                if (hoverCount < 10) {
                    hoverCount++
                }
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                square.style.opacity = hoverCount * 0.1;
            })

            square.addEventListener("mouseleave", () => {
                square.style.backgroundColor = "black";
            })

            row.appendChild(square);
        }
    
        container.appendChild(row);
    
    }

}

gridCreation(16);

button.addEventListener("click", (event) => {
    let playerInput = Number(prompt("How many grid squares do you want?"));
    while (playerInput > 100 || playerInput < 1) {
        alert("Please enter a number between 1 and 100!");
        playerInput = Number(prompt("How many grid squares do you want?"))
    }
    container.innerHTML = "";

    // if (playerInput > 100) {
    //     alert("You can only choose from 1 to 100!");
    // }

    gridCreation(playerInput);
})

