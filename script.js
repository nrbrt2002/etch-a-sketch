const sizeOfGrids = 16;
const container = document.querySelector('.container');

const createGrid = (amtOfGrids) => {
    for (let i = 0; i< amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for(let j = 0; j< amtOfGrids; j++){
            const WidthAndHeight = 460 / sizeOfGrids;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${WidthAndHeight}px`;
            gridBox.style.height = `${WidthAndHeight}px`;
            gridBox.addEventListener('mouseenter', () =>{
                gridBox.style.background = 'black';
            });
            row.appendChild(gridBox);       
        }
        container.appendChild(row);
    }
}

createGrid(sizeOfGrids);

// const allDivs = document.querySelectorAll('.grid-box');
// allDivs.forEach(div => {
//     div.addEventListener('mouseenter', () =>{
//         div.style.backgroundColor = 'black';
//     });
// });