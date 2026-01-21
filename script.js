
const container = document.getElementById("container");
const initialSquareSize = (container.clientWidth / 20);

for(let i=0; i<20; i++){
    for(let j=0; j<20; j++){
        let count = 0;

        const initialBox = document.createElement("div");
        initialBox.setAttribute("class", "box");
        initialBox.style.width = `${initialSquareSize}px`;
        initialBox.style.height = `${initialSquareSize}px`;        

        initialBox.addEventListener("mouseenter", () => {
            
            if(count<5){
                count++;
                switch(count){
                    case 1:
                        initialBox.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                        break;
                    case 2:
                        initialBox.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
                        break;
                    case 3:
                        initialBox.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                        break;
                    case 4:
                        initialBox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                        break;
                    case 5:
                        initialBox.style.backgroundColor = "rgba(0, 0, 0, 1)";
                        break;
                }
            }
            
        });

        container.appendChild(initialBox);
    }
}

const resizeGridButton = document.getElementById("resizeGrid")
let resizeGrid = resizeGridButton.addEventListener("click", () => {
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

    for(let i=0; i<boxesPerRow; i++){
        
        for(let j=0; j<boxesPerRow; j++){

            let count=0;
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            box.style.width = `${squareSize}px`;
            box.style.height = `${squareSize}px`;

            box.addEventListener("mouseenter", () => {
                if(count<5){
                    count++;
                    switch(count){
                        case 1:
                            box.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                            break;
                        case 2:
                            box.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
                            break;
                        case 3:
                            box.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                            break;
                        case 4:
                            box.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                            break;
                        case 5:
                            box.style.backgroundColor = "rgba(0, 0, 0, 1)";
                            break;
                    }
                }
                
            });

            container.appendChild(box);
        }
    }
}