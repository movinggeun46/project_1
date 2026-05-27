// HTML 요소 가져오기
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

// 할 일 데이터 저장 (배열)
let todos = JSON.parse(localStorage.getItem('todos')) || []; // localStorage에서 할 일 목록 가져오기 (없으면 빈 배열로 초기화)

renderTodos();

// 할 일 추가 기능 함수 정의
function addTodo() {
    const text = todoInput.value.trim(); // 입력값을 가져오고 앞뒤 공백 제거 후 변수에 저장

    if (text === '') {
        alert('할 일을 입력해주세요.');
        return;
}

todos.push({
    text: text,
    completed: false

});

todoInput.value = ''; // 입력창 초기화
renderTodos();

localStorage.setItem('todos', JSON.stringify(todos)); // 할 일 목록을 localStorage에 저장
}

function handleEnter(e) { // onkeydown으로 키 입력을 받고, event.key가 'Enter'일 때만 addTodo()를 호출해서 Enter로도 추가
    if (e.key === 'Enter') {
        addTodo();
    }
}

// 화면에 할 일 목록 표시 (innerHTML 사용)
function renderTodos() {
    let html = '';
    for (let i = 0; i < todos.length; i++) {
        html += `
            <li class="todo-item">
                <span>${todos[i].text}</span>
            </li>
        `;
    }
    todoList.innerHTML = html;
}



