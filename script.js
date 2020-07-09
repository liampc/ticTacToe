
const GameBoard = (() => {

    //array
    let gameboard = ["X", "", "O","", "X", "","X", "X", "O"];

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
        let filtered = gameboard.filter(mark => mark != "");
        console.log(filtered);
    }

    //add markers

    //checkWins

    //bind Events

    
    //init
    render()
    setIndex()
    filterGB()
    
    return {
        
    }


})();