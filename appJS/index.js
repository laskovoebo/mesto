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
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function popupSubmitHandler (event) {
    event.preventDefault();
    profileTitle.textContent = firstName.value;
    profileSubtitle.textContent = popupParagraph.value;
    closePopup(popupProfile);
}

function createCard({ name, link }) {
    const placesTemplate = document.querySelector('.places__template')
      .content.querySelector('.places__card');
    const cardWrapper = placesTemplate.cloneNode(true);
    const cardName = cardWrapper.querySelector('.places__title');
    const cardImage = cardWrapper.querySelector('.places__image');
    const likeButton = cardWrapper.querySelector('.places__button-like');
    const imageContainer = cardWrapper.querySelector('.places__image');
    const closeButton = cardWrapper.querySelector('.places__image-remove');
    likeButton.addEventListener('click',
      (e) => likeButton.classList.toggle('active'));
    imageContainer.addEventListener('click', () => {
        imageCard.src = link;
        imageName.textContent = name;
        imageCard.alt = name;
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
    inputLinkCards.value = '';
    inputNameCards.value = '';
    closePopup(popupCards);
}

function openPopupImageCard() {
    popupImageCard.classList.add('popup_opened')
}

function closePopupImageCard() {
    popupImageCard.classList.remove('popup_opened')
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
buttonImageClose.addEventListener('click', closePopupImageCard);

profileForm.addEventListener('submit', popupSubmitHandler);

formCards.addEventListener('submit', formSubmitHandler);

renderCards();



