const selectorConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inactiveButtonClass: 'popup__button-submit_inactive',
    submitButtonSelector: '.popup__button-submit',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error-active',
    fieldClass: '.popup__set'
};
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectorConfig.errorClass);
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(selectorConfig.errorClass);
    errorElement.textContent = " ";
}

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(selectorConfig.inputSelector));
    const buttonElement = formElement.querySelector(selectorConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(selectorConfig.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll(selectorConfig.fieldClass));
        fieldsetList.forEach((fieldSet) => { setEventListeners(fieldSet) });
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(selectorConfig.inactiveButtonClass);
    } else {
        buttonElement.classList.remove(selectorConfig.inactiveButtonClass);
    }
}

enableValidation(selectorConfig);