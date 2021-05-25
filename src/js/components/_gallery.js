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
