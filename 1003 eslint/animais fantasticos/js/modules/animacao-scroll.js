export default function initScrollAnimate() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  function animateScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowFraction < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  if (sections.length) {
    const windowFraction = window.innerHeight * 0.6;
    animateScroll();
    window.addEventListener("scroll", animateScroll);
  }
}
