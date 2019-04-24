window.onload=function () {
        for(var i = 0;i < 2;i++){
                addTable(i)
        }
}
function addTable(num) {
        var newTr = document.getElementById("tableOne").insertRow(num);
        var firstCell = newTr.insertCell(0);
        var secondCell = newTr.insertCell(1);
        var thirdCell = newTr.insertCell(2);
        var fourthCell = newTr.insertCell(3);
        var fifthCell = newTr.insertCell(4);
        if(num ==0){
                firstCell.innerHTML = "<img class=\"img-thumbnail\" src=\"images/art/tiny/116010.jpg\" alt=\"...\">";
                secondCell.innerHTML = "Artist Holding a Thistle";
                thirdCell.innerHTML = "2";
                fourthCell.innerHTML = "$500";
                fifthCell.innerHTML = "$1000";
                calculate(1000);

        }
        else{
                firstCell.innerHTML = "<img class=\"img-thumbnail\" src=\"images/art/tiny/113010.jpg\" alt=\"...\">";
                secondCell.innerHTML = "Self-portrait in a Straw Hat";
                thirdCell.innerHTML = "1";
                fourthCell.innerHTML = "$700";
                fifthCell.innerHTML = "$700";
                calculate(700);
        }
}function calculate(num) {
        var amountone = document.getElementsByClassName("moveRight")[0].nextElementSibling;
        var amounttwo = document.getElementsByClassName("moveRight")[1].nextElementSibling;
        var amountthree = document.getElementsByClassName("moveRight")[2].nextElementSibling;
        var amountfour = document.getElementsByClassName("moveRight")[3].nextElementSibling;
        amountone.innerText = "$" + (parseInt(amountone.innerText.replace(/[^0-9]/ig,"")) + num);
        amounttwo.innerText = "$" + parseInt(amountone.innerText.replace(/[^0-9]/ig,""))/10;
        if(parseInt(amountone.innerText.replace(/[^0-9]/ig,""))>1000){
                amountthree.innerText = "$0";
        }
       else{
               amountthree.innerText = "$40";
        }
        amountfour.innerText = "$" + (parseInt(amountone.innerText.replace(/[^0-9]/ig,"")) + parseInt(amounttwo.innerText.replace(/[^0-9]/ig,"")) + parseInt(amountthree.innerText.replace(/[^0-9]/ig,"")));
}
