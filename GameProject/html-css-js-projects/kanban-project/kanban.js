let taskdata ={}

const todo = document.getElementById('to-do');
const progress = document.getElementById('progress');
const done = document.getElementById('done');
const addtask = document.getElementById('add-task-btn');
const tasks= document.querySelectorAll('.task');

let dragElement=null;
const col = [todo,progress,done];
tasks.forEach(task =>{
    task.addEventListener("drag",(e)=>{
        dragElement=task;
    })
});

function call(column){
    column.addEventListener("dragenter",(e)=>{
        e.preventDefault();
        column.classList.add('hover-over');
    });
    column.addEventListener("dragleave",(e)=>{
      e.preventDefault();
      column.classList.remove('hover-over');
    });
    column.addEventListener('dragover',(e)=>{
     e.preventDefault();
    });
    column.addEventListener("drop",(e)=>{
        if (dragElement) {
            column.appendChild(dragElement);
            column.classList.remove('hover-over');
            dragElement = null;
        }
        col.forEach(cols =>{
            const tasks = cols.querySelectorAll('.task');
            const count = cols.querySelector('.right');
            count.innerText = tasks.length;
        });
    });
}
call(todo);
call(progress);
call(done);

const modal = document.querySelector('.modal');
const overlay=document.querySelector('.overlay');

addtask.addEventListener("click",()=>{
      modal.classList.toggle('active');
});
overlay.addEventListener("click",()=>{
    modal.classList.remove('active');
});

const addtaskbtn = document.querySelector('#add-task');

addtaskbtn.addEventListener('click',()=>{
     const title = document.querySelector('#title').value;
     const desc = document.querySelector('#desc').value;
    
     const div = document.createElement("div");
     div.classList.add('task');
     div.setAttribute('draggable',true);

     div.innerHTML= `
     <h3>${title}</h3>
     <p>${desc}</p>
     <button>Delete</button>
     `
     col.forEach(cols =>{
         const tasks = cols.querySelectorAll('.task');
         const count = cols.querySelector('.right');
         taskdata[cols.id]=Array.from(tasks).map(t=>{
            return {
                title : t.querySelector("h3").innerText,
                desc : t.querySelector("p").innerText
            }
        })
        count.innerText = tasks.length; 
    });
     div.addEventListener('drag',(e)=>{
        dragElement=div;
     })
     

    todo.appendChild(div);
    modal.classList.remove('active');
});