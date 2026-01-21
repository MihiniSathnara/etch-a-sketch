let box;
const container = document.getElementById("container");
const squareSize = (container.clientWidth / 20);

for(let i=0; i<20; i++){
    for(let j=0; j<20; j++){
        box = document.createElement("div");
        box.setAttribute("class", "box");
        box.style.width = `${squareSize}px`;
        box.style.height = `${squareSize}px`;
        container.appendChild(box);
    }
}
