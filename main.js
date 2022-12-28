const modal= document.getElementById('modal');
const fotterContainer=document.querySelectorAll('.fotter_container');
const buttonModal=document.getElementById("buttonModal");
const radio=document.querySelectorAll(".radio");

radio.forEach(item=>{
    item.style.display="none";
})

let state=false;
fotterContainer.forEach(item=>{
    item.addEventListener("click",()=>{
        radio[item.id].checked=true
        if(state==false){
            modal.classList.remove("hidden");
            modal.classList.add("visible");
        }else{
            modal.classList.add("hidden");
            modal.classList.remove("visible");
        }
        state=!state;
    })
});

buttonModal.addEventListener("click",()=>{
    modal.classList.add("hidden");
    modal.classList.remove("visible");
});
