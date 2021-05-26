
export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    openPopup() {
        this._popup.classList.add('popup_opened');
    }

    closePopupOverlay() {
        const container = this._popup.querySelector('.popup__container');
        container.addEventListener('click', e => {
            e.stopPropagation();
        });
        this._popup.addEventListener('click', () => {
            this.closePopup( this._popup );
        });
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._keyHandlerProfile)
    }

    _keyHandlerProfile = evt => {
        if (evt.key === 'Escape') {
            const popupOpened = document.querySelector('.popup_opened');
            if (popupOpened) {
                this.closePopup(popupOpened);
            }
        }
    };

    setEventListeners() {
        this._popup.querySelector('.popup__button-close').addEventListener('click', () => this.closePopup())
    }
}
