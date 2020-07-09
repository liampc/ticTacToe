//const TicTactoe = (() => {


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
        let player1;
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
            let score = $p1Score.textContent;
            player1 = Players(name, marker,score)
            render();
        }


        //setPlayer2
        let setPlayer2 = () => {
            let name = prompt("Player 1"); // change to prompt
            let marker = "X";
            let score = $p1Score.textContent;
            player2 = Players(name, marker,score)
            render();
        }


        //render
        let render = () => {
            $player1.innerHTML = player1.getPlayer()
            $player2.innerHTML = player2.getPlayer()
        }
       

        //bindEvents
        $newGameBtn.addEventListener("click", setPlayer1)
        $newGameBtn.addEventListener("click", setPlayer2)

        //init
        


        return {
            setPlayer1
        }
    })();

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

//     return {
//         GameBoard, Display, Players
//     }

// //})();   // END OF MODULE