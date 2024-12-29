// 在對應的頁面加載時顯示保存的項目
document.addEventListener("DOMContentLoaded", function () {
  const pageUrl = window.location.pathname.split("/").pop();
  console.log(pageUrl);
  const todos = JSON.parse(localStorage.getItem(pageUrl)) || [];
  const todoList = document.getElementById("todo-list");

  todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.textContent = todo;
    todoList.appendChild(todoItem);
  });
});
