/*
Отлично

Константы хранятся в отдельно файле
*/
export const imageName = document.querySelector('.popup__image-name');
export const popupImageCard = document.querySelector('#imageCardFullscreen');
export const imageCard = popupImageCard.querySelector('.popup__image-card');

export const placesImage = document.querySelector('.places__image');
export const buttonImageClose = document.querySelector('#imageClose');
export const buttonLikes = document.querySelectorAll('.places__button-like');
//Popup для изменения данных профиля
export const editButton = document.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('#profilePopup');
export const buttonCloseProfile = document.querySelector('#closeProfile');
export const profileForm = document.querySelector('#formProfile')
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const firstName = document.querySelector('.popup__input_text_firstname');
export const popupParagraph = document.querySelector('.popup__input_text_paragraph');
//Popup для добавления карточек
export const popupCards = document.querySelector('#cardsPopup');
export const buttonCloseCards = document.querySelector('#closeCards');
export const formCards = document.querySelector('#formCards');
export const buttonSaveCards = document.querySelector('#saveCards');
export const inputNameCards = document.querySelector('#nameCard-input');
export const inputLinkCards = document.querySelector('#linkCard-input');
export const buttonDeleteCards = document.querySelector('.places__remove-card')
export const openPopupCards = document.querySelector('.profile__submit-button');
export const places = document.querySelector('.places');

export const popupImage = document.querySelector('#imageCardFullscreen');

export const placesTemplate = document.querySelector('.places__template')
    .content.querySelector('.places__card');
