let images = document.querySelectorAll(".imgBack")
let imgArray = ['./images/heart9.png', './images/queen.png', './images/spadesB.png', './images/7.png', './images/10.png', './images/T.png', './images/T.png', './images/T.png', './images/T.png'];
var crack = document.getElementById('cracker');
var smoky = document.getElementById('smoke');
var count = 0;
var front1, front2;
var back1, back2;
var points = 0;
var life = 5;

(function () { //IIFE    //immediately invoked function excecution
    
    setTimeout(function () {
    
        document.getElementById('fluid').style='display:none';
        // $("canvas").fadeOut(5000);   
        $("#content").fadeIn(3000);
         
        // document.getElementById('content').style='display:block';

    },  5000);



})();




//rotate card function
function rotate(x, y) {
    random(y); //displaying random images
    count++;
    if (count == 1) {
        front1 = x;
        back1 = document.getElementById(y);
        back1.style = "display:block";
        document.getElementById(front1).style = `transition: 0.8s;transform-style: preserve-3d; transform: rotateY(180deg);`
    }
    if (count == 2) {
        count = 0;
        front2 = x;
        back2 = document.getElementById(y);
        back2.style = "display:block";
        document.getElementById(front2).style = `transition: 0.8s;transform-style: preserve-3d; transform: rotateY(180deg);`
        setTimeout(flip, 700);
        setTimeout(score, 700);

    }

}
//flip card back function
function flip() {
    document.getElementById(front1).style = `transition: 1s;transform-style: preserve-3d; transform: rotateY(0deg);`
    document.getElementById(front2).style = `transition: 1s;transform-style: preserve-3d; transform: rotateY(0deg);`
}

//score function
function score() {
    if (life == 1) {
        // alert("Game End!")
        // location.reload();
        smoky.style.display = 'block';

        crack.style.display = 'block';
        // setTimeout(function () {
        //     location.reload();
        // }, 15000);

    }

    if (back1.src == back2.src) {
        
        points++;

        
        setTimeout(function () {
            document.getElementById("div2").style = "border:none"
        }, 300)



        document.getElementById("div1").style = "color:#46eb34";
        setTimeout(function () {
            document.getElementById("div1").style = "color:white";
        }, 300)
        back1.style = "opacity:0.1";
        back2.style = "opacity:0.1";
        document.getElementById("div1").innerHTML = "Score:" + points;
    } else {
        life--;
        document.getElementById("div2").innerHTML = "Life:" + life;
        if (life == 2) {
            setTimeout(function () {
                setInterval(function () {
                    document.getElementById("div2").style = "color:red"
                }, 1000);
            }, 500);

            setInterval(function () {
                document.getElementById("div2").style = "color:white"
            }, 1000);

        }
        document.getElementById("div2").style = "color:red"
        setTimeout(function () {
            document.getElementById("div2").style = "color:white"
        }, 300)

    }

}

//displaying random images
function random(y) {
    let a = Math.floor(Math.random() * 9);
    document.getElementById(y).src = imgArray[a];
}