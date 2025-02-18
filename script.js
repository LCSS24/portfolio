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

function main() {
  carouselDesc();
  headerScroll();
}

document.addEventListener("DOMContentLoaded", main);
