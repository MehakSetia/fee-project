function addTask() {
    const taskDescription = document.getElementById('taskDescription').value.trim();
    const taskDateTime = document.getElementById('taskDateTime').value;
    const taskPriority = document.getElementById('taskPriority').value;

    if (taskDescription !== '' && taskDateTime !== '') {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <p><strong>Description:</strong> ${taskDescription}</p>
            <p><strong>Date and Time:</strong> ${taskDateTime}</p>
            <p><strong>Priority:</strong> ${taskPriority}</p>
            <div class="task-actions">
                <button onclick="deleteTask(this)">Delete</button>
                <button onclick="markCompleted(this)">Complete</button>
            </div>
        `;
        taskList.appendChild(taskItem);

        // Clear input fields
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskDateTime').value = '';
    }
}

function deleteTask(button) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(button.parentElement.parentElement);
}

function markCompleted(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed-task');
}