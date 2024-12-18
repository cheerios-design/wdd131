const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
});

const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;
