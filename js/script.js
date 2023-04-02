const anchorElements = document.querySelectorAll("a");

anchorElements.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // checking if these are navigation links
    if (link.classList.contains("navigation__link")) {
      const checkbox = document.querySelector(".navigation__checkbox");
      console.log(checkbox);
      checkbox.checked = false;
    }

    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    console.log(href);
    if (href !== "#" && href.startsWith("#")) {
      const section = document.getElementById(href.slice(1));

      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
