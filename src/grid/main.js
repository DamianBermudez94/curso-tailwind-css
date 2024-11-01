const darkModeInput = document.querySelector('#darkmode');
console.log("hola mundo",darkModeInput);

darkModeInput.addEventListener("click",()=>{
    document.documentElement.classList.toggle('dark');
})

console.log("hola mundo",darkModeInput);