document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.collapsible');
  sections.forEach(sec => {
    const header = sec.querySelector('h2');
    header.addEventListener('click', () => {
      sec.classList.toggle('active');
    });
  });
});
