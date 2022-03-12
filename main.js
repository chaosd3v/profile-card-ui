const card = document.querySelector(".__card");
const ani = card.dataset.ani;
const TIMEOUT_IN_MILLISECONDS = 3000;

loadCardAnimation();

function loadCardAnimation (){
    card.classList.add('animated', 'infinite', ani);
    window.setTimeout(function () {
        card.classList.remove('animated', 'infinite', ani);
    }, TIMEOUT_IN_MILLISECONDS);
}

card.addEventListener('mouseenter', () => {
    loadCardAnimation();
});
