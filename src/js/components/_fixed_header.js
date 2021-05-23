window.addEventListener("scroll", () => {
   const header = document.querySelector(".header");
   const offsetTop = window.pageYOffset;
   if (offsetTop) {
      header.classList.add("header--background-active");
   } else {
      header.classList.remove("header--background-active");
   }
});
