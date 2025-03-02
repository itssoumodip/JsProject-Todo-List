function createTodoElement(todoText, todoId) {
    return `
       <li class="flex h-auto items-center justify-between gap-2 w-full bg-gray-600/30
            p-3 rounded-md">
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
                <button class="flex-shrink-0 cursor-pointer">
                    <svg class="hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e3e3e3">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                </button>
            </li>`;
}


// document.getElementById('addButoon').addEventListener('click', function(e) {
//     e.preventDefault();
//     const todoInput = document.getElementById('todoInput');
//     const todoText = todoInput.value.trim();
//     if (todoText) {
//         // const todoId = Date.now(); 
//         // const todoHTML = createTodoElement(todoText, todoId);
//         // document.getElementById('todoList').insertAdjacentHTML('beforeend', todoHTML);
//         // todoInput.value = '';
//     }
// });

const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

let allTodos = [];

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo();
})

function addTodo() {
     const todoText = todoInput.value;
     if(todoText.length>0) {
        allTodos.push(todoText);
        // todoText="";
        const todoId = Date.now();
        const todoHTML = createTodoElement(todoText, todoId);
        todoList.insertAdjacentHTML('beforeend', todoHTML);
        todoInput.value = '';
     }
}
