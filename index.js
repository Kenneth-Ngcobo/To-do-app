document.addEventListener('DOMContentLoaded', function(){
    const taskInputEl = document.getElementById('taskInput');
    const addTaskBtnEl = document.getElementById('addTask-btn');
    const taskListEl = document.getElementById('taskList');
    const dateEl = document.getElementById('date');

    let taskList = []; 

    let savedTask = getLocalStorage();

    if (savedTask) {
        taskList = JSON.parse(savedTask);

        displayList();
    };
    
    addTaskBtnEl.addEventListener('click' , function(){
        let taskInputValue = taskInputEl.value.trim();
        let dateInputValue = dateEl.value.trim();    
        if (taskInputValue !== ' '){
           taskList.push({ task: taskInputValue, date: dateInputValue , completed:false});
           displayList();
            addToLocalStorage(taskList);
            console.log(taskList);
        }
    });
    
    function displayList(){
        taskListEl.textContent = " ";
        for(let i = 0; i < taskList.length ; i++){
          
          const newTask = document.createElement('li');

          //newTask.innerHTML = `${taskList[i].task} ${taskList[i].date} <input  id="checkbox${i}" type="checkbox" value="${taskList[i].completed}"/>`;

          newTask.innerText = `${taskList[i].task} ${taskList[i].date}`

          const inputEl = document.createElement("input")
          inputEl.type = "checkbox"
          inputEl.id = `checkbox${i}`
          inputEl.checked = taskList[i].completed

          inputEl.addEventListener("change", function(event){
            checkTask(i, event)
          })
        
          newTask.appendChild(inputEl);

          taskListEl.appendChild(newTask)

          /*const checkboxEl = document.getElementById(`checkbox${i}`)
          checkboxEl.addEventListener("change", function(){
            checkTask(`checkbox${i}`)
          })*/

        } 
    };

    function checkTask (index, event){

        const currentTask = taskList[index]
    
        currentTask.completed = event.target.checked
        console.log(currentTask)

        
        addToLocalStorage(taskList)
      
    }

    function addToLocalStorage (taskList) {
        localStorage.setItem("tasks", JSON.stringify(taskList));
    };

    function getLocalStorage (){
        return localStorage.getItem("tasks");
    }
}) ; 





    
