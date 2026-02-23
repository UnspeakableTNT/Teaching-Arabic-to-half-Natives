document.addEventListener('DOMContentLoaded', function() {
    var accButtons = document.getElementsByClassName("accordion-button");

    for (var i = 0; i < accButtons.length; i++) {
        accButtons[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});
