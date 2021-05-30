class Card {
    _name;
    _link;
    _cardWrapper;
    _handleCardClick;

    constructor(name, link, htmlTemplate, handleCardClick) {
        this._name = name;
        this._link = link;
        this._cardWrapper = htmlTemplate.cloneNode(true);
        this._handleCardClick = handleCardClick;
    }

    _handleLike = () => {
        const likeButton = this._cardWrapper.querySelector('.places__button-like');
        likeButton.classList.toggle('like_active');
    }

    _handleClose = () => {
        this._cardWrapper.remove();
    }

    createCard() {
        const cardName = this._cardWrapper.querySelector('.places__title');
        const cardImage = this._cardWrapper.querySelector('.places__image');
        const likeButton = this._cardWrapper.querySelector('.places__button-like');
        const imageContainer = this._cardWrapper.querySelector('.places__image');
        const closeButton = this._cardWrapper.querySelector('.places__image-remove');
        likeButton.addEventListener('click',this._handleLike);
        imageContainer.addEventListener('click', this._handleCardClick);
        closeButton.addEventListener('click', this._handleClose);
        cardName.textContent = this._name;
        cardImage.src = this._link;
        cardImage.alt = this._name;
        return this._cardWrapper;
    }
}

export default Card;
