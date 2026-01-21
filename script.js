
const container = document.getElementById("container");
const initialSquareSize = (container.clientWidth / 20);

for(let i=0; i<20; i++){
    for(let j=0; j<20; j++){
        const initialBox = document.createElement("div");
        initialBox.setAttribute("class", "box");
        initialBox.style.width = `${initialSquareSize}px`;
        initialBox.style.height = `${initialSquareSize}px`;

        initialBox.addEventListener("mouseenter", () => {
            initialBox.style.backgroundColor = "black";
        });

        container.appendChild(initialBox);
    }
}

let resizeGridButton = document.addEventListener("click", () => {
    let boxesPerRow = parseInt(prompt("Enter number of boxes per row (1-100):"));
    
    if(boxesPerRow>100 || boxesPerRow<1 || boxesPerRow===null){
        alert("please enter a number between 1-100");
        return;
    }

    
    const squareSize = (container.clientWidth / boxesPerRow);

    generateGrid(boxesPerRow, squareSize);  
});

function generateGrid(boxesPerRow, squareSize){
    container.innerHTML = "";
    console.log(boxesPerRow);
    console.log(squareSize);

    for(let i=0; i<boxesPerRow; i++){
        
        for(let j=0; j<boxesPerRow; j++){
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            box.style.width = `${squareSize}px`;
            box.style.height = `${squareSize}px`;

            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = "black";
            });

            container.appendChild(box);
        }
    }
}