const popupOpenButtonElement = document.querySelector('.menu__open-popup');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');

const openPopup = function() {
  popupElement.classList.add('popup_is-opened');
}

const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');
}

const closePopupByClickOnOverlay = function(event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
}
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

popupElement.addEventListener('click', closePopupByClickOnOverlay);
document.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    closePopup();
  }
});
