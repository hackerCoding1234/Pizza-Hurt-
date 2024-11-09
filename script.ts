window.addEventListener("scroll", () => {
    const header = document.querySelector(".header") as HTMLElement | null;
    if (header) {
        if (window.scrollY > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});



document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();


        const targetId = (this as HTMLAnchorElement).getAttribute("href");
        if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

const handleFormSubmit = (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement | null;
    if (form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log("Form submitted with data:", data);
        alert("Form submitted! Thank you.");
        form.reset();
    }
};

document.querySelector(".reservation-form form")?.addEventListener("submit", handleFormSubmit);
document.querySelector(".contact-form")?.addEventListener("submit", handleFormSubmit);
