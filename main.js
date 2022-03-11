const card = document.querySelector(".__card");
const ani = card.dataset.ani;

loadCardAnimation();

function loadCardAnimation() {
    card.classList.add('animated', 'infinite', ani);
    window.setTimeout(function () {
        card.classList.remove('animated', 'infinite', ani);
    }, 3000);
}

card.addEventListener('mouseenter', () => {
   loadCardAnimation();
});
