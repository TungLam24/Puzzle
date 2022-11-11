function check(x) {
    document.getElementById("btn1").removeAttribute("style")
    document.getElementById("btn2").removeAttribute("style")
    document.getElementById("btn3").removeAttribute("style")
    document.getElementById("btn4").removeAttribute("style")
    document.getElementById("btn5").removeAttribute("style")
    let btn_class = x.className
    let next_btn_class = +btn_class + 1
    if (+btn_class == 13 || +btn_class == 23 || +btn_class == 33 || +btn_class == 43 || +btn_class == 53) {
        btn_class = +btn_class - 2
        x.innerHTML = document.getElementsByClassName(btn_class.toString())[0].value;
        x.value = document.getElementsByClassName(btn_class.toString())[0].value;
        x.className = btn_class
    } else {
        x.innerHTML = document.getElementsByClassName(next_btn_class.toString())[0].value;
        x.value = document.getElementsByClassName(next_btn_class.toString())[0].value;
        x.className = next_btn_class
    }
    if (document.getElementById("btn1").value == "<img src='img/wk%20part%201.png' alt='wkpart1'>" &&
        document.getElementById("btn2").value == "<img src='img/wk%20part%202.png' alt='wkpart2'>" &&
        document.getElementById("btn3").value == "<img src='img/wk%20part%203.png' alt='wkpart3'>" &&
        document.getElementById("btn4").value == "<img src='img/wk%20part%204.png' alt='wkpart4'>" &&
        document.getElementById("btn5").value == "<img src='img/wk%20part%205.png' alt='wkpart5'>") {

        document.getElementById("btn1").setAttribute("style", "box-shadow: 5px 10px 20px red inset");
        document.getElementById("btn2").setAttribute("style", "box-shadow: 5px 10px 20px red inset");
        document.getElementById("btn3").setAttribute("style", "box-shadow: 5px 10px 20px red inset");
        document.getElementById("btn4").setAttribute("style", "box-shadow: 5px 10px 20px red inset");
        document.getElementById("btn5").setAttribute("style", "box-shadow: 5px 10px 20px red inset")
    } else if (document.getElementById("btn1").value == "<img src='img/wr%20part%201.png' alt='wrpart1'>" &&
        document.getElementById("btn2").value == "<img src='img/wr%20part%202.png' alt='wrpart2'>" &&
        document.getElementById("btn3").value == "<img src='img/wr%20part%203.png' alt='wrpart3'>" &&
        document.getElementById("btn4").value == "<img src='img/wr%20part%204.png' alt='wrpart4'>" &&
        document.getElementById("btn5").value == "<img src='img/wr%20part%205.png' alt='wrpart5'>") {

        document.getElementById("btn1").setAttribute("style", "box-shadow: 5px 10px 20px red inset");
        document.getElementById("btn2").setAttribute("style", "box-shadow: 5px 10px 20px red inset");
        document.getElementById("btn3").setAttribute("style", "box-shadow: 5px 10px 20px red inset");
        document.getElementById("btn4").setAttribute("style", "box-shadow: 5px 10px 20px red inset");
        document.getElementById("btn5").setAttribute("style", "box-shadow: 5px 10px 20px red inset")
    } else if (document.getElementById("btn1").value == "<img src='img/vs%20part%201.png' alt='vspart1'>" &&
        document.getElementById("btn2").value == "<img src='img/vs%20part%202.png' alt='vspart2'>" &&
        document.getElementById("btn3").value == "<img src='img/vs%20part%203.png' alt='vspart3'>" &&
        document.getElementById("btn4").value == "<img src='img/vs%20part%204.png' alt='vspart4'>" &&
        document.getElementById("btn5").value == "<img src='img/vs%20part%205.png' alt='vspart5'>") {

        document.getElementById("btn1").setAttribute("style", "box-shadow: 5px 10px 20px red inset");
        document.getElementById("btn2").setAttribute("style", "box-shadow: 5px 10px 20px red inset");
        document.getElementById("btn3").setAttribute("style", "box-shadow: 5px 10px 20px red inset");
        document.getElementById("btn4").setAttribute("style", "box-shadow: 5px 10px 20px red inset");
        document.getElementById("btn5").setAttribute("style", "box-shadow: 5px 10px 20px red inset")
    }
}