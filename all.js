document.getElementById("add-button").addEventListener("click", function () {
  const category = document.getElementById("category-select").value;
  const newTodo = document.getElementById("new-todo").value;

  if (newTodo.trim() === "") {
    alert("請輸入新知識");
    return;
  }

  // 添加到首頁
  const todoList = document.getElementById("todo-list");
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";
  todoItem.textContent = `${category}: ${newTodo}`;
  todoList.appendChild(todoItem);

  // 添加到對應的頁面
  addTodoToCategoryPage(category, newTodo);

  // 清空輸入框
  document.getElementById("new-todo").value = "";
});

function addTodoToCategoryPage(category, newTodo) {
  const categoryPageMap = {
    植牙: "implant.html",
    假牙: "dentures.html",
    牙周病: "periodontal.html",
    牙齒美白: "whitening.html",
    矯正: "orthodontics.html",
    根管治療: "root-canal.html",
  };

  const pageUrl = categoryPageMap[category];
  if (!pageUrl) return;

  // 使用 LocalStorage 保存數據
  const todos = JSON.parse(localStorage.getItem(pageUrl)) || [];
  todos.push(newTodo);
  localStorage.setItem(pageUrl, JSON.stringify(todos));
}
