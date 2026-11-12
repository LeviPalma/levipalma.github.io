const sidebar = document.querySelector('.sidebar');
    const toggle = document.querySelector('.menu-toggle');

    toggle.addEventListener('click', () => {
      const open = sidebar.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });

    document.querySelectorAll('.side-nav a').forEach((link) => {
      link.addEventListener('click', () => sidebar.classList.remove('open'));
    });

    const glow = document.querySelector('.cursor-glow');
    window.addEventListener('pointermove', (event) => {
      glow.style.transform = `translate(${event.clientX - 100}px, ${event.clientY - 100}px)`;
    });

    window.addEventListener('scroll', () => {
      document.querySelector('.hero-art').style.transform = `translateY(${window.scrollY * 0.14}px)`;
    }, { passive: true });

    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    }), { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));