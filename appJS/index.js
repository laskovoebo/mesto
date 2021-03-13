let editButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');

let closePopup = document.querySelector('.popup__button-close');

let profileTitle = document.querySelector('.profile__title');

let profileSubtitle = document.querySelector('.profile__subtitle');

let popupSubmit = document.querySelector('.popup__button-submit');

let buttonLike = document.querySelector('.places__button-like');

function openPopup() {
    popup.classList.remove('popup__display');
}

function popupClose() {
    popup.classList.add('popup__display');
}

editButton.addEventListener('click', function (event) {
    openPopup();
    event.preventDefault();
} );

closePopup.addEventListener('click', function (event) {
    popupClose()
    event.preventDefault();
})

popupSubmit.addEventListener('click', function (event) {
    let fistName = document.querySelector('.popup__firstname').value;
    let popupParagraph = document.querySelector('.popup__paragraph').value;
    profileTitle.textContent = fistName;
    profileSubtitle.textContent = popupParagraph;
    popupClose();
    event.preventDefault();
})


