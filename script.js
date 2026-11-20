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

const btnFacaparte = document.querySelector(".btn2");
btnFacaparte.addEventListener("click", (e) => {

    e.preventDefault();

    if (document.getElementById("form-faca-parte")) {

     document.getElementById("nome-faca-parte").focus();
     return;

    }

const form = document.createElement("form");
form.id = "form-faca-parte";
form.innerHTML =
 <input type="text" id="nome-faca-parte" placeholder="Digite seu nome">
 <button type="submit">Confirmar</button>
 `;
 





});


