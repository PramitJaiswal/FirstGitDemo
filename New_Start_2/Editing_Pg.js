const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(function(deleteButton) {
  const editButton = document.createElement('button');
  editButton.classList.add('edit-btn');
  editButton.textContent = 'Edit';

  deleteButton.parentNode.appendChild(editButton);

  deleteButton.addEventListener('click', function() {
    this.parentNode.remove();
  });
});

document.getElementById('add-fruit-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const fruitToAdd = document.getElementById('fruit-to-add').value.trim();
  if (fruitToAdd !== '') {
    const fruitList = document.getElementById('fruit-list');
    const newFruit = document.createElement('li');
    newFruit.classList.add('fruit');
    newFruit.innerHTML = `${fruitToAdd}<button class="delete-btn">x</button><button class="edit-btn">Edit</button>`;
    fruitList.appendChild(newFruit);
    document.getElementById('fruit-to-add').value = '';

    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(function(deleteButton) {
      const editButton = document.createElement('button');
      editButton.classList.add('edit-btn');
      editButton.textContent = 'Edit';
      deleteButton.parentNode.appendChild(editButton);

      deleteButton.addEventListener('click', function() {
        this.parentNode.remove();
      });
    });
  } else {
    alert('Please enter a fruit name!');
  }
});