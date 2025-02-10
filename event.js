function toggleInfo(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function toggleCustomization() {
    const panel = document.getElementById('customizationPanel');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}

function applyColors() {
    const bodyColor = document.getElementById('bodyColor').value;
    const headerColor = document.getElementById('headerColor').value;
    const footerColor = document.getElementById('footerColor').value;

    document.body.style.backgroundColor = bodyColor;
    document.querySelector('header').style.backgroundColor = headerColor;
    document.querySelector('footer').style.backgroundColor = footerColor;
}

document.addEventListener("DOMContentLoaded", function() {
    const subscribeBtn = document.querySelector('.suscripcion button');
    subscribeBtn.addEventListener('click', function() {
        alert('¡Gracias por suscribirte! Te mantendremos informado.');
    });

    const moreInfoBtn = document.querySelector('.btn-mas-info');
    moreInfoBtn.addEventListener('click', function() {
        alert('¡Explora más sobre eventos tecnológicos en nuestra página!');
    });
});
