const cards = document.querySelectorAll(".card");

const revealCards = () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
