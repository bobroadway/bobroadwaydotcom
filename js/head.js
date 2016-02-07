function locationGlow(id) {
    var label = document.getElementById(id);
    label.style = "text-shadow: 0 0 4px lightblue;"
      + "color: white;";
}

function displayDate() {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    
    var monthArray = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
    var monthString = monthArray[month]
    
    var daySuf = "th";
    if (day === 1 || day === 21 || day === 31) {
        daySuf = "st";
    } else if (day === 2 || day === 22) {
        daySuf = "nd";
    } else if (day === 3 || day === 23) {
        daySuf = "rd";
    }
    document.getElementById("currentdate").innerHTML = monthString 
        + " " + day + daySuf + ", " + year;
}
