var _a, _b;
window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    if (header) {
        if (window.scrollY > 0) {
            header.classList.add("sticky");
        }
        else {
            header.classList.remove("sticky");
        }
    }
});
function toggleMenu() {
    var navBar = document.querySelector('.nav-bar');
    if (navBar) {
        navBar.classList.toggle('active');
    }
}
document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        var targetId = this.getAttribute("href");
        if (targetId) {
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});
var handleFormSubmit = function (event) {
    event.preventDefault();
    var form = event.target;
    if (form) {
        var formData = new FormData(form);
        var data = Object.fromEntries(formData);
        console.log("Form submitted with data:", data);
        alert("Form submitted! Thank you.");
        form.reset();
    }
};
(_a = document.querySelector(".reservation-form form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", handleFormSubmit);
(_b = document.querySelector(".contact-form")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", handleFormSubmit);
