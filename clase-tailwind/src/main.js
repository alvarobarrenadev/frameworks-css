const menuBtn = document.querySelector("#mobile-nav-btn");
const nav = document.querySelector("#main-nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("hidden");
})