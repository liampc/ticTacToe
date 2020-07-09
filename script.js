
const GameBoard = (() => {

    //array
    let gameboard = ["X", "", "O","", "X", "","X", "X", "O"];
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


})();