export default class UserInfo {
    constructor({name, description}) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            description: this._description.textContent,
        };
    }

    setUserInfo ( nameInput, descriptionInput) {
        this._name.textContent = nameInput;
        this._description.textContent = descriptionInput;
    }
}

