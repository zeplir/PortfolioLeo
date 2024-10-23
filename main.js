/*
    TODO: 
    1. Add functions that have been described below, add play again, win animation, dont play again
    2. Make website responsive
    3. Add more to the main index.html file
    4. Add information to the projects file
    5. Should probably add some more comments aswell
    6. Add some nice icons instead of the blue and red dots in the 3-in-a-row game
*/

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
            let blueDot = document.createElement("a");
            blueDot.classList.add("blue-dot"); 
            blueDot.textContent = "O";
            button.appendChild(blueDot);
            button.classList.add("X");
            button.disabled = true;

            // Checks if the player is the winner
            if(checkBoard(getAllButtons(), "X")) {
                console.log("The Winner is player X");
                playAgain();
            }
        
            if(turnCounter != 4) {
                let redDot = document.createElement("a");
                redDot.classList.add("red-dot"); 
                redDot.textContent = "O";

                while(1) {
                    let randomPlacement = Math.floor(Math.random() * 10);
                    let x = document.getElementById("button-" + randomPlacement);
                    if(x){
                        if(!x.firstChild) {
                            x.appendChild(redDot);
                            x.classList.add("O");
                            x.disabled = true;
                            break;
                        }           
                    }
                }
                // Checks if the computer is the winner
                if(checkBoard(getAllButtons(), "O")) {
                    console.log("The Winner is player O");
                }
            } 
        
            turnCounter++
        });
        grid.appendChild(button);
        container.appendChild(grid);
    }
});

function addHidden(element) {
    element.classList.add("hidden");
}

function removeHidden(element) {
    element.classList.remove("hidden");
}

function getAllButtons() {
    let arr = [];
    for(let i = 0; i < 9; i++) {
        let currentButton = document.getElementById("button-" + i);
        if(currentButton.classList.contains("X")) {
            arr.push("X");
        } else if(currentButton.classList.contains("O")) {
            arr.push("O");
        } else {
            arr.push("");
        }
    }
    console.log(arr);
    return arr;
}

function checkBoard(board, player) {
    // All possible winnings combinations for a game of 3-in-a-row
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6] 
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false; 
}

// Should restart the game and let the user play again.
function playAgain() {
    const playAgainButton = document.createElement("button");
    playAgainButton.id = "play-again-button";
    playAgainButton.innerHTML = "Play Again!";
    const gridContainer = document.getElementById("grid-container");
    gridContainer.appendChild(playAgainButton);
}

// implement a function which is something like "dont play again", which reverts the page to its normal look
function goBackToNormal() {
    // create another button which removes hidden and so on..
}