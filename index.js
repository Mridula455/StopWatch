// define vars
let miliSeconds =0
let seconds= 0;
let minutes =0;
let hours =0;

// define vars to display the "display"
let displaymiliSeconds =0;
let displaySeconds= 0;
let displayMinutes =0;
let displayHours =0;

// define variables to store the status variables
let interval = 0;

document.getElementById("start").addEventListener('click',function stopWatch(){
    interval = setInterval(function stopWatch(){
        miliSeconds++
        if(miliSeconds/60 ==1){
            miliSeconds=0;
            seconds++;
    
            if(seconds/60 ==1){
                seconds =0;
                minutes++;
                
                if(minutes/60 ==1){
                    minutes=0;
                    hours++;
                }
            }
        }
        // if seconds/minutes/hours are single 0
        if(miliSeconds<10||miliSeconds==0){
            displaymiliSeconds ="0"+miliSeconds.toString();
        }
        else{
            displaymiliSeconds = miliSeconds;
        }
        if(seconds<10 || seconds == 0){
            displaySeconds ="0"+seconds.toString();
        }else{
            displaySeconds = seconds;
        }
        
        if(minutes<10 || minutes == 0){
            displayMinutes ="0"+minutes.toString();
        }else{
            displayMinutes = minutes;
        }

        if(hours<10 || hours == 0){
            displayHours ="0"+hours.toString();
        }
        else{
            displayHours = hours;
        }

            document.querySelector(".display").innerHTML=displayHours+":" +displayMinutes +":"+ displaySeconds+":"+displaymiliSeconds;
        //diplay the updated values to the user
        
        
},20)
});

document.getElementById("stop").addEventListener("click",function stop(){
    clearInterval(interval);
})

document.getElementById("reset").addEventListener("click",function reset(){
    document.location.reload();
})

