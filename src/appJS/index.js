import Card from './Card';
import FormValidator from './FormValidator';
import {
    firstName,
    popupParagraph,
    popupProfile,
    profileSubtitle,
    profileTitle,
    inputNameCards,
    inputLinkCards,
    places,
    popupCards,
    editButton,
    openPopupCards,
    buttonCloseProfile,
    buttonCloseCards,
    buttonImageClose,
    popupImageCard,
    profileForm,
    formCards,
    popupImage,
    placesTemplate,
} from './selectors';
import { closePopup, closePopupOverlay, openPopup } from './popup';
import { CARDS_FORM, PROFILE_FORM } from './constants';

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

const createCard = (name, link) =>
    (new Card(name, link, placesTemplate)).createCard();

function popupSubmitHandler(event) {
    event.preventDefault();
    profileTitle.textContent = firstName.value;
    profileSubtitle.textContent = popupParagraph.value;
    closePopup(popupProfile);
}

function formSubmitHandler(e) {
    e.preventDefault();
    const name = inputNameCards.value;
    const link = inputLinkCards.value;
    places.prepend(createCard(name, link));
    inputLinkCards.value = '';
    inputNameCards.value = '';
    closePopup(popupCards);
}

editButton.addEventListener('click', () => {
    firstName.value = profileTitle.textContent;
    popupParagraph.value = profileSubtitle.textContent;
    formValidators[PROFILE_FORM].disableSubmitButton();
    openPopup(popupProfile);
});

openPopupCards.addEventListener('click', () => {
    formValidators[CARDS_FORM].disableSubmitButton();
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

initialCards.forEach(
    ({ name, link }) =>
        places.prepend(createCard(name, link))
);

const formValidators = {
    [PROFILE_FORM]: null,
    [CARDS_FORM]: null,
};

Object.keys(formValidators).forEach(selector => {
    formValidators[selector] = new FormValidator({
            inputSelector: '.popup__input',
            inactiveButtonClass: 'popup__button-submit_inactive',
            submitButtonSelector: '.popup__button-submit',
            inputErrorClass: 'popup__input_type_error',
            errorClass: 'popup__input-error-active',
            fieldClass: '.popup__set',
        },
        document.querySelector(selector),
    );
    formValidators[selector].enableValidation();
});

