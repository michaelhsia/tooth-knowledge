document.getElementById("add-button").addEventListener("click", function () {
  const todoText = document.getElementById("new-todo").value;
  if (todoText === "") return;

  const todoList = document.querySelector(".todo-list");
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("label");
  label.textContent = todoText;

  todoItem.appendChild(checkbox);
  todoItem.appendChild(label);
  todoList.appendChild(todoItem);

  document.getElementById("new-todo").value = "";
});
