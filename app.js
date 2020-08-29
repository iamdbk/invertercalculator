const totalInputs = document.querySelectorAll("input.main-input");
const va_tube = document.querySelector("[va-tube]");
const va_bulb = document.querySelector("[va-bulb]");
const va_fan = document.querySelector("[va-fan]");
const va_tv = document.querySelector("[va-tv]");
const va_lap = document.querySelector("[va-lap]");
const va_desk = document.querySelector("[va-desk]");
const va_misc = document.querySelector("[va-misc]");
const va_result = document.querySelector(".va-result");
const va_form = document.querySelector(".va-form");
const clear = document.querySelector(".clear");

let va;
// Event Listener on VA calculate

va_form.addEventListener("submit", function (e) {
  // Calculating Actual VA
  if (
    va_tube.value == "" &&
    va_bulb.value == "" &&
    va_fan.value == "" &&
    va_tv.value == "" &&
    va_lap.value == "" &&
    va_desk.value == ""
  ) {
    // do nothing
  } else {
    const sum =
      va_tube.value * 20 +
      va_bulb.value * 9 +
      va_fan.value * 75 +
      va_tv.value * 100 +
      va_lap.value * 50 +
      va_desk.value * 100;
    let va = 1.2 * ((sum + 20) / 0.8);

    // Displaying it on the monitor

    va_result.value = `${va.toFixed(2)} VA`;
    va_result.style.display = "block";
  }
});

// To make display to none of VA
totalInputs.forEach(function (current) {
  current.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
    } else {
      va_result.style.display = "none";
    }
  });
});

// To clear every input field of VA
clear.addEventListener("click", function () {
  totalInputs.forEach(function (current) {
    current.value = "";
    va_result.style.display = "none";
  });
});
