var squares = document.getElementsByClassName("box");
var colorName = document.getElementsByClassName("colorName");
var generate = document.getElementById("generate");

generate.addEventListener("click", newColors);
newColors();
function generateRGB() {
  // Math.random Generates random Numbers between 0 to 1
  // example : 0.34545 , 0.5689 , etc
  // 0 is included in the range but 1 is not , so it will never generate 1
  // So, we can just multiply the random number with 256 and
  // Use Math.floor() to get rid of the decimal part

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function newColors() {
  // Generating Random RGB Colors for each Square Box and Applying them.
  var length = squares.length;
  for (let i = 0; i < length; i++) {
    let color = generateRGB().toUpperCase();
    squares[i].style.backgroundColor = color;
    squares[i].addEventListener("click", function () {
      navigator.clipboard.writeText(color.toLowerCase());
    });
    colorName[i].innerText = color;
  }
}
