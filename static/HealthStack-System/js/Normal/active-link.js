document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.replace(/\/+$/, "");
  const links = document.querySelectorAll(".sidebar li a");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    const temp = document.createElement("a");
    temp.href = href;

    if (!temp.pathname) return;

    const linkPath = temp.pathname.replace(/\/+$/, "");

    if (linkPath === currentPath) {
      const li = link.closest("li");
      if (li) {
        li.classList.add("active");
      }
    }
  });
});
