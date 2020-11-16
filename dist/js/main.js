const featuredEvents = document.querySelectorAll(".animate");

const isInViewPort = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  featuredEvents.forEach((item) => {
    if (isInViewPort(item)) {
      item.classList.add("show");
    }
  });

// Events
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);

// dropDown
const dropDown = document.querySelector(".dropdown");
const dropDownMenu = document.querySelector(".dropdown-menu");
const navbar = document.querySelector("#navbar");

dropDown.addEventListener("click", () => {
  if ((dropDownMenu.style.display = "none")) {
    dropDownMenu.style.display = "block";
  } else if ((dropDownMenu.style.display = "block")) {
    dropDownMenu.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  if (scrollY <= 90) {
    navbar.style.background = "rgba(0,0,0,0)";
    navbar.style.borderBottom = "0.2px solid rgba(245,245,245,0)";
  }
  if (scrollY > 90) {
    navbar.style.background = "rgba(0,0,0,0.15)";
    navbar.style.borderBottom = "0.2px solid rgba(245,245,245,0.03)";
  }
  if (scrollY > 120) {
    navbar.style.background = "rgba(0,0,0,0.2)";
    navbar.style.borderBottom = "0.2px solid rgba(245,245,245,0.05)";
  }
  if (scrollY > 150) {
    navbar.style.background = "rgba(0,0,0,0.3)";
    navbar.style.borderBottom = "0.2px solid rgba(245,245,245,0.07)";
  }
  if (scrollY > 180) {
    navbar.style.background = "rgba(0,0,0,0.4)";
    navbar.style.borderBottom = "0.2px solid rgba(245,245,245,0.09)";
  }
  if (scrollY > 210) {
    navbar.style.background = "rgba(0,0,0,0.5)";
    navbar.style.borderBottom = "0.2px solid rgba(245,245,245,0.11)";
  }
  if (scrollY > 240) {
    navbar.style.background = "rgba(0,0,0,0.6)";
    navbar.style.borderBottom = "0.2px solid rgba(245,245,245,0.13)";
  }
  if (scrollY > 270) {
    navbar.style.background = "rgba(0,0,0,0.7)";
    navbar.style.borderBottom = "0.2px solid rgba(245,245,245,0.15)";
  }
  if (scrollY > 300) {
    navbar.style.background = "rgba(0,0,0,0.8)";
    navbar.style.borderBottom = "0.2px solid rgba(245,245,245,0.17)";
  }
  if (scrollY > 330) {
    navbar.style.background = "rgba(0,0,0,0.9)";
  }
  if (scrollY > 360) {
    navbar.style.background = "rgba(0,0,0,0.95)";
  }
  if (scrollY > 420) {
    navbar.style.background = "rgba(0,0,0,1)";
  }
});
