let editButton = document.querySelector('.profile__edit-button');

let popupProfile = document.querySelector('#profilePopup');
const popupCards = document.querySelector('#cardsPopup');

let buttonCloseProfile = document.querySelector('#closeProfile');
let buttonCloseCards = document.querySelector('#closeCards');

let profileTitle = document.querySelector('.profile__title');

let profileSubtitle = document.querySelector('.profile__subtitle');

let popupSubmit = document.querySelector('.popup__button-submit');

let buttonLikes = document.querySelectorAll('.places__button-like');

let firstName = document.querySelector('.popup__input_text_firstname');

let popupParagraph = document.querySelector('.popup__input_text_paragraph');

const openPopupCards = document.querySelector('.profile__submit-button');

function openProfile () {
    popupProfile.classList.add('popup_display');
    firstName.value = profileTitle.textContent;
    popupParagraph.value = profileSubtitle.textContent;
}

function openCards() {
    console.log(popupCards.classList);
    popupCards.classList.add('popup__display');
    console.log(popupCards.classList);
}

function closeProfile() {
    popupProfile.classList.remove('popup_display');
}

function closeCards() {
    popupCards.classList.remove('popup_display');
}

function popupSubmitHandler (event) {
    event.preventDefault();
    profileTitle.textContent = firstName.value;
    profileSubtitle.textContent = popupParagraph.value;
    closeProfile();
}


editButton.addEventListener('click', openProfile);
openPopupCards.addEventListener('click', openCards);

buttonCloseProfile.addEventListener('click', closeProfile);
buttonCloseCards.addEventListener('click', closeCards);


// document.formPopup.addEventListener('submit', popupSubmitHandler);




