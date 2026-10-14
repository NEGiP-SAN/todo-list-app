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
  const listItem = document.createElement("li");

  // create a span to display the task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // create a checkbox
  const completeCheckbox = document.createElement("input");
  completeCheckbox.type = "checkbox";

  // for people who use screen readers
  completeCheckbox.setAttribute(
    "aria-label",
    `Mark "${taskText}" as completed`,
  );

  // Listen for checkbox changes and add or remove the "completed" class
  // based on whether the checkbox is checked (true) or unchecked (false)
  completeCheckbox.addEventListener("change", function () {
    listItem.classList.toggle("completed", completeCheckbox.checked);
  });

  // create a button to delete the task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.type = "button";

  // remove the task when the delete button is clicked
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  // create a div to group the checkbox and task text together
  const taskContent = document.createElement("div");

  // add a CSS class to style the task content container
  taskContent.classList.add("taskContent");

  // add the checkbox and task text inside the div
  taskContent.appendChild(completeCheckbox);
  taskContent.appendChild(taskSpan);

  // add the task to the page
  listItem.appendChild(taskContent);
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);

  // clear the input
  taskInput.value = "";
});
