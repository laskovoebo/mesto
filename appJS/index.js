let editButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');

let buttonClosePopup = document.querySelector('.popup__button-close');

let profileTitle = document.querySelector('.profile__title');

let profileSubtitle = document.querySelector('.profile__subtitle');

let popupSubmit = document.querySelector('.popup__button-submit');

let buttonLikes = document.querySelectorAll('.places__button-like');

let firstName = document.querySelector('.popup__input-firstname');

let popupParagraph = document.querySelector('.popup__input-paragraph');

function openPopup () {
    popup.classList.remove('popup_display');
    firstName.value =  profileTitle.textContent;
    popupParagraph.value = profileSubtitle.textContent;
}

function closePopup() {
    popup.classList.add('popup_display');
}

function popupSubmitHandler (event) {
    event.preventDefault();
    profileTitle.textContent = firstName.value;
    profileSubtitle.textContent = popupParagraph.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);

buttonClosePopup.addEventListener('click', closePopup);

document.formPopup.addEventListener('submit', popupSubmitHandler);

