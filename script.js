const filterButtons = document.querySelectorAll("[data-filter]");
const publicationCards = document.querySelectorAll("[data-year]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    publicationCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.year === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
