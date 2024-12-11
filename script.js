// Select elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Add task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create list items
    const listItem = document.createElement('li');

    // Add task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    // Add buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'task-buttons';

    // Complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-btn';
    completeButton.addEventListener('click', () => {
        listItem.classList.toggle('completed');    
    });

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    // Append buttons to container
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);

    // Append container to list item
    listItem.appendChild(buttonContainer);

    //Append list item to task list
    taskList.appendChild(listItem);

    // Clear input
    taskInput.value = '';
});