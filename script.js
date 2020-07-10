// Players factory function

const Players = (name, marker, score) => {
    let getPlayer = () => name;
    let setMarker = () => marker;
    let getScore = () => score;
    let addScore = () => {
        let newScore = parseInt(getScore()) + 1
        score = newScore;
    }
    return {getPlayer, setMarker, getScore, addScore}
};



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
            alert("X WINS");
            newGame()
        }
        else if (Owin == true){
            alert("O WINS")
            newGame();
        }
        else if (filtered.length == 9){
            alert("TIE")
        }
    }


    //newGame funct
    let newGame = () => {
        gameboard = [];
        render();
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

    // return {
    //     checkWins
    // }


})(); // end of Gameboard func


/////////////////////


const Display = (() => {
    
    //global data
    let player1;
    let player2;
    
    //DOM
    let $player1 = document.querySelector(".player1")
    let $player2 = document.querySelector(".player2")
    let $p1Score = document.querySelector(".p1Score")
    let $p2Score = document.querySelector(".p2Score")
    let $p1Marker = document.querySelector(".p1Marker")
    let $p2Marker = document.querySelector(".p2Marker")
    let $newGameBtn = document.querySelector(".new-btn")
    

    //setPlayer1
    let setPlayer1 = () => {
        let name = prompt("Player 1"); // change to prompt
        let marker = "X";
        let score = 0;
        if (name == ""){
            name = "Player 1"
        }
        player1 = Players(name, marker,score)
        
    }


    //setPlayer2
    let setPlayer2 = () => {
        let name = prompt("Player 2"); // change to prompt
        let marker = "O";
        let score = 0;
        if (name == ""){
            name = "Player 2"
        }
        player2 = Players(name, marker,score)
        render();
    }

    //newGame funct
    let newGame = () => {

    }


    //render
    let render = () => {
        $player1.innerHTML = player1.getPlayer()
        $player2.innerHTML = player2.getPlayer()
        $p1Score.innerHTML = player1.getScore()
        $p2Score.innerHTML = player2.getScore()
        $p1Marker.innerHTML = player1.setMarker()
        $p2Marker.innerHTML = player2.setMarker()
        
    }
    

    //bindEvents
    $newGameBtn.addEventListener("click", setPlayer1)
    $newGameBtn.addEventListener("click", setPlayer2)
    

    //init
    


    return {
        setPlayer1, setPlayer2
    }
})();// end of Display func









   
