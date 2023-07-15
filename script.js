function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      return;
    }
  
    var taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;
  
    var deleteButton = document.createElement("span");
    deleteButton.textContent = "x";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
      taskList.removeChild(taskItem);
    };
  
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  
    taskInput.value = "";
  }  