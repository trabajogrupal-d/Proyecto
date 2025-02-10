document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactoForm");
    const mensajeExito = document.getElementById("mensajeExito");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        setTimeout(() => {
            mensajeExito.classList.remove("oculto");
            form.reset();
        }, 1000);
    });
});
