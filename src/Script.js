/* SAVOIL INDIA — interactions only (no layout generation) */
(function () {
  "use strict";

  /* ---- Sticky header ---- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-solid", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile drawer ---- */
  var drawer = document.getElementById("mobileDrawer");
  var openBtn = document.querySelector("[data-drawer-open]");
  var closeBtn = document.querySelector("[data-drawer-close]");
  function setDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle("open", open);
    document.body.classList.toggle("no-scroll", open);
  }
  if (openBtn) openBtn.addEventListener("click", function () { setDrawer(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setDrawer(false); });
  if (drawer) {
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setDrawer(false); });
    });
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setDrawer(false); closeLightbox(); } });

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseInt(el.getAttribute("data-delay") || "0", 10);
        setTimeout(function () { el.classList.add("revealed"); }, delay);
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("revealed"); });
  }

  /* ---- Counters ---- */
  var counters = document.querySelectorAll("[data-count]");
  function runCounter(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
    var duration = 1600, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (counters.length && "IntersectionObserver" in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { runCounter(entry.target); co.unobserve(entry.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---- Product filter + search ---- */
  var filterBtns = document.querySelectorAll("[data-filter]");
  var searchInput = document.getElementById("productSearch");
  var items = document.querySelectorAll("[data-product]");
  var emptyNote = document.getElementById("emptyNote");
  var activeFilter = "all";

  function applyFilter() {
    var q = (searchInput && searchInput.value || "").trim().toLowerCase();
    var visible = 0;
    items.forEach(function (item) {
      var cat = item.getAttribute("data-category") || "";
      var text = (item.getAttribute("data-keywords") || item.textContent || "").toLowerCase();
      var match = (activeFilter === "all" || cat === activeFilter) && (!q || text.indexOf(q) > -1);
      item.classList.toggle("is-hidden", !match);
      if (match) visible++;
    });
    if (emptyNote) emptyNote.classList.toggle("show", visible === 0);
  }
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      applyFilter();
    });
  });
  if (searchInput) searchInput.addEventListener("input", applyFilter);
  if (items.length) {
    var hash = window.location.hash.replace("#cat-", "");
    if (hash) {
      var preset = document.querySelector('[data-filter="' + hash + '"]');
      if (preset) preset.click();
    }
  }

  /* ---- Lightbox ---- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = lightbox ? lightbox.querySelector("img") : null;
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
  document.querySelectorAll("[data-lightbox]").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      if (!lightbox || !lightboxImg) return;
      var img = trigger.querySelector("img");
      lightboxImg.src = trigger.getAttribute("data-lightbox") || (img && img.src) || "";
      lightboxImg.alt = (img && img.alt) || "Gallery image";
      lightbox.classList.add("open");
      document.body.classList.add("no-scroll");
    });
  });
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target.hasAttribute("data-lb-close")) closeLightbox();
    });
  }

  /* ---- Product detail thumbnails ---- */
  var mainImg = document.getElementById("pdMainImage");
  document.querySelectorAll(".pd-thumb").forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      if (!mainImg) return;
      document.querySelectorAll(".pd-thumb").forEach(function (t) { t.classList.remove("active"); });
      thumb.classList.add("active");
      var src = thumb.getAttribute("data-src");
      if (src) { mainImg.src = src; mainImg.alt = thumb.getAttribute("data-alt") || mainImg.alt; }
    });
  });

  /* ---- Contact form validation ---- */
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add("was-validated");
      var status = document.getElementById("formStatus");
      if (form.checkValidity() && status) {
        status.textContent = "Thank you. Your enquiry has been recorded and our team will respond shortly.";
        status.classList.add("show");
        form.reset();
        form.classList.remove("was-validated");
      }
    });
  }

  /* ---- Newsletter (placeholder acknowledgement) ---- */
  document.querySelectorAll(".news-form").forEach(function (nf) {
    nf.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = nf.querySelector("input");
      if (input && input.checkValidity()) {
        input.value = "";
        input.placeholder = "Thank you — you're on the list";
      }
    });
  });
})();


document.addEventListener("DOMContentLoaded", function () {

    // Current page name
    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "" || currentPage === "/") {
        currentPage = "index.php";
    }

    // Select all desktop navigation links
    document.querySelectorAll(".nav-x a").forEach(function (link) {

        let linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });

    // Mobile navigation active link
    document.querySelectorAll(".mobile-drawer nav a").forEach(function (link) {

        let linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });

});
