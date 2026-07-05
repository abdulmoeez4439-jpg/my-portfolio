// ============================================================
// PORTFOLIO SCRIPT
// Handles: mobile nav toggle, active nav-link highlighting,
// animated skill bars, and the contact form (demo only).
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  /* ---- Highlight the current page in the nav ---- */
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) link.classList.add("active");
  });

  /* ---- Animate skill bars into view (skills.html) ---- */
  const bars = document.querySelectorAll(".skill-bar-fill");
  if (bars.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target.dataset.level || "0";
            entry.target.style.width = target + "%";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((bar) => {
      bar.style.width = "0%";
      bar.style.transition = "width 1s ease";
      observer.observe(bar);
    });
  }

  /* ---- Contact form (demo — replace with a real endpoint) ----
     TODO: Hook this up to a real service (Formspree, EmailJS,
     your own backend, etc.) before going live. Right now it
     only shows a confirmation message and does not send email. */
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = document.querySelector("#form-status");
      if (status) {
        status.textContent = "Thanks! Your message has been noted (connect a real form service to actually send it).";
      }
      form.reset();
    });
  }

  /* ---- Footer year auto-update ---- */
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});