import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openModal, closeModal, handleOverlayClose } from "./utils.js";

 const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
 }
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];


const editButton = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector("#edit-popup");
const editCloseButton = editPopup.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const nameInput = editPopup.querySelector(".popup__input_type_name");
const descriptionInput = editPopup.querySelector(".popup__input_type_description");
const editProfileForm = document.querySelector("#edit-profile-form");


const addButton = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");
const newCardCloseButton = newCardPopup.querySelector(".popup__close");
const newCardForm = document.querySelector("#new-card-form");
const cardNameInput = newCardPopup.querySelector(".popup__input_type_card-name");
const cardLinkInput = newCardPopup.querySelector(".popup__input_type_url");
const cardsContainer = document.querySelector(".cards__list");
const cardTemplateSelector = "#card-template";


const imagePopup = document.querySelector("#image-popup");
const imagePopupClose = imagePopup.querySelector(".popup__close");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");


 
function handleImageClick(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openModal(imagePopup);
}
 
function renderCard(cardData, container) {
  const card = new Card(cardData, cardTemplateSelector, handleImageClick);
  const cardElement = card.generateCard();
  container.prepend(cardElement);
}
 
function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}
 
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editPopup);
}
 
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(
    { name: cardNameInput.value, link: cardLinkInput.value },
    cardsContainer
  );
  closeModal(newCardPopup);
  newCardForm.reset();
  newCardFormValidator.resetValidation();
}
 
const editProfileFormValidator = new FormValidator(
  validationConfig,
  editProfileForm
);
editProfileFormValidator.setEventListeners();
 
const newCardFormValidator = new FormValidator(validationConfig, newCardForm);
newCardFormValidator.setEventListeners();
 
editButton.addEventListener("click", function () {
  fillProfileForm();
  editProfileFormValidator.resetValidation();
  openModal(editPopup);
});
 
editCloseButton.addEventListener("click", function () {
  closeModal(editPopup);
});
 
editProfileForm.addEventListener("submit", handleProfileFormSubmit);
 
addButton.addEventListener("click", function () {
  newCardFormValidator.resetValidation();
  openModal(newCardPopup);
});
 
newCardCloseButton.addEventListener("click", function () {
  closeModal(newCardPopup);
});
 
newCardForm.addEventListener("submit", handleCardFormSubmit);
 
imagePopupClose.addEventListener("click", function () {
  closeModal(imagePopup);
});
 
document.querySelectorAll(".popup").forEach(function (popup) {
  popup.addEventListener("click", handleOverlayClose);
});
 
initialCards.forEach(function (cardData) {
  const card = new Card(cardData, cardTemplateSelector, handleImageClick);
  cardsContainer.append(card.generateCard());
});