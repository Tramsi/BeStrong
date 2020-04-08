//toggle active for whole list taglist= list of tags & active = "class-name"

function activeToggle(taglist, active) {
  taglist.forEach((tag) => {
    tag.classList.toggle(active);
  });
}

//navbar menu toggle with the hamburger button
function hamToggle() {
  const navLinks = document.querySelectorAll(".item");
  const ham = document.querySelector(".ham-icon");
  ham.addEventListener("click", function () {
    activeToggle(navLinks, "active-nav");
  });
}

// navbar hides if scrolled down and shows if scrolled up. also changes its color after a certain point
function navbarScroll() {
  const navbar = document.querySelector("nav");
  console.log(navbar);
  let scrollPosBefore = window.pageYOffset;
  console.log(scrollPosBefore);
  window.addEventListener("scroll", function () {
    scrollPosNow = window.pageYOffset;
    if (scrollPosNow > scrollPosBefore && scrollPosNow > 350) {
      navbar.classList.add("hide");
    } else {
      navbar.classList.remove("hide");
    }
    if (scrollPosNow > 350) {
      navbar.classList.add("nav-bg");
    } else {
      navbar.classList.remove("nav-bg");
    }
    scrollPosBefore = scrollPosNow;
  });
}

//change the nav links style depending on
function chosenPart() {}

hamToggle();
navbarScroll();
