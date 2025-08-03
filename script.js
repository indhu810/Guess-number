var guessnumber=document.getElementById("guessnumber")
    var result=document.getElementById("result")
    var score=document.getElementById("score")
    totalscore=5
    var randomNumber=Math.floor(Math.random()*10)+1
    function check()
    {
        var enterednumber=guessnumber.value

        if(randomNumber==enterednumber)
        {
            console.log("right")
            result.textContent="Right" 
            alert("YOU WON....")
        }
        else{
            totalscore=totalscore-1
            score.textContent="Score:"+totalscore
            result.textContent="Wrong Try Again" 
        }

    }

    function restart()
    {
        location.reload()

    }
