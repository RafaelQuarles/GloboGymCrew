function toggleSelectLift() {
    let bench = document.getElementById("bench");
    let squat = document.getElementById("squat");
    let deadlift = document.getElementById("deadlift");
    
    document.getElementsByClassName('toggle')[0]
        .addEventListener('click', function () {
            this.classList.toggle('active');
            squat.classList.remove("active");
            deadlift.classList.remove("active");
        });
    document.getElementsByClassName('toggle')[1]
        .addEventListener('click', function () {
            bench.classList.remove("active");
            deadlift.classList.remove("active");
            this.classList.toggle('active');
        });
    document.getElementsByClassName('toggle')[2]
        .addEventListener('click', function () {
            bench.classList.remove("active");
            squat.classList.remove("active");
            this.classList.toggle('active');
        });
}
toggleSelectLift();

/* function toggleCheckX() {
    document.getElementsByClassName('xmark')[1]
    .addEventListener("click", function() {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else this.classList.add("active");
    });
}
toggleCheckX(); */

function waveTracker() {
    const startnum = document.getElementById("startnum").value;

    const benchClass = document.getElementById("bench");
    const squatClass = document.getElementById("squat");
    const deadliftClass = document.getElementById("deadlift");

    if ( benchClass.classList.contains("active") ) {
        calcWave("bench", parseInt(startnum));
    } 
    else if ( squatClass.classList.contains("active") ) {
        calcWave("squat", parseInt(startnum));
    } 
    else if ( deadliftClass.classList.contains("active") ) {
        calcWave("deadlift", parseInt(startnum));
    };

    function calcWave(lift, num) {
        if (lift == "bench") {
            let wave = [num, num+10, num+20, num+30, num+40, num+50];

            for (let i = 0; i < 4; i++) {
                document.getElementById(`wave${i+1}`).innerHTML = 
                `
                <div> 
                    WAVE ${i+1}
                    <div class="set">${wave[0+i]} lbs x 3 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                    <div class="set">${wave[1+i]} lbs x 2 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                    <div class="set">${wave[2+i]} lbs x 1 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                </div>
                `;  
            }
        }
        else if (lift == "squat" || lift == "deadlift") {
            let wave = [num, num+20, num+40, num+60, num+80, num+100];

            for (let i = 0; i < 4; i++) {
                document.getElementById(`wave${i+1}`).innerHTML = 
                `
                <div> 
                    WAVE ${i+1}
                    <div class="set">${wave[0+i]} lbs x 3 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                    <div class="set">${wave[1+i]} lbs x 2 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                    <div class="set">${wave[2+i]} lbs x 1 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                </div>
                `;  
            }
        }
        else {
            console.log("Not a valid lift");
        }
    }
}
