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
                    <div class="set"><i class="fas fa-question-circle" onclick="openModal(${wave[0+i]})"></i>${wave[0+i]} lbs x 3 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                    <div class="set"><i class="fas fa-question-circle" onclick="openModal(${wave[1+i]})"></i>${wave[1+i]} lbs x 2 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                    <div class="set"><i class="fas fa-question-circle" onclick="openModal(${wave[2+i]})"></i>${wave[2+i]} lbs x 1 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
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
                    <div class="set"><i class="fas fa-question-circle" onclick="openModal(${wave[0+i]})"></i>${wave[0+i]} lbs x 7 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                    <div class="set"><i class="fas fa-question-circle" onclick="openModal(${wave[1+i]})"></i>${wave[1+i]} lbs x 5 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                    <div class="set"><i class="fas fa-question-circle" onclick="openModal(${wave[2+i]})"></i>${wave[2+i]} lbs x 3 reps <div class="xcheck_container"><div class="check">✓</div><div class="xmark" id="xmark">X</div></div></div>
                </div>
                `;
            }
        }
        else {
            console.log("Not a valid input");
        }
    }
}

function closeModal() {
    document.getElementById("modal").classList.add('hide');
}
function openModal(weight) {
    a = 0; b = 0; c = 0; d = 0; e = 0; f = 0; g = 0; h = 0; i = 0;
    plates=[a,b,c,d,e,f,g,h,i]
    let oneside = (weight - 45)/2;
    
    // sets the 45 pound plate in the correct spot
    plates[Math.floor(oneside/45) - 1 ] = 45; 

    //set all plates before last 45 to 45
    for (let z = 0; z < plates.length; z++) {
        if (plates[plates.length - z] == 45) {
            plates[plates.length - z - 1] = 45;
        }
    }

    //set plates after 45
    for (let z = 0 ; z < plates.length; z++) { //0,1,2,3,4,5,6,7,8
        if (plates[z] != 45) {
            if ( oneside%45 == 2.5) { plates[z] = 2;}
            else if ( oneside%45 == 5) { plates[z] = 5;}
            else if ( oneside%45 == 7.5) { plates[z] = 5; plates[z+1] = 2;}
            else if ( oneside%45 == 10) { plates[z] = 10;}
            else if ( oneside%45 == 12.5) { plates[z] = 10; plates[z+1] = 2;}
            else if ( oneside%45 == 15) { plates[z] = 10; plates[z+1] = 5;}
            else if ( oneside%45 == 17.5) { plates[z] = 10; plates[z+1] = 5; plates[z+2] = 2;}
            else if ( oneside%45 == 20) { plates[z] = 10; plates[z+1] = 10;}
            else if ( oneside%45 == 22.5) { plates[z] = 10; plates[z+1] = 10; plates[z+2] = 2;}
            else if ( oneside%45 == 25) { plates[z] = 25;}
            else if ( oneside%45 == 27.5) { plates[z] = 25; plates[z+1] = 2;}
            else if ( oneside%45 == 30) { plates[z] = 25; plates[z+1] = 5;}
            else if ( oneside%45 == 32.5) { plates[z] = 25; plates[z+1] = 5; plates[z+2] = 2;}
            else if ( oneside%45 == 35) { plates[z] = 35;}
            else if ( oneside%45 == 37.5) { plates[z] = 35; plates[z+1] = 2;}
            else if ( oneside%45 == 40) { plates[z] = 35; plates[z+1] = 5;}
            else if ( oneside%45 == 42.5) { plates[z] = 35; plates[z+1] = 5; plates[z+2] = 2;}
            else { plates[z]=0; }
            break;
        }
    }

    document.getElementById("modal").innerHTML = `
        <div class="inner-modal">
        <div class="modal-weight">${weight}</div>
        <div class="bar"></div>
            <div class="plate plate-${plates[0]} spot-1"></div>
            <div class="plate plate-${plates[1]} spot-2"></div>
            <div class="plate plate-${plates[2]} spot-3"></div>
            <div class="plate plate-${plates[3]} spot-4"></div>
            <div class="plate plate-${plates[4]} spot-5"></div>
            <div class="plate plate-${plates[5]} spot-6"></div>
            <div class="plate plate-${plates[6]} spot-7"></div>
            <div class="plate plate-${plates[7]} spot-8"></div>
            <div class="plate plate-${plates[8]} spot-9"></div>
        </div>
    `
    document.getElementById("modal").classList.remove('hide');
}
