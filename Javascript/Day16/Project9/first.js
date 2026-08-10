// hme jo jo data form ke andar bhejna hai usko select krke uski value chaiye
const form = document.querySelector('form');
const allTask=document.querySelector('#allTask');
const input=document.querySelector('input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text=input.value.trim();
    if(text==""){
        return;
    }
    // hjo task add krenge vo ,delete task , done task in teeno ko ek container me daalenge
    const parent=document.createElement('div');
    parent.style.marginTop="10px";
    const task=document.createElement('span');
    task.textContent= text;
    task.style.marginRight="20px";

    const deleteButton= document.createElement('button');
    deleteButton.textContent="Delete";
    deleteButton.style.width="50px";
    deleteButton.style.marginRight="20px";

    const doneButton = document.createElement('button');
    doneButton.textContent="done";
    doneButton.style.width="50px";
    doneButton.style.marginRight="10px";

    // now teeno button ko parent div ke andar dalna hai

    parent.append(task,deleteButton,doneButton);
    allTask.append(parent);

    // Now when user click on done button
    doneButton.addEventListener('click',(e)=>{
        task.style.color='grey';
        task.style.textDecoration='line-through';
    });

    // Now when user clicks on delete button
    deleteButton.addEventListener('click',(e)=>{
        parent.remove();
    });
    form.reset();
    // input values ko clear kr deta hai jb form submit ho jata hai.
});