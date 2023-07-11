let count = 0;
function calc(data) {
    if (data == 'INC') {
        count++;
    }
    else {
        count--;
    }
    document.getElementById("valueDisplay").innerHTML = count;
}