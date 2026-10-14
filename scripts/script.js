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

  // create a span to display the task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // create a button to delete the task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.type = "button";

  // remove the task when the delete button is clicked
  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  // add the task to the page
  li.appendChild(taskSpan);
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  // clear the input
  taskInput.value = "";
});
