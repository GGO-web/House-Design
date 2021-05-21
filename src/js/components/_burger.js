const burger = document.querySelector(".burger");
const mainMenu = document.getElementById("main-menu");

burger.addEventListener("click", function () {
   this.classList.toggle("active");
   if (mainMenu.classList.contains("is-active")) {
      this.setAttribute("aria-expanded", "true");
      mainMenu.classList.remove("is-active");
   } else {
      mainMenu.classList.add("is-active");
      this.setAttribute("aria-expanded", "false");
   }
});
