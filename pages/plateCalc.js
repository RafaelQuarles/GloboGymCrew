function calcPlates() {
    const weight = document.getElementById("startnum").value;

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
    for (let z = 0 ; z < plates.length + 1; z++) { //0,1,2,3,4,5,6,7,8
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

    document.getElementById("showPlates").innerHTML = `
        <div class="plate plate-${plates[0]} spot-1"></div>
        <div class="plate plate-${plates[1]} spot-2"></div>
        <div class="plate plate-${plates[2]} spot-3"></div>
        <div class="plate plate-${plates[3]} spot-4"></div>
        <div class="plate plate-${plates[4]} spot-5"></div>
        <div class="plate plate-${plates[5]} spot-6"></div>
        <div class="plate plate-${plates[6]} spot-7"></div>
        <div class="plate plate-${plates[7]} spot-8"></div>
        <div class="plate plate-${plates[8]} spot-9"></div>
        <div class="plate plate-${plates[9]} spot-10"></div>
        <div class="plate plate-${plates[10]} spot-11"></div>
        <div class="plate plate-${plates[11]} spot-12"></div>
    `
}