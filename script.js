let display = document.getElementById('display');
let buttons =Array.from((document.getElementsByClassName("button")));
buttons.map(element =>{
    element.addEventListener('click',(e)=>{
         switch(e.target.innerText){
             case  'Clear':
                 display.innerText="";
                 break;
             case 'Back' :
                 display.innerText = display.innerText.slice(0,-1);
                 break;
             case "Enter":
                 try{
                    display.innerText=eval(display.innerText);
                 }
                 catch{
                     alert("Please Enter valid input");
                     display.innerText="";
                 }
                 break;
             default:
                 display.innerText+=e.target.innerText;
         }
    })
});

