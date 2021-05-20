const keyHandlerProfile = (evt) => {
    /*

    Можно лучше

    Поиск элемента открытого модального окна лучше перенести внутрь блока if,
    так как этот элемент нужен только тогда, когда условие if истинно

    */
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        if (popupOpened) {
            closePopup(popupOpened);
        }
    }
}

export const openPopup = popup => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandlerProfile)
}

export const closePopupOverlay = popup => {
    const container = popup.querySelector('.popup__container');
    container.addEventListener('click', e => {
        e.stopPropagation();
    });
    popup.addEventListener('click', () => {
        closePopup(popup);
    });
}

export const closePopup = popup => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyHandlerProfile)
}
