"use strict";

(() => {
  // EXPRESSION
  const mark = document.querySelector(".mark");
  const link = document.querySelectorAll(".filter-category__link");
  const filterCategory = document.querySelector(".filter-category");
  const categoryBtn = document.querySelector(".category-btn");

  function indicator(e) {
    mark.style.left = `${e.offsetLeft}px`;
    mark.style.width = `${e.offsetWidth}px`;
  }

  link.forEach((item) => {
    item.addEventListener("click", (e) => {
      indicator(e.target);
    });
  });

  // data 타입에 따라 카테고리가 필터링 됨
  function filtering(e) {
    const filter = e.target.dataset.filter;
    const itemWrapper = document.querySelector(".product-item-wrapper");
    const productItem = document.querySelectorAll(".product-item");

    if (filter == null) {
      return;
    }

    itemWrapper.classList.add("ani-out");
    setTimeout(() => {
      productItem.forEach((item) => {
        if (filter === "*" || item.dataset.type.includes(filter)) {
          item.classList.remove("invisible");
        } else {
          item.classList.add("invisible");
        }
      });
      itemWrapper.classList.remove("ani-out");
    }, 300);
  }

  categoryBtn.addEventListener("click", () => {
    filterCategory.classList.toggle("show");
  });

  filterCategory.addEventListener("click", (e) => {
    filtering(e);
  });
})();
