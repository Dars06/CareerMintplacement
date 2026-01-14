// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// Counter animation
const counters = document.querySelectorAll(".count");

counters.forEach(counter => {
  const target = +counter.dataset.target;
  let current = 0;

  const update = () => {
    const increment = target / 100;
    current += increment;
    if (current < target) {
      counter.innerText = Math.ceil(current);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
});
