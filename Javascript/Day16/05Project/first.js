// const div=document.querySelector('div');
// const time=new Date();
// div.textContent=time.toLocaleTimeString();

function clock(){
    const div=document.querySelector('div');
const time=new Date();
div.textContent=time.toLocaleTimeString();
}
clock();
setInterval(clock,1000);

// setInterval(()=>{
//         const div=document.querySelector('div');
// const time=new Date();
// div.textContent=time.toLocaleTimeString();
// },1000);
