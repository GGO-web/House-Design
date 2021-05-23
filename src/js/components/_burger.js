const burger = document.querySelector(".burger");
const mainMenu = document.getElementById("main-menu");
const header = document.querySelector(".header");

function openBurgerMenu() {
   if (!window.pageYOffset)
      header.classList.toggle("header--background-active");

   header.classList.add("header--offset");
   burger.classList.add("active");
   mainMenu.classList.add("is-active");
   document.body.classList.add("hide-scroll");
}

function closeBurgerMenu() {
   if (!window.pageYOffset)
      header.classList.remove("header--background-active");

   header.classList.remove("header--offset");
   burger.classList.remove("active");
   mainMenu.classList.remove("is-active");
   document.body.classList.remove("hide-scroll");
}

burger.addEventListener("click", function () {
   if (mainMenu.classList.contains("is-active")) {
      closeBurgerMenu();
   } else {
      openBurgerMenu();
   }
});

window.addEventListener("orientationchange", () => {closeBurgerMenu();});
