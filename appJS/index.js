let buttonLikes = document.querySelectorAll('.places__button-like');
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

function openProfile () {
    popupProfile.classList.add('visible');
    firstName.value = profileTitle.textContent;
    popupParagraph.value = profileSubtitle.textContent;
}

function openCards() {
    popupCards.classList.add('visible');
}

function closeProfile() {
    popupProfile.classList.remove('visible');
}

function closeCards() {
    popupCards.classList.remove('visible');
    inputLinkCards.value = '';
    inputNameCards.value = '';
}

function popupSubmitHandler (event) {
    event.preventDefault();
    profileTitle.textContent = firstName.value;
    profileSubtitle.textContent = popupParagraph.value;
    closeProfile();
}

function renderCard({ name, link }) {
    const placesTemplate = document.querySelector('.places__template').content.querySelector('.places__card');
    const placesCards = placesTemplate.cloneNode(true);
    const cardName = placesCards.querySelector('.places__title');
    const cardImage = placesCards.querySelector('.places__image');
    cardName.textContent = name;
    cardImage.src = link;

    places.append(placesCards);
}

function renderCards() {
    initialCards.forEach(renderCard);
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
    renderCard(newCard);
    closeCards()
}

function openPopupImageCard() {
    popupImageCard.classList.add('visible')
}

function closePopupImageCard() {
    popupImageCard.classList.remove('visible')
}

editButton.addEventListener('click', openProfile);
openPopupCards.addEventListener('click', openCards);

buttonCloseProfile.addEventListener('click', closeProfile);
buttonCloseCards.addEventListener('click', closeCards);
buttonImageClose.addEventListener('click', closePopupImageCard)

profileForm.addEventListener('submit', popupSubmitHandler);

formCards.addEventListener('submit', formSubmitHandler)

places.addEventListener('click', e => {
    const button = e.target;
    if (button.classList.contains('places__image-remove')){
        button.closest('.places__card').remove();
    }
    if (button.classList.contains('places__button-image')){
        button.src = 'images/like-button-active.svg';
    }
    if (button.classList.contains('places__image')){
        openPopupImageCard()
    }
})


renderCards();



