const container = document.querySelector('.container');

for(let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.className = 'box';
    div.textContent = `Box ${i}`;
    container.appendChild(div);
}