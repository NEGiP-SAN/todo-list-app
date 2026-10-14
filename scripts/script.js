const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskButton = document.getElementById("taskButton");
const taskList = document.getElementById("taskList");

// prevent the page from reloading
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // remove the leading and trailing white space
  // and line terminator characters from a string
  const taskText = taskInput.value.trim();

  // reject empty tasks and refresh the input value
  if (taskText === "") {
    taskInput.value = "";
    return;
  }

  // create a new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // add the task to the page
  taskList.appendChild(li);

  // clear the input
  taskInput.value = "";
});
