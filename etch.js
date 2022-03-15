const body = document.getElementById('body');
const div = document.createElement('div');
const container = document.getElementById('container');

const resetBtn = document.getElementById('reset');


const divs = divGen(256);
gridStyler();



const divTags = document.querySelectorAll('.grid');
divTags.forEach(div => {
    div.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "#FFD580";
    })
})

resetBtn.addEventListener('click', () => {
        const grid = document.querySelectorAll('.grid');
        
        
        grid.forEach(div => {
            div.style.backgroundColor = 'white';
            
        })


        let newDimensions = prompt('enter new dimensions (e.g for 16x16, type "16")')
        let newDivs = divGen(Number(newDimensions) * Number(newDimensions));
        let newWidth = 25 * Number(newDimensions);
        console.log(newDimensions);
        container.style.width = newWidth;
        console.log(newWidth);
        gridStyler();
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function divGen(number) {
    // returns an array

    for (i = 0; i< number;i++) {
        let div = document.createElement('div');
        div.setAttribute('class', "grid");
        body.appendChild(div);
    }
    
}

function gridStyler() {
    const grid = document.querySelectorAll('.grid');
    grid.forEach(div => {
        div.style.cssText = 'height: 23px; width: 23px; background-color: white; border: 1px dotted black;'
    })
}


