(function () {
  // toggle data attribute
  function toggleDataAttr(el, dataname, onState, offState) {
    el.setAttribute(
      `data-${dataname}`,
      el.getAttribute(`data-${dataname}`) === onState ? offState : onState
    );
  }

  // Global function to toggle states
  window.toggleState = function (el, dataname, on, off) {
    el.setAttribute(
      `data-${dataname}`,
      el.getAttribute(`data-${dataname}`) === on ? off : on
    );
  };

  /**
   * Focus within polyfill
   */
  //   FocusWithin(document, {
  //     attr: false,
  //     className: "focus-within",
  //   });

  /*
    Image galleries
    url: https://www.npmjs.com/package/flickity
    -----------------------------------------------
  
    Usage:
    <div class="gallery">
        <a href="path-to-large-image" data-caption="">
            <img src="path-to-thumbnail" alt="" />
        </a>
    </div>
  
    Note: If not using, remove @import "../../node_modules/baguettebox.js/src/baguetteBox"; from `assets/sass/global.scss`
  */

  //   if (document.querySelectorAll(".gallery")) {
  //     baguetteBox.run(".gallery");
  //   }

  /*
    Better <select> elements
    url: https://www.npmjs.com/package/choices.js
    -----------------------------------------------
  
    Usage:
    Selects all <select> elements by default
  
    Note: If not using, remove @import "../../node_modules/choices.js/assets/styles/scss/choices"; from `assets/sass/global.scss`
  */
  // if (document.querySelectorAll('select').length > 0) {
  //   const selectElements = new Choices('select');
  // }

  /*
    Menu burger
  */
  const menuBurgerBtn = document.querySelector(".a-nav-toggle");

  function toggleNav() {
    toggleDataAttr(document.body, "nav", "open", "closed");
  }

  if (menuBurgerBtn) {
    menuBurgerBtn.addEventListener("click", toggleNav);
  }

  /*
    Automatically set external links to have nofollow/noopener attrs
  */
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    if (link.hostname != window.location.hostname) {
      link.setAttribute("rel", "nofollow noopener");
    }
  });

  // LazyLoad
  //   const lazyLoadImages = new LazyLoad();
  // Search

  const searchBtns = document.querySelectorAll(".js-search-btn");

  if (searchBtns) {
    searchBtns.forEach((searchBtn) => {
      searchBtn.addEventListener("click", function (e) {
        e.preventDefault();

        toggleState(searchBtn, "state", "active", "");
        toggleState(document.body, "search", "open", "closed");
      });
    });
  }

  //mobile accordion

  const accordionLink = document.querySelectorAll(".js-mobile-accordion-link");

  accordionLink.forEach((link) => {
    let content = link.nextElementSibling;
    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (!content.classList.contains("active")) {
        content.classList.add("active");
        link.classList.add("active");
      } else {
        content.classList.remove("active");
        link.classList.remove("active");
      }
    });
  });

  // sticky
  //   const sticky = new Sticky(".sticky");

  // zenscroll
  //   zenscroll.setup(null, 100);
})();
