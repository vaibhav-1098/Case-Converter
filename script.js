const text=document.querySelector("textarea");
const display=document.querySelector(".display");

const capitalBtn=document.getElementById("capitalBtn");
const smallBtn=document.getElementById("smallBtn");
const copyBtn=document.getElementById("copyBtn");
const resetBtn=document.getElementById("resetBtn");

// capital 
capitalBtn.addEventListener('click',( )=>{
    display.innerHTML=text.value.toUpperCase( );
})

// small 
smallBtn.addEventListener('click',( )=>{
    display.innerHTML=text.value.toLowerCase( );
})

// reset 
resetBtn.addEventListener('click',( )=>{
    text.value="";
    display.innerHTML="";
})

// copy 
copyBtn.addEventListener('click',( )=>{
    navigator.clipboard.writeText(display.innerHTML);

    copyBtn.innerHTML="Copied!"

    setTimeout(( )=>{
        copyBtn.innerHTML="Copy 🖨";
    },500)

});

