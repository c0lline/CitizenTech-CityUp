const boxPublis = document.querySelectorAll(".publico-box");

boxPublis.forEach(box => {
    const button = box.querySelector(".box3");
    button.addEventListener("click", () => {
        box.classList.toggle("active");
    });
});