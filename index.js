const display = document.getElementById("display");
let secondMode = false;
function appendValue(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
function sinDeg(x) {
   return  Math.sin(x*Math.PI / 180);
}
function cosDeg(x) {
    return Math.cos(x*Math.PI / 180);
}
function tanDeg(x) {
    return Math.tan(x*Math.PI / 180);
}

function toggleSecond() {
    secondMode = !secondMode;

    // Change button labels visually
    document.getElementById("sinBtn").textContent = secondMode ? "sin⁻¹" : "sin";
    document.getElementById("sinBtn").style.backgroundColor = secondMode ? "green" : "";
    document.getElementById("cosBtn").textContent = secondMode ? "cos⁻¹" : "cos";
    document.getElementById("cosBtn").style.backgroundColor = secondMode?  "green" : "";
    document.getElementById("tanBtn").textContent = secondMode ? "tan⁻¹" : "tan";
    document.getElementById("tanBtn").style.backgroundColor = secondMode ? "green" : "";
}
function trigButtonPressed(func) {
    let value = parseFloat(document.getElementById("display").value);
    let result;
    if (func === "sin") {
        result = secondMode ? Math.asin(value) * (180 / Math.PI) : Math.sin(value * Math.PI / 180);

    } else if (func === "cos") {
        result = secondMode ? Math.acos(value) * (180 / Math.PI) : Math.cos(value * Math.PI / 180);

    } else if (func === "tan") {
        result = secondMode ? Math.atan(value) * (180 / Math.PI) : Math.tan(value * Math.PI / 180);
    }
    document.getElementById("display").value = result;
    if (secondMode && (func === "sin" || func === "cos") && (value < -1 || value > 1)) {
        alert("Input must be between -1 and 1 for inverse functions")
    }
    if (!secondMode && func==="tan" && (value % 180 === 90)) {
        alert("Tan is undefined at this angle");
    }
}






