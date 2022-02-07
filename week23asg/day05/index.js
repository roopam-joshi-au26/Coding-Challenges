let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorButton = document.getElementById("scissor");

var items = Array("Rock", "Papper", "Scissor");
var computerScore = 0
var humanScore = 0

rockButton.addEventListener("click", rocked);
paperButton.addEventListener("click", paperd);
scissorButton.addEventListener("click", scissored);

function rocked() {
    document.getElementById("humanScore").innerText = humanScore;
    document.getElementById("computerScore").innerText = computerScore;
    if (computerScore == 10) {
        document.getElementById("win").innerText = "Computer Win this match"
        document.getElementById("dance").src = "https://media4.giphy.com/media/FRjBPtrmmJknA7LgV5/giphy.gif?cid=ecf05e479ijppz62f270vkmsekufmqf2x1pjg4laq1esw1tt&rid=giphy.gif&ct=g"
        document.body.style.backgroundImage = "url('https://cdn.dribbble.com/users/576253/screenshots/7114834/media/4d6a6ac23082e60809b4d6dd33cd27bb.gif')";
        setTimeout(() => {
            location.reload()
        }, 10000);
    }
    if (humanScore == 10) {
        document.getElementById("win").innerText = "You Win this match"
        document.getElementById("dance").src = "https://i.giphy.com/RLcQGYmQU36d3FceiP.gif"
        document.body.style.backgroundImage = "url('https://cdn.dribbble.com/users/576253/screenshots/7114834/media/4d6a6ac23082e60809b4d6dd33cd27bb.gif')";
        setTimeout(() => {
            location.reload()
        }, 10000);
    }

    console.log(computerScore, "computer score")
    console.log(humanScore, "Human score")
    var item = items[Math.floor(Math.random() * items.length)];
    console.log("rock click")
    if (item == "Rock") {
        document.getElementById("para").innerText = "Computer: Rock...Its a tie";
        document.getElementById("myImg").src = "https://appyogi.com/wordpress/wp-content/uploads/2019/07/Rock_paper_Seassors_1.png";
        document.getElementById("human").src = "https://appyogi.com/wordpress/wp-content/uploads/2019/07/Rock_paper_Seassors_1.png";
    }
    if (item == "Papper") {

        document.getElementById("para").innerText = "Computer: Papper...Computer win";
        computerScore += 1
        document.getElementById("myImg").src = "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png";

    }
    if (item == "Scissor") {

        document.getElementById("para").innerText = "Computer: Scissor...You win";
        humanScore += 1
        document.getElementById("myImg").src = "https://flyclipart.com/thumb2/rock-paper-scissors-with-tensorflow-js-246544.png";

    }
}

function paperd() {
    document.getElementById("humanScore").innerText = humanScore;
    document.getElementById("computerScore").innerText = computerScore;
    if (computerScore == 10) {
        document.getElementById("win").innerText = "Computer Win this match"
        document.getElementById("dance").src = "https://media4.giphy.com/media/FRjBPtrmmJknA7LgV5/giphy.gif?cid=ecf05e479ijppz62f270vkmsekufmqf2x1pjg4laq1esw1tt&rid=giphy.gif&ct=g"
        document.body.style.backgroundImage = "url('https://cdn.dribbble.com/users/576253/screenshots/7114834/media/4d6a6ac23082e60809b4d6dd33cd27bb.gif')";
        setTimeout(() => {
            location.reload()
        }, 10000);
    }
    if (humanScore == 10) {
        document.getElementById("win").innerText = "You Win this match"
        document.getElementById("dance").src = "https://i.giphy.com/RLcQGYmQU36d3FceiP.gif"
        document.body.style.backgroundImage = "url('https://cdn.dribbble.com/users/576253/screenshots/7114834/media/4d6a6ac23082e60809b4d6dd33cd27bb.gif')";
        setTimeout(() => {
            location.reload()
        }, 10000);
    }
    console.log(computerScore, "computer score")
    console.log(humanScore, "Human score")
    var item = items[Math.floor(Math.random() * items.length)];
    console.log("Papper click")
    if (item == "Papper") {
        document.getElementById("human").src = "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png";
        document.getElementById("myImg").src = "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png";
        document.getElementById("para").innerText = "Computer: Papper...Its a tie";

    }
    if (item == "Rock") {
        const para = document.createElement("h1");
        document.getElementById("myImg").src = "https://appyogi.com/wordpress/wp-content/uploads/2019/07/Rock_paper_Seassors_1.png";
        humanScore += 1
        document.getElementById("para").innerText = "Computer: Rock...You win";
        document.body.appendChild(para);
    }
    if (item == "Scissor") {
        const para = document.createElement("h1");
        document.getElementById("myImg").src = "https://flyclipart.com/thumb2/rock-paper-scissors-with-tensorflow-js-246544.png";
        computerScore += 1
        document.getElementById("para").innerText = "Computer: Scissor...Computer win";
        document.body.appendChild(para);
    }
}

function scissored() {
    console.log(computerScore, "computer score")
    document.getElementById("humanScore").innerText = humanScore;
    document.getElementById("computerScore").innerText = computerScore;

    if (computerScore == 10) {
        document.getElementById("win").innerText = "Computer Win this match"
        document.getElementById("dance").src = "https://media4.giphy.com/media/FRjBPtrmmJknA7LgV5/giphy.gif?cid=ecf05e479ijppz62f270vkmsekufmqf2x1pjg4laq1esw1tt&rid=giphy.gif&ct=g"
        document.body.style.backgroundImage = "url('https://cdn.dribbble.com/users/576253/screenshots/7114834/media/4d6a6ac23082e60809b4d6dd33cd27bb.gif')";
        setTimeout(() => {
            location.reload()
        }, 10000);
    }
    if (humanScore == 10) {
        document.getElementById("win").innerText = "You Win this match"
        document.body.style.backgroundImage = "url('https://cdn.dribbble.com/users/576253/screenshots/7114834/media/4d6a6ac23082e60809b4d6dd33cd27bb.gif')";
        document.getElementById("dance").src = "https://i.giphy.com/RLcQGYmQU36d3FceiP.gif"
        setTimeout(() => {
            location.reload()
        }, 10000);
    }


    console.log(humanScore, "Human score");
    var item = items[Math.floor(Math.random() * items.length)];
    console.log("Scissor click")
    if (item == "Papper") {
        const para = document.createElement("h1");
        document.getElementById("human").src = "https://flyclipart.com/thumb2/rock-paper-scissors-with-tensorflow-js-246544.png";
        document.getElementById("myImg").src = "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png";
        humanScore += 1
        document.getElementById("para").innerText = "Computer: Papper...You win";
        document.body.appendChild(para);
    }
    if (item == "Rock") {
        const para = document.createElement("h1");
        document.getElementById("myImg").src = "https://appyogi.com/wordpress/wp-content/uploads/2019/07/Rock_paper_Seassors_1.png";
        computerScore += 1
        document.getElementById("para").innerText = "Computer: Rock...Computer winner";
        document.body.appendChild(para);
    }
    if (item == "Scissor") {
        const para = document.createElement("h1");
        document.getElementById("para").innerText = "Computer: Scissor... It's a tie";
        document.getElementById("myImg").src = "https://flyclipart.com/thumb2/rock-paper-scissors-with-tensorflow-js-246544.png";

        document.body.appendChild(para);
    }
}