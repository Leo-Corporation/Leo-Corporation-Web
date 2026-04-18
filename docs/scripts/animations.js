/**
 *
 * @param {string} elementId The element to "track".
 * @param {string} classToApply The class to apply to the element.
 */
function animateOnView(elementId, classToApply) {
  const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add(classToApply);
      }
    });
  });
  observer.observe(document.getElementById(elementId));
}

animateOnView("new-soft-item-1", "slideInUp");
animateOnView("new-soft-item-2", "slideInUp");
animateOnView("new-soft-item-3", "slideInUp");
animateOnView("opensource-item-1", "slideInUp");
animateOnView("opensource-item-2", "slideInUp");
animateOnView("opensource-item-3", "slideInUp");
