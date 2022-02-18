function waveTracker() {
    const startnum = document.getElementById("startnum").value;

    calcWave("bench", parseInt(startnum));
    
    function calcWave(lift, num) {
        
        if (lift == "bench") {
            let wave1 = [num, num+10, num+20];
            let wave2 = [num+10, num+20, num+30];
            let wave3 = [num+20, num+30, num+40];
            let wave4 = [num+30, num+40, num+50];
            document.getElementById("wave1").innerHTML = 
                `
                <div> WAVE 1 : </div>
                <div class="set">${wave1[0]} lbs x 3 reps <span class="check">complete</span></div>
                <div class="set">${wave1[1]} lbs x 2 reps <span class="check">complete</span></div>
                <div class="set">${wave1[2]} lbs x 1 reps <span class="check">complete</span></div>
                `;
            document.getElementById("wave2").innerHTML = 
                `
                <div> WAVE 2 : </div>
                <div class="set">${wave2[0]} lbs x 3 reps <span class="check">complete</span></div>
                <div class="set">${wave2[1]} lbs x 2 reps <span class="check">complete</span></div>
                <div class="set">${wave2[2]} lbs x 1 reps <span class="check">complete</span></div>
                `;
            document.getElementById("wave3").innerHTML = 
                `
                <div> WAVE 3 : </div>
                <div class="set">${wave3[0]} lbs x 3 reps <span class="check">complete</span></div>
                <div class="set">${wave3[1]} lbs x 2 reps <span class="check">complete</span></div>
                <div class="set">${wave3[2]} lbs x 1 reps <span class="check">complete</span></div>
                `;
            document.getElementById("wave4").innerHTML = 
                `
                <div> WAVE 4 : </div>
                <div class="set">${wave4[0]} lbs x 3 reps <span class="check">complete</span></div>
                <div class="set">${wave4[1]} lbs x 2 reps <span class="check">complete</span></div>
                <div class="set">${wave4[2]} lbs x 1 reps <span class="check">complete</span></div>
                `;
        }
        else if (lift == "squat" || lift == "dead") {
            let wave1 = [num, num+20, num+40];
            console.log(wave1)
    
            document.getElementById("wave1set1").innerHTML = wave1[0];
        }
        else {
            console.log("Not a valid lift");
        }
    }
}

