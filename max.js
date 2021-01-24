

function theBigger(minister, business, jonogon) {

    // var minister = 950;
    // var business = 850;
    // var jonogon = 100;


    var whoIsTheMax = Math.max(minister, business, jonogon);

    console.log("Jonogoner Kache",whoIsTheMax, "Taka ache");

    if (whoIsTheMax == minister) {
        console.log("Minister Is the Bigger");
    }
    else if (whoIsTheMax == business) {
        console.log("Business Is the Bigger");
    }
    else {
        console.log("Jonogon is the Bigger");
    }
}

var who = theBigger(10,20,30);

console.log(who);