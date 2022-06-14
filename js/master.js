// Active Current Section
const navLinks = document.querySelectorAll("nav ul li.nav-item a");
const navSections = [
    ".landing",
    ".services",
    ".portfolio",
    ".about",
    ".contact",
];
function removeNavActive() {
    navLinks.forEach((e) => {
        e.classList.remove("active");
    });
}
window.addEventListener("load", () => {
    navLinks[0].classList.add("active");
});
window.addEventListener("scroll", () => {
    if (scrollY < document.querySelector(".services").offsetTop) {
        removeNavActive();
        navLinks[0].classList.add("active");
    } else if (scrollY < document.querySelector(".portfolio").offsetTop - 50) {
        removeNavActive();
        navLinks[1].classList.add("active");
    } else if (scrollY < document.querySelector(".about").offsetTop - 50) {
        removeNavActive();
        navLinks[2].classList.add("active");
    } else if (scrollY < document.querySelector(".contact").offsetTop - 50) {
        removeNavActive();
        navLinks[3].classList.add("active");
    } else if (scrollY >= document.querySelector(".contact").offsetTop - 50) {
        removeNavActive();
        navLinks[4].classList.add("active");
    }
});

// Portfolio Filter
const workLis = document.querySelectorAll(".portfolio ul li");
const workImages = document.querySelectorAll(".portfolio .row > div");
workLis.forEach((li) => {
    li.addEventListener("click", () => {
        workLis.forEach((li) => {
            li.classList.remove("active");
            workImages.forEach((box) => {
                box.style.display = "none";
            });
        });
        document
            .querySelectorAll(`.portfolio .${li.dataset.work}`)
            .forEach((box) => {
                box.style.display = "inline-block";
            });
        li.classList.add("active");
    });
});

// Making Scroll To Top Button Visible
const btn = document.getElementById("to-top");
window.addEventListener("scroll", () => {
    window.scrollY >= 500
        ? (btn.style.right = "10px")
        : (btn.style.right = "-1000px");
});

// Scroll To Top Button Scroll Up When Clicked
btn.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

// Putting Year at Footer
document.querySelector(".contact span.year").innerHTML =
    new Date().getFullYear();
