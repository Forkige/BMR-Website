var boy = document.getElementById("boy");
var girl = document.getElementById("girl");

var weight = document.getElementById("weight");
var height = document.getElementById("height");
var age = document.getElementById("age");

document.getElementById("submitbtn").onclick = function() {
    let weight_value = weight.value;
    let height_value = height.value;
    let age_value = age.value;

    if(boy.checked) {
        document.getElementById("head").textContent = "ITS A BOOOYY";
        let result = (10 * weight_value)+(6.25 * height_value)-(5 * age_value) + 5;
        document.getElementById("resultBMI").textContent = `${result} Calories`;

    } else if(girl.checked) {
        document.getElementById("head").textContent = "ITS A GIRLLL";
        let result = (10 * weight_value)+(6.25 * height_value)-(5 * age_value) - 161;
        document.getElementById("resultBMI").textContent = `${result} Calories`;
    }
}

