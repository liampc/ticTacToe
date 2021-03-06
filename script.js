
// Global Variables

let Player1;
let Player2;


////////////// Players factory function

const Players = (name, marker, score) => {
    let getPlayer = () => name;
    let setMarker = () => marker;
    let getScore = () => score;
    let addScore = () => {
        let newScore = parseInt(getScore()) + 1
        score = newScore;
    }
    let clearScore = () => score = 0;
    return {getPlayer, setMarker, getScore, addScore, clearScore}
};



////////////// GAMEBOARD /////////////////



const GameBoard = (() => {

    //global data
    let gameboard = [];
    let filtered;

    // DOM 
    let $cells = document.querySelectorAll(".div-table > *")
    let $newGameBtn = document.querySelector(".new-btn");

    //render func
    let render = () => {
        for (let i = 0; i < $cells.length; i++){
            $cells[i].textContent = gameboard[i]
        }
    }

    //set index
    let setIndex = () => {
        for (let i = 0; i < $cells.length; i++){
            $cells[i].setAttribute("data-index", i)
        }
        
    }


    //filter array
    let filterGB = () => {
        filtered = gameboard.filter(mark => mark != "");
    }

    //add markers
    let addMarkers = (e) => {
        let cell = e.target
        let index = cell.getAttribute("data-index");
        filterGB();

        if (filtered.length % 2 == 0 && cell.textContent == ""){
            gameboard[index] = "X"
            filterGB()
        }
        else if (filtered.length % 2 != 0 && cell.textContent == ""){
            gameboard[index] = "O"
            filterGB()
        }
        render();
        checkWins();
        checkFinal()
    }

    //checkWins
    let checkWins = () => {
        let g = gameboard;
        let r1 = [g[0], g[1], g[2]].join("")
        let r2 = [g[3], g[4], g[5]].join("")
        let r3 = [g[6], g[7], g[8]].join("")
        let rows = [r1, r2 ,r3]
        
        let c1 = [g[0], g[3], g[6]].join("")
        let c2 = [g[1], g[4], g[7]].join("")
        let c3 = [g[2], g[5], g[8]].join("")
        let columns = [c1, c2, c3]

        let d1 = [g[0], g[4], g[8]].join("")
        let d2 = [g[2], g[4], g[6]].join("")
        let diagonals = [d1,d2]

        let combined = [rows, columns, diagonals].flat()

        let Xwin = combined.some(win => win == "XXX");
        let Owin = combined.some(win => win == "OOO")
        if (Xwin == true){
            alert(`${Display.setP1Name()} wins this round!`);
            Display.Player1.addScore()
            Display.render()
            newRound()
        }
        else if (Owin == true){
            alert(`${Display.setP2Name()} wins this round!`)
            Display.Player2.addScore()
            Display.render()
            newRound()
        }
        else if (filtered.length == 9){
            alert("TIE")
            newRound()
        }
    }


    //newGame funct
    let newRound = () => {
        gameboard = [];
        render();
    }

    let newGame = () => {
        gameboard = []
        Display.Player1.clearScore()
        Display.Player2.clearScore()
        Display.render()
    }

    let checkFinal = () => {
        if (Display.Player1.getScore() == 3){
            alert(`${Display.setP1Name()} is the final winner!`)
            newGame()
        }
        else if (Display.Player2.getScore() == 3){
            alert(`${Display.setP1Name()} is the final winner!`)
            newGame()
        }
        
    }


    //bind Events
    $cells.forEach(cell => {
        cell.addEventListener("click", addMarkers)
    })
    $newGameBtn.addEventListener("click", newGame)

    
    //initialize
    render()
    setIndex()
    filterGB()

    


})(); // end of Gameboard func




///////////////////// DISPLAY MODULE ////////////////////



const Display = (() => {
    
    
    //DOM
    let $player1 = document.querySelector(".player1")
    let $player2 = document.querySelector(".player2")
    let $p1Score = document.querySelector(".p1Score")
    let $p2Score = document.querySelector(".p2Score")
    let $p1Marker = document.querySelector(".p1Marker")
    let $p2Marker = document.querySelector(".p2Marker")
    let $newGameBtn = document.querySelector(".new-btn")
    


    let changeName = () => {

        let p1 = prompt("Change player 1");
        let p2 = prompt("Change player 2");

        if (p1 == ""){
            p1 = "Player 1"
        }
        if (p2 == ""){
            p2 = "Player 2"
        }

        $player1.textContent = p1;
        $player2.textContent = p2;
    }


    //setPlayer1
    let setP1Name = () => {
        let name = $player1.textContent
        return name
        
    }

    //setPlayer2
    let setP2Name = () => {
        let name = $player2.textContent
        return name
        
    }

    //set Players using Players Factory function
    Player1 = Players(setP1Name(), "X", 0)
    Player2 = Players(setP2Name(), "O", 0)


    //render
    let render = () => {
        $player1.innerHTML = setP1Name()
        $player2.innerHTML = setP2Name()
        $p1Score.innerHTML = Player1.getScore()
        $p2Score.innerHTML = Player2.getScore()
        $p1Marker.innerHTML = Player1.setMarker()
        $p2Marker.innerHTML = Player2.setMarker()
        
    }


    //bindEvents
    $newGameBtn.addEventListener("click", changeName)
   
    
    //init
    render();


    return {
       Player1, Player2, render, setP1Name, setP2Name
    }

    
})();// end of Display func









   
