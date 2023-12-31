import { drawBoard } from "./drawBoard.js";
import { solve, insertValues, populateValues } from "./solver.js";


const solveButton=document.querySelector('#solve-button')
const clearButton=document.querySelector('#clear-button')

function main(){
    drawBoard()
    solveButton.addEventListener('click', ()=>{
        insertValues()
        if(solve()){
            populateValues()
        }else{
            alert("Can't solve this puzzle!")
        }
    })
    clearButton.addEventListener('click', ()=> window.location.reload(true))
}
main()
