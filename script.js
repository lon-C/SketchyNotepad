const container = document.querySelector('.container');

for(let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.className = 'box';
    div.id = `${i}`;
    container.appendChild(div);
}

container.addEventListener("mouseover", (event) => {
    event.target.className = 'hovered-box';
});

