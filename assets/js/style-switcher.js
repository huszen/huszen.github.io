// toggle style switcher
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle('open');
});

// hide style switch on scrool
window.addEventListener('mousewheel', () => {
  if (document.querySelector('.style-switcher').classList.contains('open')) {
    document.querySelector('.style-switcher').classList.remove('open');
  }
});

// theme colors
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute('title')) {
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true');
    }
  });
}

// // theme light and dark mode
// const dayNight = document.querySelector('.day-night');
// dayNight.addEventListener('click', () => {
//   dayNight.querySelector('i').classList.toggle('fa-sun');
//   dayNight.querySelector('i').classList.toggle('fa-moon');
//   document.body.classList.toggle('dark');
// });
// window.addEventListener('load', () => {
//   if (document.body.classList.contains('dark')) {
//     dayNight.querySelector('i').classList.add('fa-sun');
//   } else {
//     dayNight.querySelector('i').classList.add('fa-moon');
//   }
// });

// // theme light and dark mode
// const dayNight = document.querySelector('.day-night');

// // Always start in dark mode
// document.body.classList.add('dark');

// dayNight.addEventListener('click', () => {
//   dayNight.querySelector('i').classList.toggle('fa-sun');
//   dayNight.querySelector('i').classList.toggle('fa-moon');
//   document.body.classList.toggle('dark');
// });

// window.addEventListener('load', () => {
//   if (document.body.classList.contains('dark')) {
//     dayNight.querySelector('i').classList.add('fa-sun');
//   } else {
//     dayNight.querySelector('i').classList.add('fa-moon');
//   }
// });

// theme light and dark mode
const dayNight = document.querySelector('.day-night');

// Load user preference from localStorage, or default to dark
if (localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme')) {
  document.body.classList.add('dark');
  localStorage.setItem('theme', 'dark'); // ensure it's stored
}

// Toggle theme on click
dayNight.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Save the choice to localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }

  // Update icons
  dayNight.querySelector('i').classList.toggle('fa-sun');
  dayNight.querySelector('i').classList.toggle('fa-moon');
});

// Set correct icon on load
window.addEventListener('load', () => {
  if (document.body.classList.contains('dark')) {
    dayNight.querySelector('i').classList.add('fa-sun');
  } else {
    dayNight.querySelector('i').classList.add('fa-moon');
  }
});
