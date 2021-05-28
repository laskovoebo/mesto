import Popup from "./popup";
import {imageCard, imageName} from "./selectors";

export default class PopupWithImage extends Popup {
    openPopup(name, link) {
        imageCard.src = link;
        imageName.textContent = name;
        imageCard.alt = name;
        super.openPopup();
    }
}
