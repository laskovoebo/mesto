class FormValidator {
    _selectorConfig = {
        inputSelector: '',
        inactiveButtonClass: '',
        submitButtonSelector: '',
        inputErrorClass: '',
        errorClass: '',
        fieldClass: '',
    };
    _formElement;
    _inputList;
    _buttonElement;

    constructor(config, element) {
        this._selectorConfig = config;
        this._formElement = element;
        this._inputList = Array.from(
            this._formElement.querySelectorAll(this._selectorConfig.inputSelector),
        );
        this._buttonElement = this._formElement.querySelector(
            this._selectorConfig.submitButtonSelector,
        );
    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._selectorConfig.errorClass);
    }

    _hideInputError = inputElement => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.remove(this._selectorConfig.errorClass);
        errorElement.textContent = " ";
    }

    cleanFormValidation() {
        this._inputList.forEach(this._hideInputError)
        this.disableSubmitButton()
    }

    _checkInputValidity = inputElement => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _setEventListeners = () => {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    _hasInvalidInput = inputList => inputList.some((inputElement) => !inputElement.validity.valid);

    disableSubmitButton = () => {
        this._buttonElement.disabled = true;
        this._buttonElement.classList.add(this._selectorConfig.inactiveButtonClass);
    }


    _toggleButtonState = () => {
        if (this._hasInvalidInput(this._inputList)) {
            this.disableSubmitButton();
        } else {
            this._buttonElement.disabled = false;
            this._buttonElement.classList.remove(this._selectorConfig.inactiveButtonClass);
        }
    }

    enableValidation() {
        this._setEventListeners(this._formElement);
    };
}

export default FormValidator;
