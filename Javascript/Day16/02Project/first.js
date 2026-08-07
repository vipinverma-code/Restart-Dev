const element=document.getElementById("parent");
element.addEventListener('click',(e)=>{
    document.body.style.backgroundColor=e.target.id;
});