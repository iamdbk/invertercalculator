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
let sum;

// backup elements
const bu_form = document.querySelector(".bu-form");
const noOfBattery = document.querySelectorAll("input[type='radio']");
const batteryAh = document.querySelector("[battery-ah]");
const batteryResult = document.querySelector(".result-2");
const clear2 = document.querySelector(".clear-2");
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
    sum =
      va_tube.value * 20 +
      va_bulb.value * 9 +
      va_fan.value * 75 +
      va_tv.value * 100 +
      va_lap.value * 50 +
      va_desk.value * 100 +
      20;
    va = 1.2 * (sum / 0.8);

    // Displaying it on the monitor

    va_result.value = `${va.toFixed(2)} VA`;
    va_result.style.display = "block";
    console.log(va);
    console.log(sum);
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
clear.addEventListener("click", function (e) {
  totalInputs.forEach(function (current) {
    current.value = "";
    va_result.style.display = "none";
  });
  noOfBattery.forEach(function (current) {
    if (current.checked) {
      current.checked = false;
    }
  });
  batteryAh.value = "";
  e.preventDefault();
});

// For backup time
bu_form.addEventListener("submit", function (e) {
  let batteryValue;
  noOfBattery.forEach(function (current) {
    if (current.checked) {
      batteryValue = current.value;
      console.log(batteryValue);
    }
  });
  let backupTime = (batteryAh.value * batteryValue * 9.6) / (sum * va);
  batteryResult.value = backupTime;
  batteryResult.style.display = "block";
  console.log(va);
  console.log(sum);
  e.preventDefault();
});

clear2.addEventListener("click", function () {
  noOfBattery.forEach(function (current) {
    if (current.checked) {
      current.checked = false;
    }
  });
  batteryAh.value = "";
});
