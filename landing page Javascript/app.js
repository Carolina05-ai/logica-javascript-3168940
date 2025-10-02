// Smooth scroll
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



function flipCard(card) {
  card.classList.toggle('flipped');
}


const shakiraCard = document.querySelector(".shakira-inner img");

shakiraCard.addEventListener("mouseover", () => {
  shakiraCard.style.transform = "scale(1.05)";
  shakiraCard.style.boxShadow = "0 0 25px rgba(127, 96, 240)";
});

shakiraCard.addEventListener("mouseout", () => {
  shakiraCard.style.transform = "scale(1)";
  shakiraCard.style.boxShadow = "none";
});

