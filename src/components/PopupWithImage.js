import Popup from "./popup";

export default class PopupWithImage extends Popup {
    openPopup(name, link, imageSelector, nameSelector) {
        this.imageSelector = document.querySelector('.popup__image-card');
        this.nameSelector = document.querySelector('.popup__image-name');
        this.imageSelector.src = link;
        this.nameSelector.textContent = name;
        this.imageSelector.alt = name;
        super.openPopup();
    }
}
