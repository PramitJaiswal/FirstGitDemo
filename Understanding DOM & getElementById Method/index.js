// Write your code below:
// index.js

// Task 1: Change the main heading 'Fruit Shop' to 'Fruit World' and change its font color to orange
const mainHeading = document.getElementById('main-heading');
if (mainHeading) {
  mainHeading.textContent = 'Fruit World';
  mainHeading.style.color = 'orange';
}

// Task 2: Change the background color of the header to green
const header = document.getElementById('header');
if (header) {
  header.style.backgroundColor = 'green';
}

// Task 3: Add a bottom border of orange color to the header
if (header) {
  header.style.borderBottom = '2px solid orange';
}

// Task 4: Change the font color of 'Fruits In Basket' from black to green
const basketHeading = document.getElementById('basket-heading');
if (basketHeading) {
  basketHeading.style.color = 'green';
}

// Task 5: Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"
const thanksDiv = document.getElementById('thanks');
if (thanksDiv) {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Please visit us again';
  thanksDiv.appendChild(paragraph);
}