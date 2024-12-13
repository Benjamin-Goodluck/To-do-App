let isDarkMode = false;

    // Function to toggle between light and dark modes
    function toggleMode() {
        isDarkMode = !isDarkMode;
        const body = document.body;
        body.classList.toggle('dark-mode', isDarkMode);
    }

    // Function to add a task to the list
    function addTask() {
        const taskInput = document.getElementById('task');
        const dateInput = document.getElementById('date-time');
        const tasksContainer = document.getElementById('tasks-container');

        const taskText = taskInput.value;
        const taskDate = dateInput.value;

        if (taskText && taskDate) {
            const taskElement = document.createElement('div');
            taskElement.classList.add('todo-item');

            const taskContent = document.createElement('span');
            taskContent.textContent = `${taskText} - Due: ${new Date(taskDate).toLocaleString()}`;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '❌';
            deleteBtn.onclick = () => {
                tasksContainer.removeChild(taskElement);
            };

            taskElement.appendChild(taskContent);
            taskElement.appendChild(deleteBtn);

            tasksContainer.appendChild(taskElement);

            // Clear input fields
            taskInput.value = '';
            dateInput.value = '';
        } else {
            alert("Please enter both task and date/time.");
        }
    }