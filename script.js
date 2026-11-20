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

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const input = document.getElementById("nome-faca-parte");
    const none = input.value.trim();

    if (!nome) {
        alert("Por favor, digite seu nome!");
        form.remove();

    }

    btnFacaParte.parentElement.insertAdjacentElement("afterend", form);
    document.getElementById("nome-faca-parte"). focus();

}

const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");
const anterior = document.querySelector(".prev");
const proximo = document.querySelector(".next");

let atual = 0;

function mostrarSlide(numero) {
    slides[atual].classList.remove("active");
    indicadores[atual].classList.remove("active"); 
    
    atual = numero;

    slides[atual].classList.add("active")
    indicadores[atual].classList.add("active");
}



 </input>




});


