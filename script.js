// Get slider elements
const redSlider = document.querySelector("#redSlider");
const greenSlider = document.querySelector("#greenSlider");
const blueSlider = document.querySelector("#blueSlider");
const randomColorBtn = document.querySelector("#random-color-btn");

// Set initial background color
updateColor();

// Add event listeners to sliders
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

function updateColor() {
  // Get slider values
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  // Update background color
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  // Update color value display
  const colorValue = document.querySelector("#colorValue");
  colorValue.textContent = `RGB(${red}, ${green}, ${blue})`;
}

function randomColor() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((res) => res.json())
    .then((data) => {
      const colorFromApi = data.color;
      document.body.style.backgroundColor = colorFromApi;
      const colorValue = document.querySelector("#colorValue");
      colorValue.textContent = colorFromApi;
    });
}

randomColorBtn.addEventListener("click", randomColor);
