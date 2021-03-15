let editButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');

let closePopup = document.querySelector('.popup__button-close');

let profileTitle = document.querySelector('.profile__title');

let profileSubtitle = document.querySelector('.profile__subtitle');

let popupSubmit = document.querySelector('.popup__button-submit');

let buttonLikes = document.querySelectorAll('.places__button-like');

function openPopup() {
    popup.classList.remove('popup__visible');
}

function popupClose() {
    popup.classList.add('popup__visible');
}

editButton.addEventListener('click', function (event) {
    event.preventDefault();
    openPopup();
});

closePopup.addEventListener('click', function (event) {
    event.preventDefault();
    popupClose()
});

popupSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    let fistName = document.querySelector('.popup__firstname').value;
    let popupParagraph = document.querySelector('.popup__paragraph').value;
    profileTitle.textContent = fistName;
    profileSubtitle.textContent = popupParagraph;
    popupClose();
});

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
