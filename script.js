const mailencodé = window.btoa("lucas.carpentier24@gmail.com")

function headerScroll() {
  document.addEventListener("scroll", function () {
    const header = document.querySelector(".barreheader");
    const section = document.getElementById("Apropos");
    const rect = section.getBoundingClientRect();
    const checkbox = document.getElementById("darkmode");

    if (checkbox.checked === false) {
      if (rect.top <= 0) {
        header.classList.add("barreheader2");
      } else {
        header.classList.remove("barreheader2");
      }
    } else {
      header.classList.add("barreheader2");
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

function btnMail() {
  const btn = document.getElementById("mail");
  btn.href = `mailto:${mailencodé}`;
  btn.addEventListener("click", () => {
    btn.href = `mailto:${atob(mailencodé)}`;
    setTimeout(() => {
      btn.href = ""
    }, 100);

  });
}

// function smoothScroll() {
//   document.addEventListener(
//     "wheel",
//     (event) => {
//       event.preventDefault(); // Empêche le scroll brut par défaut
//       window.scrollBy({
//         top: event.deltaY * 2, // Ajuste la vitesse du scroll
//         behavior: "smooth", // Rend le scroll fluide
//       });
//     },
//     { passive: false }
//   ); // Permet de bloquer le comportement par défaut
// }

function navActive() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li");

  function updateActivelink() {
    let index = sections.length;

    while (--index >= 0 && window.scrollY + 100 < sections[index].offsetTop) { }

    navLinks.forEach((link) => link.classList.remove("active"));
    if (index >= 0) {
      navLinks[index].classList.add("active");
    }
  }
  window.addEventListener("scroll", updateActivelink);
}

function survolNav() {
  const liens = document.querySelectorAll("nav ul li");
  const survol = document.querySelector(".survol");
  const header = document.querySelector("nav");

  liens.forEach((lien) => {
    lien.addEventListener("mouseover", () => {
      const rect2 = header.getBoundingClientRect();
      const rect = lien.getBoundingClientRect();
      survol.style.left = `${rect.left - rect2.left}px`;
      survol.style.width = `${rect.width}px`;
      survol.style.opacity = "1";
    });

    lien.addEventListener("mouseout", () => {
      survol.style.opacity = "0";
    });
  });
}

function darkMode() {
  const checkbox = document.getElementById("darkmode");
  const root = document.documentElement;
  const moon = document.querySelector(".fa-moon");
  const sun = document.querySelector(".fa-sun");
  const header = document.querySelector(".barreheader");
  sun.style.display = "none";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      sun.style.display = "block";
      moon.style.display = "none";
      header.classList.add("barreheader2");
      root.style.setProperty("--blanc", "rgb(58, 58, 58)");
      root.style.setProperty("--texte", "rgb(206, 206, 206)");
      root.style.setProperty("--btnbackground", "#5a5a5a");
      root.style.setProperty("--active", "#B1B1B1");
      root.style.setProperty("--survol", "rgba(177, 177, 177, 0.5)");
      root.style.setProperty("--ul", "rgba(146, 146, 146, 0.5)");
    } else {
      sun.style.display = "none";
      moon.style.display = "flex";
      header.classList.remove("barreheader2");
      root.style.setProperty("--btnbackground", "rgb(255, 255, 255)");
      root.style.setProperty("--blanc", "#f1f9f8");
      root.style.setProperty("--texte", "#1c141f");
      root.style.setProperty("--active", "rgba(112, 112, 112, 1)");
      root.style.setProperty("--survol", "rgba(138, 138, 138, 0.5)");
      root.style.setProperty("--ul", "rgba(112, 112, 112, 0.205)");
    }
  });
}

function main() {
  darkMode();
  navActive();
  // smoothScroll();
  carouselDesc();
  headerScroll();
  btnMail();
  survolNav();
}

document.addEventListener("DOMContentLoaded", main);
