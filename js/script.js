//update copyright year
const yearEl = document.querySelector(".year");
const curYear = new Date().getFullYear();
yearEl.textContent = curYear;

//////////////////////////////////////////////////////
//mobile nav

//vars
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const sectionHeroel = document.querySelector(".section-hero");

//reusable
const toggleClass = function (el = headerEl, cl = "nav-open") {
  el.classList.toggle(cl);
  console.log(el, cl);
};

btnNavEl.addEventListener("click", () => toggleClass());

onscroll = (e) => {
  if (headerEl.classList.contains("nav-open")) {
    toggleClass();
  }
};
/////////////////////////////////////////////////////
//sticky nav

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, // in viewpoert
    threshold: 0, //event as soon as not observed
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroel);

//////////////////////////////////////////////////////
// fix smooth scrolling

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link")) {
      console.log("main link");
      headerEl.classList.toggle("nav-open");
    }
  });
});
