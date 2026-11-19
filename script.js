const botao =
document.querySelector(".btn2");
const texto =
document.querySelector("#textoNovo")

botao.addEventListener("mouseenter" , () => {
texto.display = "block";


})

botao.addEventListener("mouseleave", () =>{

texto.computedStyleMap.display = "none";



})