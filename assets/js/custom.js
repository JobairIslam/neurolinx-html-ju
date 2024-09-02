// Menu
// function toggleMenu() {
//   const menu = document.getElementById("mobile-menu");
//   menu.classList.toggle("hidden");
// }
//mega menu for phone
document.addEventListener("DOMContentLoaded", () => {
  const resourcesLink = document.getElementById("resources-link");
  const companyLink = document.getElementById("company-link");

  resourcesLink.addEventListener("click", (event) => {
    event.preventDefault();
    toggleMenu("resources-menu", "resources-icon");
  });

  companyLink.addEventListener("click", (event) => {
    event.preventDefault();
    toggleMenu("company-menu", "company-icon");
  });
});

function toggleMenu(menuId, iconId) {
  const menu = document.getElementById("resources-megaMenu");
  const icon = document.getElementById("resources-icon");

  // Toggle the menu visibility
  menu.classList.toggle("show");

  // Rotate the icon
  if (menu.classList.contains("show")) {
    icon.style.transform = "rotate(180deg)";
  } else {
    icon.style.transform = "rotate(0deg)";
  }
}

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
  const accordingItems = document.querySelectorAll(".according");
  accordingItems.forEach((item, i) => {
    const content = item.querySelector(".according-content");
    const icon = item.querySelector(".according-header img");

    if (i === index) {
      item.classList.toggle("active");
      if (item.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0";
      }
    } else {
      item.classList.remove("active");
      content.style.maxHeight = "0";
    }
  });
}
