window.addEventListener("load", function () {
  const todoList = document.querySelector(".todo-list");
  const btn = document.querySelector("button");

  function createTodo(text) {
    const li = document.createElement("li");
    li.innerText = text;
    li.classList.add("todo-item");
    li.addEventListener("click", deleteTodo);
    todoList.append(li);
  }

  function deleteTodo() {
    this.removeEventListener("click", deleteTodo);
    this.remove();
  }

  function handleClick() {
    const todoInput = this.previousElementSibling.value.trim();

    if (todoInput) {
      createTodo(todoInput);
      this.previousElementSibling.value = "";
    } else {
      alert("Add your Todo!");
    }
  }

  btn.addEventListener("click", handleClick);
});
