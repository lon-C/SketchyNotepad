let opacity = 0;

function createGrid(squaresPerSide) {
    let flexBasis = 100 / squaresPerSide +"%";

    for(let i = 1; i <= squaresPerSide*squaresPerSide; i++) {
        const div = document.createElement('div');
        div.className = 'box';
        div.id = `${i}`;
        container.appendChild(div);
    };

    container.addEventListener("mouseover", (event) => {
    //Fixes the bug triggered when hovering over the parent container    
        if (event.target.classList.contains('box')){
            event.target.className = 'hovered-box';
            opacity += 1;
            roundedOpacity = opacity/10;
            if (roundedOpacity >= 1) {
                opacity = 0;
            };
            let red =  Math.ceil(Math.random() * (255 - 1) + 1);
            let green =  Math.ceil(Math.random() * (255 - 1) + 1);
            let blue =  Math.ceil(Math.random() * (255 - 1) + 1);
            event.target.style.backgroundColor = 
            `rgba(${red},${green},${blue},${roundedOpacity})`;
        };
    }); 

    //Boxes size is being updated after the number of boxes is chosen:
    document.querySelectorAll(".box").forEach(box => {
        box.style.flex = `0 0 ${flexBasis}`;
    });
}

const container = document.querySelector('.container');
createGrid(16);


function setSize() {
    container.innerHTML = "";
    gridSize = Math.ceil(Number(prompt('Please choose the size from 1 to 100')));
    
    if (isNaN(gridSize)) {
        window.alert('Please use numbers only from 1 to 100');
        createGrid(16);
    } else if (typeof gridSize === "number") {
        if (gridSize < 1 || gridSize > 100) {
            window.alert('The number must be between 1 and 100');
            createGrid(16);
        } else if (gridSize > 1 || gridSize <= 100) {
            createGrid(gridSize);
        }
    }
};