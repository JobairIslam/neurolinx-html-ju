function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Mega menu for phone: toggle between Resources and Company
function toggleSubMenu(menu) {
  const resourcesMenu = document.getElementById("resources-menu");
  const companyMenu = document.getElementById("company-menu");

  // If "Resources" is clicked
  if (menu === "resources") {
    // Close the company menu if it's open
    if (!companyMenu.classList.contains("hidden")) {
      companyMenu.classList.add("hidden");
      const companyArrow =
        companyMenu.previousElementSibling.querySelector("svg");
      if (companyArrow) {
        companyArrow.classList.remove("rotate-180");
      }
    }

    // Toggle the resources menu
    resourcesMenu.classList.toggle("hidden");
    const resourcesArrow =
      resourcesMenu.previousElementSibling.querySelector("svg");
    if (resourcesArrow) {
      resourcesArrow.classList.toggle("rotate-180");
    }
  }
  // If "Company" is clicked
  else if (menu === "company") {
    // Close the resources menu if it's open
    if (!resourcesMenu.classList.contains("hidden")) {
      resourcesMenu.classList.add("hidden");
      const resourcesArrow =
        resourcesMenu.previousElementSibling.querySelector("svg");
      if (resourcesArrow) {
        resourcesArrow.classList.remove("rotate-180");
      }
    }

    // Toggle the company menu
    companyMenu.classList.toggle("hidden");
    const companyArrow =
      companyMenu.previousElementSibling.querySelector("svg");
    if (companyArrow) {
      companyArrow.classList.toggle("rotate-180");
    }
  }
}

// Close the mobile menu when a mega menu link is clicked
function hideMenuOnLinkClick() {
  const menu = document.getElementById("mobile-menu");

  // Select all links inside the mega menus (Resources and Company)
  const megaMenuLinks = document.querySelectorAll(
    "#resources-menu a, #company-menu a"
  );

  megaMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden"); // Hide the mobile menu when clicking a mega menu link
    });
  });
}

// Call this function when the page loads
document.addEventListener("DOMContentLoaded", hideMenuOnLinkClick);

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

AOS.init({
  duration: 600, // Animation duration (1500ms)
  offset: 200, // Offset (200px from the trigger point)
  easing: "ease-in-out", // Easing function
  delay: 100, // Delay before animation starts
  once: false, // Animation happens only once
  mirror: false, // Do not reverse animation when scrolling out of view
  anchorPlacement: "top-center", // Trigger animation when the top of the element hits the center of the viewport
});
