function saveTask(){
  let description = document.getElementById('taskDescription').value;
  let body = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({description: description})
  };
  fetch('/tasks', body).then(response => {
    if (response.ok) {
      return response.json();
    }else {
      throw "Error en la llamada AJAX"
    }
  }).then(task => {
    document.getElementById('taskDescription').value = '';
    addTask(task);
  }).catch(error => {
    console.log('Error: ', error);
  })
}
function addTask(task){
  let html =
  `
  <div class="card my-3" id="card${task.id}">
    <div class="card-body">
      <p class="card-text" id="task${task.id}">${task.description}</p>
      <form>
        <a id="delete${task.id}" href="javascript:;" class="text-danger" onclick="deleteTask(${task.id});">Delete</a>
      </form>
      <form>
        <a id="done${task.id}" href="javascript:;" class="card-link" onclick="doneTask(${task.id});">Done</a>
      </form>
    </div>
  </div>
  `;
  let node = document.createRange().createContextualFragment(html);
  document.getElementById('tasksList').prepend(node);
}
function doneTask(id){
 let body = {
   method: 'POST',
   headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({id: id})
 };
 fetch('/update/'+id, body).then(response => {
   if(response.ok){

     //return response.json();
   }else{
     throw "Error en la llamada AJAX"
   }
 }).then(task => {
   doneMark(id);
 }).catch(error => {
   console.log('Error '+error);
 });
}
function doneMark(id){
 console.log('donetask');
 let doneLink = document.getElementById('done'+id)
 doneLink.parentNode.parentNode.classList.add('bg-light')
 doneLink.style.color = 'black';
}
function deleteTask(id){
let body = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({id: id})
};
fetch('/delete/'+id, body).then(response => {
  if(response.ok){
    //return response.json();
  }else{
    throw "Error en la llamada AJAX"
  }
}).then(task => {
  deleteFromView(id);
}).catch(error => {
  console.log('Error '+error);
});
}
function deleteFromView(id){
let deleteLink = document.getElementById('delete'+id)
let task = document.getElementById('card'+id)
task.parentNode.removeChild(task)
}