"use strict";

(() => {
  const menu = document.querySelector("#main-menu");
  const sidebarOverlay = document.querySelector(".sidebar-overlay");
  const sidebar = document.querySelector(".sidebar");
  const closeCartBtn = document.querySelector(".sidebar__close");

  function showSidebar() {
    sidebarOverlay.classList.add("transparentBg");
    sidebar.classList.add("showSidebar");
  }

  function hideSidebar() {
    sidebarOverlay.classList.remove("transparentBg");
    sidebar.classList.remove("showSidebar");
  }

  menu.addEventListener("click", showSidebar);

  closeCartBtn.addEventListener("click", hideSidebar);

  sidebarOverlay.addEventListener("click", hideSidebar);
})();
