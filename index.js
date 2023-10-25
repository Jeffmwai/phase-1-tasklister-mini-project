document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 

      const taskDescription = document.getElementById("new-task-description").value;
  
      const listItem = document.createElement("li");
      listItem.textContent = taskDescription;
      taskList.appendChild(listItem);
  
      document.getElementById("new-task-description").value = "";
  
  });