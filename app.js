// Weight variables
let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");
// Height variables
let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");
// Display Slider value
weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;
// Update sliders in real time while dragging it.
weightSlider.oninput = function () {
  weightOutput.innerHTML = this.value;
};
heightSlider.oninput = function () {
  heightOutput.innerHTML = this.value;
};
// Change weight-slider value on weight-number input
function showValWeight(newVal) {
  weightSlider.value = newVal;
}
// Change height-slider value on height-number input
function showValHeight(newVal) {
  heightSlider.value = newVal;
}
weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);

function updateValueWeight(e) {
  weightOutput.value = e.srcElement.value;
}

function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;
}
// calculate BMI
function calculateBmi() {
  let weight = document.bmiForm.realWeight.value;
  let height = (document.bmiForm.realHeight.value)/100;
  let realbmi = (weight) / Math.pow(height, 2);
  let realbmiOutput = document.getElementById("yourBmi");
  let messageOutput = document.getElementById("evaluation-message");
  let roundedBmi = realbmi.toFixed(1);
  messageOutput.innerHTML = "";
  realbmiOutput.innerHTML = " " + roundedBmi;
  if (roundedBmi > 26) {
    messageOutput.innerHTML = "Start Workout";
  } else {
    messageOutput.innerHTML = "Maintained"
  }
}
