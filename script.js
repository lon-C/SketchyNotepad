const container = document.querySelector('.container');

const squaresPerSide = 20;

const flexBasis = 100 / squaresPerSide +"%";

for(let i = 1; i <= squaresPerSide*squaresPerSide; i++) {
    const div = document.createElement('div');
    div.className = 'box';
    div.id = `${i}`;
    div.textContent = `${i}`;
    container.appendChild(div);
}

container.addEventListener("mouseover", (event) => {
    event.target.className = 'hovered-box';
});

//Boxes size is being updated after the number of boxes is chosen:
document.querySelectorAll(".box").forEach(box => {
    box.style.flex = `0 0 ${flexBasis}`;
});

