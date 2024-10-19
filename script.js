const card = document.querySelector(".birthdayCard");

card.addEventListener("click", () => {
    if (card.classList.contains("isOpen")) {
        card.classList.remove("isOpen");
    } else {
        card.classList.add("isOpen");
    }
});
