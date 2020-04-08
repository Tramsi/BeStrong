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

function navbarScroll() {
  const navbar = document.querySelector("nav");
  console.log(navbar);
  let scrollPosBefore = window.pageYOffset;
  console.log(scrollPosBefore);
  window.addEventListener("scroll", function () {
    scrollPosNow = window.pageYOffset;
    if (scrollPosNow > scrollPosBefore) {
      navbar.classList.add("hide");
    } else {
      navbar.classList.remove("hide");
    }
    scrollPosBefore = scrollPosNow;
  });
}

hamToggle();
navbarScroll();
