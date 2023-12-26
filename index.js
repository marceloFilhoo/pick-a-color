const cores= ['red', 'blue', "white" ,'yellow', 'purple', 'green']
const btn = document.getElementById("btn");
const cor = document.querySelector(".color");

btn.addEventListener('click', function(){
    let numero = random();
    document.body.style.background = cores[numero]
    cor.textContent = cores[numero]
})

function random(){
    return Math.floor(Math.random() * cores.length)
}