// Selecting DOM elements
const allButton = document.querySelector("#allButton");
const insideButton = document.querySelector("#insideButton");
const outsideButton = document.querySelector("#outsideButton");
const lawnButton = document.querySelector("#lawnButton");
const cleaningButton = document.querySelector("#cleaningButton");
const clearEstimateButton = document.querySelector("#clearEstimateButton");
const outsideServices = document.querySelectorAll(".outsideServices");
const insideServices = document.getElementsByClassName("insideServices");
const estimateBanner = document.querySelector("h3");
const lawnPhoto = document.getElementById("lawnPhoto");
const lawnEstimate = document.querySelector("#lawnEstimate");
const cleaningPhoto = document.querySelector("#cleaningPhoto");
const cleaningEstimate = document.querySelector(".cleaningEstimate");
const estimates = document.getElementsByTagName("li");

// Function to hide the banner
function hideBanner() {
  document.getElementById("banner").style.display = "none";
}

// Function to show outside services
function showOutside() {
  hideBanner();
  outsideServices[0].classList.remove("hide");
}

// Function to show inside services
function showInside() {
  hideBanner();
  insideServices[0].classList.remove("hide");
}

// Function to show all services
function showAll() {
  showInside();
  showOutside();
}

// Function to show the estimate banner
function showEstimateBanner() {
  estimateBanner.classList.remove("hide");
}

// Function to show the clear estimate button
function showClearButton() {
  clearEstimateButton.classList.remove("hide");
}

// Function to add lawn service
function addLawn() {
  showEstimateBanner();
  showClearButton();
  lawnEstimate.classList.remove("hide");
  lawnPhoto.setAttribute("src", "https://mimo.app/i/piggy-bank.png");
}

// Function to add cleaning service
function addCleaning() {
  showEstimateBanner();
  showClearButton();
  cleaningEstimate.classList.remove("hide");
  cleaningPhoto.setAttribute("src", "https://mimo.app/i/piggy-bank.png");
}

// Function to clear the estimate
function clearEstimate() {
  clearEstimateButton.classList.remove("hide");
  estimateBanner.classList.add("hide");
  clearEstimateButton.classList.add("hide");
  lawnPhoto.src = "https://mimo.app/i/colorful-flowers.png";
  cleaningPhoto.src = "https://mimo.app/i/cleaning.png";
  Array.from(estimates).forEach(el => {
    el.classList.add("hide");
  });
}

// Adding event listeners to buttons
allButton.addEventListener("click", showAll);
outsideButton.addEventListener("click", showOutside);
insideButton.addEventListener("click", showInside);
lawnButton.addEventListener("click", addLawn);
cleaningButton.addEventListener("click", addCleaning);
clearEstimateButton.addEventListener("click", clearEstimate);
