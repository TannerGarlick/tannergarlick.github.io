function announcement() {
    var answer = document.getElementById("pancakes").classList;
    var day = new Date();
    var number = day.getDay();

    if (number == 5) {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
document.getElementById("pancakes").innerHTML = answer;
}