const REMOVE_BUTTON_CLASS = 'remove-button';
const DONE_CLASS = 'done';
const TODO_ITEM_CLASS = 'todo-item';

const input = document.querySelector('#msgInput');
const todoForm = document.querySelector('#todoForm');
const list = document.querySelector('.todo-list');
const todoHTML = document.querySelector('#taskTemplate').innerHTML;

list.addEventListener('click', onTodoListClick);
todoForm.addEventListener('submit', onTodoFormSubmit);

addTodo('Hello');
addTodo('Whats Up?');

function onTodoFormSubmit(e) {
    e.preventDefault();

    if (!isMessageValid(input.value)) {
        showError();
        return;
    }

    addTodo(input.value)
    clear();
}

function onTodoListClick(e) {
    const todoEl = getTodoElement(e.target);
    const classList = e.target.classList;

    if (todoEl) {
        if (classList.contains(REMOVE_BUTTON_CLASS)) {
            removeTodo(todoEl);
        }
        if (classList.contains(TODO_ITEM_CLASS)) {
            toggleDone(todoEl);
        }
    }

}

function showError() {
    alert('Поле сообщение не должно быть пустым');
}

function getTodoElement(target) {
    return target.closest('.' + TODO_ITEM_CLASS);
}

function isMessageValid(message) {
    return message !== '';
}

function addTodo(message) {
    list.insertAdjacentHTML('beforeend', todoHTML.replace('{{message}}', message));
}

function clear() {
    input.value = '';
}

function removeTodo(el) {
    el.remove();
}

function toggleDone(el) {
    el.classList.toggle(DONE_CLASS);
}