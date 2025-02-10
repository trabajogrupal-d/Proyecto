document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente.");
});


function toggleCustomization() {
    const panel = document.getElementById("customizationPanel");
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
}

function applyColors() {
    const bodyColor = document.getElementById("bodyColor").value;
    const headerColor = document.getElementById("headerColor").value;
    const footerColor = document.getElementById("footerColor").value;

    if (bodyColor) document.body.style.backgroundColor = bodyColor;
    if (headerColor) document.querySelector("header").style.backgroundColor = headerColor;
    if (footerColor) document.querySelector("footer").style.backgroundColor = footerColor;
}
