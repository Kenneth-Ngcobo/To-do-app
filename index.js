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
          console.log(`${ i + 1 }. ${taskList[i]}`)
          const newTask = document.createElement('li');
          newTask.innerHTML = `${taskList[i].task} ${taskList[i].date} <input  id="checkbox${i}" type="checkbox" onchange="${checkTask(this.id)}" value="${taskList[i].completed}"/>`;
            
          taskListEl.appendChild(newTask);
        } 
    };

    function checkTask (id){
       console.log("Id =", id);
    }
    function addToLocalStorage (taskList) {
        localStorage.setItem("tasks", JSON.stringify(taskList));
    };

    function getLocalStorage (){
        return localStorage.getItem("tasks");
    }
}) ; 





    
