  const header = document.getElementById('sticky-header');
  const stickyOffset = header.offsetTop;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= stickyOffset) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
  });
