//toggle, remove or add  active for whole list: todo= "add", "remove" or "toggle" & taglist= list of tags & active = "class-name"
function activeChange(todo, taglist, active) {
  if (todo === "toggle") {
    taglist.forEach((tag) => {
      tag.classList.toggle(active);
    });
  } else if (todo === "add") {
    taglist.forEach((tag) => {
      tag.classList.add(active);
    });
  } else if (todo === "remove") {
    taglist.forEach((tag) => {
      tag.classList.remove(active);
    });
  }
}

//navbar menu toggle with the hamburger button
function hamToggle() {
  const navLinks = document.querySelectorAll(".item");
  const ham = document.querySelector(".ham-icon");
  ham.addEventListener("click", function () {
    activeChange("toggle", navLinks, "active-nav");
  });
}

// navbar hides if scrolled down and shows if scrolled up. also changes its color after a certain point
function navbarScroll() {
  const navbar = document.querySelector("nav");
  const navLinks = document.querySelectorAll(".item");
  const header = document.querySelector("header");
  let scrollPosBefore = window.pageYOffset;
  window.addEventListener("scroll", function () {
    scrollPosNow = window.pageYOffset;
    if (scrollPosNow > scrollPosBefore && scrollPosNow > 350) {
      navbar.classList.add("hide");
      setTimeout(function () {
        activeChange("remove", navLinks, "active-nav");
      }, 300);
    } else {
      navbar.classList.remove("hide");
    }
    if (scrollPosNow > 350) {
      navbar.classList.add("nav-bg");
    } else {
      navbar.classList.remove("nav-bg");
    }
    //parallax effect for the header image
    header.style.backgroundPositionY = `${45 + scrollPosNow / 18}%`;

    scrollPosBefore = scrollPosNow;
  });
}

const slides = document.querySelectorAll(".slide");
const fadeIn = document.querySelectorAll(".fade");
const sections = document.querySelectorAll(".section");
const navAnchors = document.querySelectorAll(".item a");
const options = {
  root: null,
  threshold: 0.3,
  // roottMargin: "20px 100px 100px 300px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("appear");
    setTimeout(() => {
      entry.target.classList.remove("delay");
      entry.target.classList.add("hover");
    }, 500);
    navAnchors.forEach((anchor) => {
      console.log(entry.target.id);
      if (!(entry.target.id + "Id" === anchor.id)) {
        anchor.classList.remove("chosen");
      } else {
        anchor.classList.add("chosen");
      }
    });
  });
}, options);

slides.forEach((slide) => {
  observer.observe(slide);
});

fadeIn.forEach((fade) => {
  observer.observe(fade);
});

sections.forEach((section) => {
  observer.observe(section);
});

hamToggle();
navbarScroll();
