const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle completed on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Right-click to delete task
  li.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = '';
});
