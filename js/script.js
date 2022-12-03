window.tacktoe = [[null, null, null], [null, null, null], [null, null, null]]
window.turn = 1;
window.turnCount = 0;
window.NotPlayble = false;
window.onload = () => {
    let table = document.querySelector("table");
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            table.rows[i].cells[j].onclick = f;
        }
    }
}
function IsEnd() {
    for (let i = 0; i < 3; i++) {
        if (tacktoe[i][0] == tacktoe[i][1] && tacktoe[i][0] == tacktoe[i][2] && tacktoe[i][0] != null)
            return tacktoe[i][0]
        if (tacktoe[0][i] == tacktoe[1][i] && tacktoe[1][i] == tacktoe[2][i] && tacktoe[0][i] != null)
            return tacktoe[0][i]
    }
    if (tacktoe[0][0] == tacktoe[1][1] && tacktoe[1][1] == tacktoe[2][2] && tacktoe[1][1] != null)
        return tacktoe[0][0]
    if (tacktoe[0][2] == tacktoe[1][1] && tacktoe[1][1] == tacktoe[2][0] && tacktoe[1][1] != null)
        return tacktoe[0][0]
    return false
}

function f(e) {
    if (NotPlayble)
        return null;
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
            if (turn == -1) {
                e.target.firstElementChild.innerHTML = `<i class="fa-solid fa-xmark red-font"></i>`;
            }
            else {
                e.target.firstElementChild.innerHTML = `<i class="fa-solid fa-o white-font"></i>`;
            }
            if (typeof IsEnd() != "boolean") {
                document.getElementById("WinMessage").innerText = `Congratulations the ${turn == 1 ? "CIRCLE" : "CROSS"} Player! \n You Won!`;
                document.getElementById("WinMessage").classList.add(turn == 1 ? "white-font" : "red-font")
                document.getElementById("WinMessage").hidden = false;       
                document.getElementById("WinMessage").id = "Active";
                let table = document.querySelector("table");
                table.style.opacity = 50;
		        table.style.filter = `blur(5px)`;
                table.style.scale  = "70%";
                table.style.transform = "translate(0, 200px)";
                document.body.style.height = "50vh";
                document.body.style.gap = 0;
                NotPlayble = true;
            }
            if(turnCount == 8){
                document.getElementById("WinMessage").innerText = `Draw.`;
                document.getElementById("WinMessage").classList.add("black-font");
                document.getElementById("WinMessage").style.fontSize = "100px"
                document.getElementById("WinMessage").hidden = false;
                document.getElementById("WinMessage").id = "Active";
                let table = document.querySelector("table");
                table.style.opacity = 0;
                document.body.style.height = "50vh"
                NotPlayble = true;
            }
            turn *= -1;
            ++turnCount;
        }
    }
}