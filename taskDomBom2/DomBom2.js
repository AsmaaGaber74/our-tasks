let theinput=document.querySelector('.add-task input');
let theaddbutton=document.querySelector('.add-task span');
let taskcountier=document.querySelector('.task-content');
let taskscount=document.querySelector('.task-count span');
let taskcompleted=document.querySelector('.task-completed span');

window.onload = function()
{
    theinput.focus();
};

theaddbutton.onclick = function()
{
    
    if(theinput.value === '')
        {
            console.log("empty");
        }
    else
        {
            let nottaskmsg=document.querySelector('.no-taske');
            if(document.body.contains(document.querySelector('.no-taske')))
            {
            
               nottaskmsg.remove();
              }
        
    //creat main span
    let mainspan=document.createElement('span');
    //creat deleat span
    let  deleatspan=document.createElement('span');
    //creat main span text
    let text=document.createTextNode(theinput.value);
    
    //creat deleat text
     let delettext=document.createTextNode('delet');
    //append text in main span
    mainspan.appendChild(text);
    //apppend text in delet span
    deleatspan.appendChild(delettext);
    //add class to main span
    mainspan.className='task-box';
    //add class to delet span
     deleatspan.className='delettask';
    //append delet span in main span
    mainspan.appendChild(deleatspan);
    //add mainspan to continer
    taskcountier.appendChild(mainspan);
    theinput.value='';
    theinput.focus();
    
    calculatetasks();
   }
    calculatetasks();
 };

document.addEventListener('click', function(e)
{
    if(e.target.className=='delettask')
        {
            e.target.parentNode.remove();
            
            if (taskcountier.childElementCount==0)
                {
                    creatnotasks();
                }
            
        }
    
    if(e.target.classList.contains('task-box'))
        {
            e.target.classList.toggle("finished");
        }
    
    calculatetasks();
});


function creatnotasks()
{
    let msgspan=document.createElement('span');
    let msgtext=document.createTextNode('no messege to show');
       msgspan.className=('no-taske');
       msgspan.appendChild(msgtext);
       taskcountier.appendChild(msgspan);
    calculatetasks();
}
function calculatetasks()
{
     taskscount.innerHTML=document.querySelectorAll('.task-content .task-box').length;
      taskcompleted.innerHTML=document.querySelectorAll('.task-content .finished').length;
};