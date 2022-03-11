const card = document.querySelector(".__card");
const ani = card.dataset.ani;

loadCardAnimation();

function loadCardAnimation() {
    card.classList.add('animated', 'infinite', ani);
    window.setTimeout(function () {
        card.classList.remove('animated', 'infinite', ani);
    }, 3000);
}

card.addEventListener('mouseenter', function (e) {
    const ani = e.target.dataset.ani;
    e.target.classList.add('animated', 'infinite', ani);
    window.setTimeout(function () {
        e.target.classList.remove('animated', 'infinite', ani);
    }, 3000);
});