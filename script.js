
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
        }
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
    createGrid(prompt('Please choose the size from 0 to 100'));
};