document.addEventListener("DOMContentLoaded", function () {

    // THEME TOGGLE
    const button = document.getElementById("theme-btn");

    button.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // FAQ ACCORDION
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(function (q) {
        q.addEventListener("click", function () {
            this.parentElement.classList.toggle("active");
        });
    });

});
