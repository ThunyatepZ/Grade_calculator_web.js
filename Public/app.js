function Show() 
{
    var score = prompt("กรอกคำแนนของคุณ")

    if (score >= 100) {
        document.getElementById("screen").innerHTML = "ยินดีด้วยคุณได้คะแนนเต็ม"
    }
    else if(score >= 90){
        document.getElementById("screen").innerHTML = "คุณได้เกรดA"
    }
    else if(score >= 80){
        document.getElementById("screen").innerHTML = "คุณได้เกรดB"
    }
    else if(score >= 70){
        document.getElementById("screen").innerHTML = "คุณได้เกรดC"
    }
    else if(score >= 60){
        document.getElementById("screen").innerHTML = "คุณได้เกรดD"
    }
    else if(score >= 50){
        document.getElementById("screen").innerHTML = "คุณได้เกรดE"
    
    }
    else{
        document.getElementById("screen").innerHTML = "เสียใจด้วยคุณสอบตก"
    }
}
