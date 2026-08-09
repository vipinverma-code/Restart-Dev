const form= document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("hello");
    const income = parseInt(document.querySelector('#income').value);
    const result=document.querySelector('h2');
    let totalTax= 0;
    if(income<=1200000){
        totalTax=0;
    }
    else if(income<=1600000){
        totalTax=(income-1200000)*0.15;
    }
    else if(income<=200000){
        totalTax=(income-1600000)*0.20 + 60000;
    }
    else if(income<=2400000){
        totalTax=(income-2000000)*0.25+80000+60000;
    }
    else{
        totalTax=(income-2400000)*0.30+100000+80000+60000;
    }
    result.textContent=`Total Tax: ${totalTax}`;
    form.reset();

});
console.log("Js loaded");