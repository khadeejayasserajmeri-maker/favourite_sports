const counters = document.querySelectorAll('[data-target]');

counters.forEach((counter) => {
  const target = Number(counter.getAttribute('data-target'));
  let start = 0;

  const updateCount = () => {
    const increment = target / 70;
    start += increment;

    if (start < target) {
      counter.textContent = `${Math.ceil(start)}`;
      requestAnimationFrame(updateCount);
    } else {
      counter.textContent = target;
    }
  };

  updateCount();
});
