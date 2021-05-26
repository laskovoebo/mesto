import Section from "./Section";
import Card from './Card';
import PopupWithForm from './PopupWithForm';

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
import { CARDS_FORM, PROFILE_FORM } from './constants';
import UserInfo from "./UserInfo";

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

const defaultCardList = new Section({
    items: initialCards,
    renderer: ({ name, link }) => {
        return (new Card(name, link, placesTemplate)).createCard();
    }
}, places);
defaultCardList.renderItems();

const createCard = (name, link) => (new Card(name, link, placesTemplate)).createCard();


editButton.addEventListener('click', handleOpenEditProfileClick);

function handleOpenEditProfileClick() {
    formValidators[PROFILE_FORM].cleanFormValidation()
    popupEditProfile.openPopup()
    const userData = userInfo.getUserInfo()
    firstName.value = userData.name
    popupParagraph.value = userData.description
}

openPopupCards.addEventListener('click', () => {
    formValidators[CARDS_FORM].cleanFormValidation()
    popupAddCard.openPopup()
});

const popupAddCard = new PopupWithForm('#cardsPopup', (data) => {
    const card = createCard(data.inputNamePopup, data.inputLinkPopup)
    places.prepend(card);
    popupAddCard.closePopup()
})
popupAddCard.setEventListeners()

const popupEditProfile = new PopupWithForm('#profilePopup', (data) => {
    console.log(data)

    userInfo.setUserInfo(data.inputFirstnamePopup, data.inputParagraphPopup)

    popupEditProfile.closePopup()
})
popupEditProfile.setEventListeners()

const userInfo = new UserInfo({name: '.profile__title', description: '.profile__subtitle'})

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


