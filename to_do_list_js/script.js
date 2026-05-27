// HTML 요소 가져오기
const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');

// 할 일 데이터 저장 (배열)
let todos = [];

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
console.log(todos); // 콘솔에 할 일 목록 출력
}

function handleEnter(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
}


