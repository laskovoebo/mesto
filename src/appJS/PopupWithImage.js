import Popup from "./popup";
import {imageCard, imageName} from "./selectors";

class PopupWithImage extends Popup {
    constructor(popup) {
        super();
    }

    openPopup() {
        super.openPopup();
        imageCard.src = this._link;
        imageName.textContent = this._name;
        imageCard.alt = this._name;
    }

}