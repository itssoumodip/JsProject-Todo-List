function createTodoElement(todoText, todoId) {
    return `
    <li class="flex todoText h-auto items-center justify-between gap-2 w-full">
        <div class="flex items-center gap-2 min-w-0 flex-1">
            <input type="checkbox" id="todo-${todoId}">
            <label for="todo-${todoId}">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#e3e3e3">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                </svg>
            </label>
            <label for="todo-${todoId}" class="break-words overflow-hidden flex-1">
                ${todoText}
            </label>
        </div>
        <button class="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                fill="#e3e3e3">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
        </button>
    </li>`;
}

// Example usage in your event listener
document.getElementById('addButoon').addEventListener('click', function(e) {
    e.preventDefault();
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todoId = Date.now(); // Generate unique ID
        const todoHTML = createTodoElement(todoText, todoId);
        document.getElementById('todoList').insertAdjacentHTML('beforeend', todoHTML);
        todoInput.value = '';
    }
});