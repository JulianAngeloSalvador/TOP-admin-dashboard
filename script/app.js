// Adding inline style order(for CSS animation delay)

// Step 1: Select the parent element
const textSvg = document.querySelector("#text-svg");

// Step 2: Select all the child elements within the parent using querySelectorAll
const svgLetters = document.querySelectorAll("#text-svg path");
console.log(svgLetters);

// Step 3: Use forEach to apply inline style with --order to each child element
svgLetters.forEach((letter, index) => {
  // Step 4: Set the value of --order based on some conditions or calculations
  const orderValue = index + 1; // For example, using the index as the order value

  // Step 5: Apply the inline style with --order to the child element
  letter.style.setProperty("--order", orderValue);
});
