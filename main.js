const gameButton = document.getElementById("play-game");
const articleContainer = document.getElementById("article-container");
const container = document.getElementById('grid-container');
const grid = document.createElement('div');
grid.className = 'grid';

gameButton.addEventListener("click", () => {
    addHidden(articleContainer);
    removeHidden(container);
    let turnCounter = 0;

    for (let i = 0; i < 9; i++) {
        const button = document.createElement('button');
        button.className = 'cell';
        button.id = "button-" + i;

        button.addEventListener('click', () => {
            if(turnCounter % 2 == 0) {
                let blueDot = document.createElement("a");
                blueDot.classList.add("blue-dot"); 
                blueDot.textContent = "O";
                button.appendChild(blueDot);
                button.disabled = true;
            } else {
                let redDot = document.createElement("a");
                redDot.classList.add("red-dot"); 
                redDot.textContent = "O";
                
                while(1) {
                    let randomPlacement = Math.floor(Math.random() * 10);
                    let x = document.getElementById("button-" + randomPlacement);
                    if(x){
                        if(!x.firstChild) {
                            x.appendChild(redDot);
                            x.disabled = true;
                            break;
                        } 
                    }
                }
            }
            turnCounter++
        });
        grid.appendChild(button);
    }
    container.appendChild(grid);
});

function addHidden(element) {
    element.classList.add("hidden");
}

function removeHidden(element) {
    element.classList.remove("hidden");
}