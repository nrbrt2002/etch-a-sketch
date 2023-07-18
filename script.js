const sizeOfGrids = 16;
const container = document.querySelector('.container');
const resetButton = document.querySelector('button');

const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    for (let i = 0; i< amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for(let j = 0; j< amtOfGrids; j++){
            const WidthAndHeight = 460 / amtOfGridsgit;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${WidthAndHeight}px`;
            gridBox.style.height = `${WidthAndHeight}px`;
            gridBox.addEventListener('mouseenter', () =>{
                gridBox.style.background = 'black';
            });
            row.appendChild(gridBox);       
        }
        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
}
// createGrid(sizeOfGrids);     

resetButton.addEventListener('click', ()=>{
    let userSize =Number(prompt('Enter Dimensions'));

    while(userSize > 100){
        userSize =Number(prompt('Dimensions can\'t Exicced 100 Grids. Try Again'));
    }
    const wrapper = document.querySelector('.wrapper');

    if(!wrapper){
        createGrid(userSize);
    }else{
        wrapper.remove();
        createGrid(userSize);
    }
     
});

// createGrid(sizeOfGrids);

// const allDivs = document.querySelectorAll('.grid-box');
// allDivs.forEach(div => {
//     div.addEventListener('mouseenter', () =>{
//         div.style.backgroundColor = 'black';
//     });
// });