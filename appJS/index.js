const buttonLikes = document.querySelectorAll('.places__button-like');
//Popup для изменения данных профиля
let editButton = document.querySelector('.profile__edit-button');
let popupProfile = document.querySelector('#profilePopup');
let buttonCloseProfile = document.querySelector('#closeProfile');
const profileForm = document.querySelector('#formProfile')
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let firstName = document.querySelector('.popup__input_text_firstname');
let popupParagraph = document.querySelector('.popup__input_text_paragraph');
//Popup для добавления карточек
const popupCards = document.querySelector('#cardsPopup');
let buttonCloseCards = document.querySelector('#closeCards');
const formCards = document.querySelector('#formCards');
const buttonSaveCards = document.querySelector('#saveCards');
const inputNameCards = document.querySelector('#nameCard');
const inputLinkCards = document.querySelector('#linkCard');
const buttonDeleteCards = document.querySelector('.places__remove-card')
const openPopupCards = document.querySelector('.profile__submit-button');
const places = document.querySelector('.places');
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
const popupImageCard = document.querySelector('#imageCardFullscreen');
const imageCard = popupImageCard.querySelector('.popup__image-card');
const placesImage = document.querySelector('.places__image');
const buttonImageClose = document.querySelector('#imageClose');
const imageName = document.querySelector('.popup__image-name');

function openPopup(popup) {
    popup && popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup && popup.classList.remove('popup_opened');
}

function openProfile () {
    firstName.value = profileTitle.textContent;
    popupParagraph.value = profileSubtitle.textContent;
    openPopup(popupProfile);
}

function openCards() {
    openPopup(popupCards);
}

function closeProfile() {
    closePopup(popupProfile);
}

function closeCards() {
    inputLinkCards.value = '';
    inputNameCards.value = '';
    closePopup(popupCards);
}

function popupSubmitHandler (event) {
    event.preventDefault();
    profileTitle.textContent = firstName.value;
    profileSubtitle.textContent = popupParagraph.value;
    closeProfile();
}

function createCard({ name, link }) {
    const placesTemplate = document.querySelector('.places__template')
      .content.querySelector('.places__card');
    const cardWrapper = placesTemplate.cloneNode(true);
    const cardName = cardWrapper.querySelector('.places__title');
    const cardImage = cardWrapper.querySelector('.places__image');
    const likeButton = cardWrapper.querySelector('.places__button-image');
    const imageContainer = cardWrapper.querySelector('.places__image');
    const closeButton = cardWrapper.querySelector('.places__image-remove');
    let liked = false;
    likeButton.addEventListener('click',
      () => {
        liked = !liked;
        likeButton.src = liked ? 'images/like-button-active.svg' : 'images/like-button.svg';
      });
    imageContainer.addEventListener('click', () => {
        imageCard.src = link;
        imageName.textContent = name;
        openPopupImageCard();
    });
    closeButton.addEventListener('click', () => cardWrapper.remove());
    cardName.textContent = name;
    cardImage.src = link;
    return cardWrapper;
}

function renderCard(wrapper, data) {
    wrapper.prepend(createCard(data));
}

function renderCards() {
    initialCards.forEach((card) => renderCard(places, card));
}

function formSubmitHandler(e) {
    e.preventDefault();
    const name = inputNameCards.value;
    const link = inputLinkCards.value;
    const newCard = {
        name,
        link,
    };
    initialCards.push(newCard);
    renderCard(places, newCard);
    closeCards()
}

function openPopupImageCard() {
    popupImageCard.classList.add('popup_opened')
}

function closePopupImageCard() {
    popupImageCard.classList.remove('popup_opened')
}

editButton.addEventListener('click', openProfile);
openPopupCards.addEventListener('click', openCards);

buttonCloseProfile.addEventListener('click', closeProfile);
buttonCloseCards.addEventListener('click', closeCards);
buttonImageClose.addEventListener('click', closePopupImageCard);

profileForm.addEventListener('submit', popupSubmitHandler);

formCards.addEventListener('submit', formSubmitHandler);

renderCards();



