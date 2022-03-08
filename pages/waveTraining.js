function toggleSelectLift() {
    let bench = document.getElementById("bench");
    let squat = document.getElementById("squat");
    let deadlift = document.getElementById("deadlift");
    
    document.getElementsByClassName('togglelift')[0]
        .addEventListener('click', function () {
            this.classList.toggle('active');
            squat.classList.remove("active");
            deadlift.classList.remove("active");
        });
    document.getElementsByClassName('togglelift')[1]
        .addEventListener('click', function () {
            bench.classList.remove("active");
            deadlift.classList.remove("active");
            this.classList.toggle('active');
        });
    document.getElementsByClassName('togglelift')[2]
        .addEventListener('click', function () {
            bench.classList.remove("active");
            squat.classList.remove("active");
            this.classList.toggle('active');
        });
}
toggleSelectLift();

function toggleSelectIncrement() {
    let three21 = document.getElementById("three21");
    let seven53 = document.getElementById("seven53");
    
    document.getElementsByClassName('toggleinc')[0]
        .addEventListener('click', function () {
            seven53.classList.remove("active");
            this.classList.toggle('active');
        });
    document.getElementsByClassName('toggleinc')[1]
        .addEventListener('click', function () {
            three21.classList.remove("active");
            this.classList.toggle('active');
        });
}
toggleSelectIncrement();



function waveTracker() {
    const startnum = document.getElementById("startnum").value;

    const three21Class = document.getElementById("three21");
    const seven53Class = document.getElementById("seven53");

    const benchClass = document.getElementById("bench");
    const squatClass = document.getElementById("squat");
    const deadliftClass = document.getElementById("deadlift");

    if ( benchClass.classList.contains("active") ) {
        calcWave(parseInt(startnum), 10);
    } 
    else if ( squatClass.classList.contains("active") ) {
        calcWave(parseInt(startnum), 20);
    } 
    else if ( deadliftClass.classList.contains("active") ) {
        calcWave(parseInt(startnum), 20);
    };

    for (let i = 0; i < 12; i++) {
        function toggleCheckX() {
            document.getElementsByClassName('xmark')[i]
            .addEventListener("click", function() {
            this.classList.toggle("active");
            });
            document.getElementsByClassName('check')[i]
            .addEventListener("click", function() {
            this.classList.toggle("active");
            });
        };
        toggleCheckX();
    }

    function calcWave( num, inc) {
        if (num != 0 && inc != 0 && three21Class.classList.contains("active")) {
            let wave = [num, num+inc, num+(inc*2), num+(inc*3), num+(inc*4), num+(inc*5)];
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
        } else if (num != 0 && inc != 0 && seven53Class.classList.contains("active")) {
            let wave = [num, num+inc, num+(inc*2), num+(inc*3), num+(inc*4), num+(inc*5)];
            for (let i = 0; i < 4; i++) {
                document.getElementById(`wave${i+1}`).innerHTML = 
                `
                <div> 
                    WAVE ${i+1}
                    <div class="set">${wave[0+i]} lbs x 7 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                    <div class="set">${wave[1+i]} lbs x 5 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                    <div class="set">${wave[2+i]} lbs x 3 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                </div>
                `;  
            }
        }
        else {
            console.log("Not a valid input");
        }
    }
}
