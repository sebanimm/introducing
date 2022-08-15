window.addEventListener("scroll", () => {
  let header = document.querySelector(".top-menu");
  header.classList.toggle("sticky", window.scrollY > 0);
});
