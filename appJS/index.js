let editButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');

let buttonClosePopup = document.querySelector('.popup__button-close');

let profileTitle = document.querySelector('.profile__title');

let profileSubtitle = document.querySelector('.profile__subtitle');

let popupSubmit = document.querySelector('.popup__button-submit');

let buttonLikes = document.querySelectorAll('.places__button-like');

function openPopup () {
    popup.classList.remove('popup_display');
}

function closePopup() {
    popup.classList.add('popup_display');
}

editButton.addEventListener('click', function (event) {
    event.preventDefault();
    openPopup();
});

buttonClosePopup.addEventListener('click', function (event) {
    event.preventDefault();
    closePopup()
});

function submitPopup (e) {
    e.preventDefault();
    let firstName = document.querySelector('.popup__input_firstname');
    let popupParagraph = document.querySelector('.popup__input_paragraph');
    profileTitle.textContent = firstName.value;
    profileSubtitle.textContent = popupParagraph.value;
    closePopup();
}

popupSubmit.addEventListener('click', submitPopup);

//Не особо понятно, как себя должны тогда вести лайки на странице, если они ставятся и убираются по нажатию
// Или по нажатию они должны  просто ставиться без возможности их убрать??

const cardLikes = Array(6).fill(false);

/*
for ( let i = 0; i < buttonLikes.length ; i++ ) {
    let likeActive = buttonLikes[i];
    likeActive.addEventListener('click', function (event) {
        event.preventDefault();
        cardLikes[i] = !cardLikes[i];
        const img = likeActive.querySelector('.places__button-image');
        img.src = cardLikes[i] ? 'images/like-button-active.svg' : 'images/like-button.svg';
    });
}
*/

buttonLikes.forEach((buttonLike, i) =>
    buttonLike.addEventListener('click', e => {
        e.preventDefault();
        cardLikes[i] = !cardLikes[i];
        const img = buttonLike.querySelector('.places__button-image');
        img.src = cardLikes[i] ? 'images/like-button-active.svg' : 'images/like-button.svg';
    }),
);
