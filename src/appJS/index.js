import { imageCard, popupImageCard, buttonImageClose, imageName, placesImage } from './globals';
import Card from './Card';
import { selectorConfig } from "./validate";
const buttonLikes = document.querySelectorAll('.places__button-like');
//Popup для изменения данных профиля
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#profilePopup');
const buttonCloseProfile = document.querySelector('#closeProfile');
const profileForm = document.querySelector('#formProfile')
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const firstName = document.querySelector('.popup__input_text_firstname');
const popupParagraph = document.querySelector('.popup__input_text_paragraph');
//Popup для добавления карточек
const popupCards = document.querySelector('#cardsPopup');
const buttonCloseCards = document.querySelector('#closeCards');
const formCards = document.querySelector('#formCards');
const buttonSaveCards = document.querySelector('#saveCards');
const inputNameCards = document.querySelector('#nameCard-input');
const inputLinkCards = document.querySelector('#linkCard-input');
const buttonDeleteCards = document.querySelector('.places__remove-card')
const openPopupCards = document.querySelector('.profile__submit-button');
const places = document.querySelector('.places');

const popupImage = document.querySelector('#imageCardFullscreen');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
//Popup открытие карточек фулскрином

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandlerProfile)
}

const closePopupOverlay = (popup) => {
    const container = popup.querySelector('.popup__container');
    container.addEventListener('click', e => {
        e.stopPropagation();
    });
    popup.addEventListener('click', () => {
        closePopup(popup);
    });
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyHandlerProfile)
}

const keyHandlerProfile = (evt) => {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.key === 'Escape' && popupOpened) {
        closePopup(popupOpened);
    }
}

function popupSubmitHandler (event) {
    event.preventDefault();
    profileTitle.textContent = firstName.value;
    profileSubtitle.textContent = popupParagraph.value;
    closePopup(popupProfile);
}

const placesTemplate = document.querySelector('.places__template')
  .content.querySelector('.places__card');

function formSubmitHandler(e) {
    e.preventDefault();
    const name = inputNameCards.value;
    const link = inputLinkCards.value;
    const newCard = new Card(name, link, placesTemplate);
    places.prepend(newCard.createCard())
    inputLinkCards.value = '';
    inputNameCards.value = '';
    closePopup(popupCards);
    buttonSaveCards.classList.add(selectorConfig.inactiveButtonClass);
}


editButton.addEventListener('click', () => {
    firstName.value = profileTitle.textContent;
    popupParagraph.value = profileSubtitle.textContent;
    openPopup(popupProfile);
});
openPopupCards.addEventListener('click', () => {
    openPopup(popupCards);
});

buttonCloseProfile.addEventListener('click', () => {
    closePopup(popupProfile);
});

buttonCloseCards.addEventListener('click', () => {
    inputLinkCards.value = '';
    inputNameCards.value = '';
    closePopup(popupCards);
});

buttonImageClose.addEventListener('click', () => {
    closePopup(popupImageCard);
});

profileForm.addEventListener('submit', popupSubmitHandler);

formCards.addEventListener('submit', formSubmitHandler);

[popupProfile, popupCards, popupImage].forEach(closePopupOverlay);

const newCards = initialCards.map(({ name, link }) =>
    new Card(name, link, placesTemplate));

newCards.forEach(card => places.prepend(card.createCard()));
