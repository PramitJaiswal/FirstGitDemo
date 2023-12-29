// Write the code as shown in the video below:
const heading = document.querySelector('#basket-heading');

heading.style.color='brown';


const fruits = document.querySelectorAll('.fruit');

const secondFruits = document.querySelectorAll('#basket-list .fruit:nth-child(2)');
secondFruits.forEach(function(item) {
  secondFruits[1].style.backgroundColor = 'brown';
  secondFruits[1].style.color = 'white';
});

// Change the background and text color of the fourth list item
const fourthFruits = document.querySelectorAll('#basket-list .fruit:nth-child(4)');
fourthFruits.forEach(function(item) {
  fourthFruits[1].style.backgroundColor = 'brown';
  fourthFruits[1].style.color = 'white';
});






// Write answer to the questions asked below: