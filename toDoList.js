var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");
console.log(taskInput);
console.log(addTaskBtn);
console.log(taskList);

addTaskBtn.addEventListener("click", addTask);

function addTask() {

document.getElementById("tl").style.display = "block";
  var input = taskInput.value.trim();
  console.log(input);
  if (input !== "") {
    var taskItem = document.createElement("li");
    taskItem.className = "taskItem";

    
    //* text container
    var textContainer = document.createElement("div");
    textContainer.className = "textContainer";
     

    //* checkbox
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.className = "checkBox";
    //* checkbox event
    checkBox.addEventListener("change", () => {
        text.classList.toggle("completed");
    })

    //*text
    var text = document.createElement("span");
    text.textContent = input;
    text.className = "text";

   

    var btnContainer = document.createElement("div");
    btnContainer.className = "btnContainer";
    //* delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type","button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    //* delete btn event
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    })

    //* This is apending section
    textContainer.appendChild(checkBox);
    textContainer.appendChild(text);
    btnContainer.appendChild(deleteBtn);
    taskItem.appendChild(textContainer);
    taskItem.appendChild(btnContainer);


    taskList.appendChild(taskItem);
  

    taskInput.value = "";
  }
}
