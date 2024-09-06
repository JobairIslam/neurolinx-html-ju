function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}
//mega menu for phone
function toggleSubMenu(menu) {
  const resourcesMenu = document.getElementById('resources-menu');
  const companyMenu = document.getElementById('company-menu');

  if (menu === 'resources') {
    resourcesMenu.classList.toggle('hidden');
    companyMenu.classList.add('hidden');
  } else if (menu === 'company') {
    companyMenu.classList.toggle('hidden');
    resourcesMenu.classList.add('hidden');
  }
}
//mobile menu
function toggleSubMenu(menuId) {
  const menu = document.getElementById(`${menuId}-menu`);
  const arrow = menu.previousElementSibling.querySelector('svg');

  // Toggle visibility of submenu
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex'); // Add flex when it's visible

  // Rotate arrow icon
  arrow.classList.toggle('rotate-180');
}
//at a same time
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}

function toggleSubMenu(menu) {
  const resourcesMenu = document.getElementById('resources-menu');
  const companyMenu = document.getElementById('company-menu');

  if (menu === 'resources') {
    // Close company if open and open resources
    companyMenu.classList.add('hidden');
    companyMenu.previousElementSibling
      .querySelector('svg')
      .classList.remove('rotate-180');

    resourcesMenu.classList.toggle('hidden');
    const resourcesArrow =
      resourcesMenu.previousElementSibling.querySelector('svg');
    resourcesArrow.classList.toggle('rotate-180');
  } else if (menu === 'company') {
    // Close resources if open and open company
    resourcesMenu.classList.add('hidden');
    resourcesMenu.previousElementSibling
      .querySelector('svg')
      .classList.remove('rotate-180');

    companyMenu.classList.toggle('hidden');
    const companyArrow =
      companyMenu.previousElementSibling.querySelector('svg');
    companyArrow.classList.toggle('rotate-180');
  }
}

// Video
document.addEventListener('DOMContentLoaded', function () {
  const playBtn = document.querySelector('.play-btn');
  const videoContainer = document.getElementById('videoContainer');
  const closeBtn = document.getElementById('closeBtn');
  const video = document.getElementById('video');
  if (playBtn && videoContainer && closeBtn && video) {
    playBtn.addEventListener('click', function () {
      videoContainer.classList.remove('hidden');
      video.play();
    });
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      videoContainer.classList.add('hidden');
      video.pause();
      video.currentTime = 0;
    });
  }
});
// FAQ
function toggleAccordion(index) {
  const accordingItems = document.querySelectorAll('.according');
  accordingItems.forEach((item, i) => {
    const content = item.querySelector('.according-content');
    const icon = item.querySelector('.according-header img');

    if (i === index) {
      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    } else {
      item.classList.remove('active');
      content.style.maxHeight = '0';
    }
  });
}

AOS.init({
  duration: 600, // Animation duration (1500ms)
  offset: 200, // Offset (200px from the trigger point)
  easing: 'ease-in-out', // Easing function
  delay: 100, // Delay before animation starts
  once: false, // Animation happens only once
  mirror: false, // Do not reverse animation when scrolling out of view
  anchorPlacement: 'top-center', // Trigger animation when the top of the element hits the center of the viewport
});
