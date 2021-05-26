import Popup from './popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._closeButton = this._popup.querySelector(".popup__button-close");
        this._form = this._popup.querySelector(".popup__form");
        this.close = this.closePopup.bind(this);
        this.setEventListeners = this.setEventListeners.bind(this);
    }

    _getInputValues() {
        const inputs = [...this._form.querySelectorAll('.popup__input')]
        const values = {}

        inputs.forEach(input => {
            values[input.name] = input.value
        })

        return values
    }

    closePopup() {
        super.closePopup();
        this._form.reset()
    }

    closePopupOverlay() {
        super.closePopupOverlay();
    }

    setEventListeners() {
        super.setEventListeners();
        
        this._form.addEventListener('submit', (e) => {
            e.preventDefault()
            this._submitForm(this._getInputValues())
        })
    }

}