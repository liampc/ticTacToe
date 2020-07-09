
const GameBoard = (() => {

    //array
    let gameboard = ["X", "X", "O","X", "X", "O","X", "X", "O"];

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

    //add markers

    //checkWins

    //bind Events

    
    //init
    render()
    setIndex()
    
    return {
        
    }


})();