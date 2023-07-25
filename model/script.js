//Our  first UI =user interface WORK
//we must work with classes
const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const btnCloseModal=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

for(let i=0; i<btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener("click", function(){
// console.log('button clicked');//each of button  has their own event listener. Because OF HIDDEN CLASS  WE DONT SEE  MODAL BOX
modal.classList.remove("hidden");//we must remove hidden class to see modal when we press th button
overlay.classList.remove("hidden");//we remove overlay


})

//now we work on closing window button
//we do enent listener, we neew to do opposite. we have get back glasses
const closeModal=function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}//we will call this function
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal)//so both ovelay an dmodal are hidden


//now lets handle keypress esc events. we will press ecp and window will close
//we usually have keydown, keyup, and keypress. keypress happens when we press, it works

// document.addEventListener("keypress", function(){
//     console.log('key was pressed');//how we know which key is pressed. information  should be stored  in event, which is gonna  happen when key is pressed

// })

document.addEventListener("keydown", function(e){
    // console.log('key was pressed');//how we know which key is pressed. information  should be stored  in event, which is gonna  happen when key is pressed
    console.log(e.key);//whatever key is pressed, we get info about key. we can use.key event
    if(e.key==='Escape') console.log("Esc was pressed")//for showing
    if(e.key==="Escape") {
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }

})

