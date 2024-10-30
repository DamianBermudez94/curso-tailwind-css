const darkMode = document.querySelector('#darkmode');
console.log(darkMode);

darkMode.addEventListener("click",()=>{
    document.documentElement.classList.toggle('dark');
})
alert("Hola mundo!")