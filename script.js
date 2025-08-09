document.addEventListener("DOMContentLoaded", () => {
  const todayEl = document.getElementById("today");
  const yearEl = document.getElementById("year");
  if (todayEl) {
    const d = new Date();
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    todayEl.textContent = `${dd}.${mm}.${yyyy}`;
  }
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navMenu.classList.remove("is-open")));
  }

  const copyPromoBtn = document.getElementById("copyPromo");
  if (copyPromoBtn) {
    copyPromoBtn.addEventListener("click", async (e) => {
      const code = e.currentTarget.getAttribute("data-code") || "";
      try {
        await navigator.clipboard.writeText(code);
        copyPromoBtn.textContent = `Скопировано: ${code}`;
        setTimeout(() => (copyPromoBtn.textContent = `Скопировать промокод: ${code}`), 1800);
      } catch {}
    });
  }

  document.querySelectorAll("[data-copy-target]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const selector = btn.getAttribute("data-copy-target");
      const input = selector ? document.querySelector(selector) : null;
      if (input && input.value) {
        try { await navigator.clipboard.writeText(input.value); } catch {}
        btn.textContent = "Скопировано";
        setTimeout(() => (btn.textContent = "Скопировать"), 1500);
      }
    });
  });
});