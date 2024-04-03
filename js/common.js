//funkcja zmieniania logo po najechaniu

var logo = document.getElementById("logo-icon");

var originalSrc = logo.src;

logo.addEventListener("mouseenter", function () {
    // Zmiana obrazka po najechaniu
    setTimeout(function () {
        logo.src = "../png/kapiele.png";
    }, 100);
});

logo.addEventListener("mouseleave", function () {
    // Powrót do oryginalnej ścieżki obrazka
    setTimeout(function () {
        logo.src = originalSrc;
    }, 100);
});


// funkcja otwierania hamburger menu

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

//funkcja full screen w galerii

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(imgElement) {
    fullImgBox.style.display = "flex";
    fullImg.src = imgElement.src;
}

function closeFullImg() {
    fullImgBox.style.display = "none";


}

function dontCloseFullImg(event) {
    event.stopPropagation();
}





// 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));





// Image Slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}