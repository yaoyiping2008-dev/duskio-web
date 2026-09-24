(() => {
  "use strict";

  /**
   * App Store URL
   * Leave empty until the production listing exists.
   * Example: "https://apps.apple.com/app/duskio-dark-mode-for-safari/idXXXXXXXX"
   */
  const APP_STORE_URL = "";

  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const header = document.querySelector(".site-header");

  function setNavOpen(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("nav-open", open);
  }

  function applyAppStoreLinks() {
    const links = document.querySelectorAll("[data-app-store]");
    links.forEach((el) => {
      const short = el.getAttribute("data-store-label") === "short";
      if (APP_STORE_URL) {
        el.setAttribute("href", APP_STORE_URL);
        el.setAttribute("rel", "noopener");
        el.removeAttribute("aria-disabled");
        el.removeAttribute("tabindex");
        el.classList.remove("is-disabled");
        el.textContent = short ? "Download on the App Store" : "Download on the App Store";
      } else {
        el.removeAttribute("href");
        el.setAttribute("aria-disabled", "true");
        el.setAttribute("tabindex", "-1");
        el.classList.add("is-disabled");
        el.textContent = short ? "Coming Soon" : "Coming Soon on the App Store";
      }
    });
  }

  applyAppStoreLinks();

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      setNavOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setNavOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setNavOpen(false);
    });

    document.addEventListener("click", (event) => {
      if (!header) return;
      if (nav.classList.contains("is-open") && !header.contains(event.target)) {
        setNavOpen(false);
      }
    });
  }
})();
