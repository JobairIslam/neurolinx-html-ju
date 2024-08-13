// AOS ANIMATION
AOS.init();

// Menu
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Video
document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.querySelector(".play-btn");
  const videoContainer = document.getElementById("videoContainer");
  const closeBtn = document.getElementById("closeBtn");
  const video = document.getElementById("video");

  if (playBtn && videoContainer && closeBtn && video) {
    playBtn.addEventListener("click", function () {
      videoContainer.classList.remove("hidden");
      video.play();
    });

    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      videoContainer.classList.add("hidden");
      video.pause();
      video.currentTime = 0;
    });
  }
});

// FAQ
function toggleAccordion(index) {
  var accordions = document.getElementsByClassName("according");
  for (let i = 0; i < accordions.length; i++) {
    var content = accordions[i].getElementsByClassName("according-content")[0];
    var svg = accordions[i].querySelector(".according-header img");
    if (i === index) {
      content.style.display =
        content.style.display === "block" ? "none" : "block";
      svg.classList.toggle("rotate-90");
      accordions[i].classList.add("bg-faq-card-item");
    } else {
      content.style.display = "none";
      svg.classList.remove("rotate-90");
    }
  }
}
toggleAccordion(0);
