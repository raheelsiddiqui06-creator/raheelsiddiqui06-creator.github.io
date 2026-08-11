document.getElementById('year').textContent = new Date().getFullYear();

// ---- Resume dropdown ----
const dropdown = document.querySelector('.dropdown');
const toggle = document.getElementById('resumeToggle');

function closeDropdown(){
  dropdown.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}
function openDropdown(){
  dropdown.classList.add('open');
  toggle.setAttribute('aria-expanded', 'true');
}

toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) closeDropdown();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDropdown();
});

// ---- Mobile nav ----
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav when a plain link is tapped
mainNav.querySelectorAll('a:not(.dropdown-menu a)').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Close mobile nav after a resume download tap too
mainNav.querySelectorAll('.dropdown-menu a').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      closeDropdown();
    }, 150);
  });
});
