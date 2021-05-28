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

window.addEventListener("scroll", () => {
   const header = document.querySelector(".header");
   const offsetTop = window.pageYOffset;
   if (offsetTop) {
      header.classList.add("header--background-active");
   } else {
      header.classList.remove("header--background-active");
   }
});

fsLightboxInstances["gallery"].props.onOpen = () => {
   const header = document.querySelector(".header");

   document.body.style.paddingRight = "var(--scrollbar-width)";
   header.classList.add("header--offset");
};

fsLightboxInstances["gallery"].props.onClose = () => {
   const header = document.querySelector(".header");

   document.body.style.paddingRight = null;
   header.classList.remove("header--offset");
};

const headerLinks = document.querySelectorAll(".header__list-link");

window.addEventListener("scroll", (event) => {
   headerLinks.forEach((link) => {
      const section = document.querySelector(link.dataset.scrollTo);
      const header = document.querySelector(".header");
      const sectionOffset = section.offsetTop - header.offsetHeight;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffset && 1 + pageYOffset <= sectionOffset + sectionHeight) {
         link.classList.add("header__list-link--active");
      } else link.classList.remove("header__list-link--active");
   });
});

const redirectItems = document.querySelectorAll("a[data-scroll-to], button[data-scroll-to]");
redirectItems.forEach(item => {
   item.addEventListener("click", event => {
      event.preventDefault();
      const targetItem = document.querySelector(event.target.dataset.scrollTo);

      if (targetItem) {
         closeBurgerMenu();
         const offsetTop = targetItem.offsetTop;
         const headerHeight = document.querySelector(".header").offsetHeight;

         window.scroll({
            top: offsetTop - headerHeight,
            behavior: "smooth",
         });
      }

      return false;
   });
});

