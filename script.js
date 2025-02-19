function headerScroll() {
  document.addEventListener("scroll", function () {
    const header = document.querySelector(".barreheader");
    const section = document.getElementById("Apropos");
    const rect = section.getBoundingClientRect();

    if (rect.top <= 0) {
      header.classList.add("barreheader2");
    } else {
      header.classList.remove("barreheader2");
    }
  });
}

function carouselDesc() {
  const images = document.querySelectorAll(".imgcontainer img");
  let currentIndex = 0;
  const descriptions = document.querySelectorAll(".description");

  function showImage(index) {
    images[currentIndex].classList.remove("active");
    descriptions[currentIndex].classList.remove("descactive");
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].classList.add("active");
    descriptions[currentIndex].classList.add("descactive");
  }

  document.querySelector(".gauche").addEventListener("click", () => {
    showImage(currentIndex - 1);
  });

  document.querySelector(".droite").addEventListener("click", () => {
    showImage(currentIndex + 1);
  });
}

async function btnMail() {
  const btn = document.getElementById("mail");
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(btn.value);
    afficherMessage();
  });
}

function afficherMessage() {
  const message = document.getElementById("mailcopie");
  message.classList.add("ok");

  setTimeout(() => {
    message.classList.remove("ok");
  }, 2000);
}

function smoothScroll() {
  document.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault(); // Empêche le scroll brut par défaut
      window.scrollBy({
        top: event.deltaY * 2, // Ajuste la vitesse du scroll
        behavior: "smooth", // Rend le scroll fluide
      });
    },
    { passive: false }
  ); // Permet de bloquer le comportement par défaut
}

function navActive() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li");

  function updateActivelink() {
    let index = sections.length;

    while (--index >= 0 && window.scrollY + 100 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    if (index >= 0) {
      navLinks[index].classList.add("active");
    }
  }
  window.addEventListener("scroll", updateActivelink);
}

function main() {
  navActive();
  smoothScroll();
  carouselDesc();
  headerScroll();
  btnMail();
}

document.addEventListener("DOMContentLoaded", main);
