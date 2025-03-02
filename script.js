function createTodoElement(todoText, todoId) {
    return `
       <li class="flex h-auto items-center justify-between gap-2 w-full bg-gray-600/30
            p-3 rounded-md" data-id="${todoId}">
                <div class="flex items-center gap-2 min-w-0 flex-1">
                    <input type="checkbox" class="hidden" id="${todoId}">
                    <label for="${todoId}" class="cursor-pointer">
                        <div class="custom-checkbox border rounded-full p-1 border-blue-500">
                            <svg class="fill-black invisible" xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 -960 960 960" width="13px"
                                fill="#e3e3e3">
                                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                            </svg>
                        </div>
                    </label>
                    <label for="${todoId}" class="todoText break-words overflow-hidden flex-1">
                       ${todoText} 
                    </label>
                </div>
                <button class="flex-shrink-0 cursor-pointer deleteBtn" data-id="${todoId}">
                    <svg class="hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e3e3e3">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                </button>
            </li>`;
}

const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

let allTodos = getTodos();
updateTodos();

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTodos();
})

function addTodos() {
     const todoText = todoInput.value;
     if(todoText.length > 0) {
        allTodos.push(todoText);
        updateTodos();
        saveTodos();
        todoInput.value = '';      
     }
};

function updateTodos() { 
    
    if (allTodos.length === 0) {
        todoList.innerHTML = `<li class="text-center py-6 text-gray-500">No tasks yet. Add a task to get started!</li>`;
        return;
    }
    
    todoList.innerHTML = '';
    allTodos.forEach((todoText, index) => {
        const todoHTML = createTodoElement(todoText, index);
        todoList.insertAdjacentHTML('beforeend', todoHTML);
    });

    // Attach event listeners to delete buttons
    document.querySelectorAll('.deleteBtn').forEach(button => {
        button.addEventListener('click', (e) => {
            const todoId = parseInt(e.target.closest('button').dataset.id, 10);
            deleteTodoItem(todoId);
        });
    });
}

function saveTodos() {
    const todosJson = JSON.stringify(allTodos);
    localStorage.setItem("todos", todosJson);
}

function getTodos() {
    const todosJson = localStorage.getItem("todos") || "[]";
    return JSON.parse(todosJson); 
}

function deleteTodoItem(todoId) {
    allTodos = allTodos.filter((_, index) => index !== todoId);
    saveTodos();
    updateTodos();
}