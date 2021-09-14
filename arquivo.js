alert('Olá este é meu site curriculo espero que gostem :)')
const radios1 = document.getElementById('box1')
const radios2 = document.getElementById('box2')
const texto = document.getElementById('texto1')

function capturar1(){
    if(radios1.checked)
      alert('Obrigado pelo feedback')   
}
 
function capturar2(){
    if(radios2.checked)
    var resultado = window.prompt('O que pode melhorar?')
    texto.innerHTML = (resultado)
   
}