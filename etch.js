const body = document.getElementById('body');
const div = document.createElement('div');
const container = document.getElementById('container');

const resetBtn = document.getElementById('reset');


const divs = divGen(16);

gridStyler();





resetBtn.addEventListener('click', () => {

        gridPrompt();

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function divGen(number) {
    // added divs to 
    if (number > 35) {
        number = 35;
    } //else 
    
    number = number * number;
    
    for (i = 0; i< number;i++) {
        let div = document.createElement('div');
        div.setAttribute('class', "grid");
        body.appendChild(div);
    }

    const divTags = document.querySelectorAll('.grid');


    divTags.forEach(div => {
        div.addEventListener('mouseover', (event) => {
            
            event.target.style.backgroundColor = "#FFD580";
        })
    })
    
}

function gridStyler() {

    const grid = document.querySelectorAll('.grid');
    let length = grid.length;
    let sqrRoot = Math.sqrt(length);
    let riseRun = sqrRoot * 25;

    if (sqrRoot * 25 > 900) {
        let riseRun = 35 * 25;
        let width = riseRun.toString() = "px";
        body.style.width = width;
        
    } else {
        let width = riseRun.toString() + "px";
        body.style.width = width;

    }

    grid.forEach(div => {
        div.style.cssText = 'height: 23px; width: 23px; background-color: white; border: 1px dotted black;'
    })
    
    
}

function gridPrompt() {
    
    const grid = document.querySelectorAll('.grid');
    
   
    grid.forEach(div => {
       body.removeChild(div);
    })
    
    let userChoice = prompt('type in your new dimensions')

    const divs = divGen(Number(userChoice));
    gridStyler();
    
    

}



