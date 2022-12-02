window.tacktoe = [[null, null, null], [null, null, null], [null, null, null]]
window.turn = 1;

window.onload = () => {
    let table = document.querySelector("table");
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            table.rows[i].cells[j].onclick = (e) => {
                if (e.target.nodeName == "TD") {
                    var cell = e.target || window.event.srcElement;
                    //alert( cell.cellIndex + ' : ' + cell.parentNode.rowIndex );
                    if (tacktoe[cell.parentNode.rowIndex][cell.cellIndex] == null) {
                        tacktoe[cell.parentNode.rowIndex][cell.cellIndex] = turn;
                        let str = "";
                        for (let k = 0; k < 3; k++) {
                            str += tacktoe[k] + "\n";
                        }
                        //alert(str);
                        if(turn == -1){
                            e.target.firstElementChild.innerHTML = `<i class="fa-solid fa-xmark red-font"></i>`;
                        }
                        else{
                            e.target.firstElementChild.innerHTML = `<i class="fa-solid fa-o white-font"></i>`;
                        }
                        turn*=-1;
                    }
                }
            };
        }
    }
}
function IsEnd(){
    
}