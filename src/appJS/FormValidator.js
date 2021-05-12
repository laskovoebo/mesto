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

    constructor(config, element) {
        this._selectorConfig = config;
        this._formElement = element;
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

    _checkInputValidity = inputElement => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _setEventListeners = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._selectorConfig.inputSelector));
        const buttonElement = this._formElement.querySelector(this._selectorConfig.submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    _hasInvalidInput = inputList => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
    }

    _toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._selectorConfig.inactiveButtonClass);
        } else {
            buttonElement.classList.remove(this._selectorConfig.inactiveButtonClass);
        }
    }

    enableValidation() {
        this._setEventListeners(this._formElement);
    };
}

export default FormValidator;
