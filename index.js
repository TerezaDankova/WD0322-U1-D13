
/* EXERCISE 5: 
   Add a new task to the list.
   Suggestion:
   - Use document.getElementById to get the UL item and the input text
   - Use the document.createElement to create the new List Item
   - Append the LI child to the UL
*/
 
 let newTaskNode = document.getElementById('newTask')
 let uList = document.getElementById('myTaskList')

 const addNewTask = function() {
  let newTaskList = document.createElement("li")
  newTaskList.innerText = newTaskNode.value
     
  uList.appendChild(newTaskList)
  newTaskNode.value = "";
  
 }

/* EXERCISE 6: 
    Create a method "removeLast" which removes the last item from the task list
*/

const removeLast = function(){
  let taskListItems = document.querySelectorAll('#myTaskList li')
  if (taskListItems.length > 0){
  taskListItems[taskListItems.length-1].remove()
 }
}

/* EXERCISE 7: 
    Create a method "removeFirst" which removes the first item from the task list
*/

const removeFirst = function(){
  let taskListItems = document.querySelectorAll('#myTaskList li')
  if (taskListItems.length > 0){
  taskListItems[0].remove()
  }
}

/* EXERCISE 8: 
    Create a method "getTasksAsArray" which returns, and prints to the console an array containing the tasks as strings
*/

const getTasksAsArray = function() {
  let arrayOfTasks = [];
  let uList = document.getElementById('myTaskList');
/*for (let list of uList.children) {
    console.log(list.innerHTML)
  }
  console.log(arrayOfTasks)
} 
*/

for (let i = 0; i < uList.length; i++) {
  const list = arrayOfTasks[index].innerText;
  console.log(list);   
} 
console.log(arrayOfTasks)
} 


/* EXERCISE 9:
    Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
    onchange event listener ad applies it as background to every list item
*/

const changeTaskBackgroundColor = document.getElementById("colorPicker")

changeTaskBackgroundColor.onchange = function (e) {
    document.getElementsByTagName("body")[0].style.backgroundColor = e.target.value
}

/* EXTRA */

/* EXERCISE 10: 
       Create a method "bubbleSort()" which sorts the task list alphabetically using the bubble sort algorithm
    
       Use your spare time to beautify your task list with CSS.

       Suggestion:
       - Break the code into many function for semplicity 
       - Reuse the functions previously created
    */

function bubbleSort() {
  const items = document.getElementsByClassName("task-list-item");
  let swap;
  let n = items.length -1;
  let x = items;
  do {
    swap = false;
    for(let i=0; i< n; i++){
      if (x[i].innerText > x [i + 1].innerText){
        let temp = x[i].innerText;
        x[i].innerText = x [i + 1].innerText;
        x [1 + 1].innerText = temp;
        swap = true;
      }
    }
    n--;
  } while (swap);
  for (let i=0; i< items.length; i++){
    items[i].innerText = x[i].innerText;
}
}