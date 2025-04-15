document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    }); // addEventListener
  }); // forEach
});

document.addEventListener("DOMContentLoaded", function () {
  const lis = document.querySelectorAll(".dashboard-menu ul li");

  lis.forEach((li) => {
    li.addEventListener("click", function () {
      // Remove 'active' from all li elements
      lis.forEach((item) => item.classList.remove("active"));

      // Add 'active' to the clicked li
      this.classList.add("active");
    });
  });
});
