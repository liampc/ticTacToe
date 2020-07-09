const TicTactoe = (() => {


    const GameBoard = (() => {

        //array
        let gameboard = [];
        let filtered;

        // DOM 
        let $cells = document.querySelectorAll(".div-table > *")


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
        }

        //checkWins


        

        //bind Events
        $cells.forEach(cell => {
            cell.addEventListener("click", addMarkers)
        })

        
        //init
        render()
        setIndex()
        filterGB()
        addMarkers();

    
        return {
            
        }


    });


    const Display = (() => {
        
        //global data
        let player1 = "player1";
        let player2;
        
        //DOM
        let $player1 = document.querySelector(".player1")
        let $player2 = document.querySelector(".player2")
        let $p1Score = document.querySelector(".p1Score")
        let $p2Score = document.querySelector(".p2Score")
        let $newGameBtn = document.querySelector(".new-btn")
        

        //setPlayer1
        let setPlayer1 = () => {
            let name = prompt("Player 1"); // change to prompt
            let marker = "X";
            let score = this.$p1Score.textContent;
            let p1 = Players(name, marker,score)
        }


        //setPlayer2

        //render

        //bindEvents

        //init

        return {
            player1
        }
    });

    const Players = ((name, marker, score) => {
        let getPlayer = () => name;
        let setMarker = () => marker;
        let getScore = () => score;
        let addScore = () => {
            let newScore = parseInt(getScore()) + 1
            score = newScore;
        }
        return {getPlayer, setMarker, getScore, addScore}
    });

    return {
        GameBoard, Display, Players
    }

})();