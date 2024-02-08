var logo = document.getElementById("logo-icon");

var originalSrc = logo.src;

logo.addEventListener("mouseenter", function () {
    // Zmiana obrazka po najechaniu
    setTimeout(function () {
        logo.src = "../png/kapiele.png"; // Ścieżka do nowego obrazka
    }, 100); // Opóźnienie zmiany obrazka o 100 milisekund  
});

logo.addEventListener("mouseleave", function () {
    // Powrót do oryginalnej ścieżki obrazka
    setTimeout(function () {
        logo.src = originalSrc;
    }, 100);
});




document.getElementById('hamburger-menu').addEventListener('click', function () {
    var nav = document.getElementById('nav-bar');
    var isOpen = nav.classList.contains('visible');

    if (!isOpen) {
        nav.classList.add('visible');
        nav.classList.add('filling');
    } else {
        nav.classList.remove('filling');
        setTimeout(function () {
            nav.classList.remove('visible');
        }, 200); // Czas trwania animacji fill
    }
});