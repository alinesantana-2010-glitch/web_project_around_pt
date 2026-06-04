import { enableValidation, resetValidation } from "./validate.js";

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
const formElement = document.querySelector("#edit-profile-form");


const addButton = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");
const newCardCloseButton = newCardPopup.querySelector(".popup__close");
const newCardForm = document.querySelector("#new-card-form");
const cardNameInput = newCardPopup.querySelector(".popup__input_type_card-name");
const cardLinkInput = newCardPopup.querySelector(".popup__input_type_url");
const cardsContainer = document.querySelector(".cards__list");


const imagePopup = document.querySelector("#image-popup");
const imagePopupClose = imagePopup.querySelector(".popup__close");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");


const cardTemplate = document.querySelector("#card-template");


function openModal(modal) {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscClose);
}
 
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscClose);
}
 

function handleOverlayClose(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}
 

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}
 
 
function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}
 
function handleOpenEditModal() {
  fillProfileForm();
  resetValidation(formElement, validationConfig);
  openModal(editPopup);
}
 
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editPopup);
}
 
 
function getCardElement(name, link) {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
 
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
 
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__like-button_is-active");
  });
 
  deleteButton.addEventListener("click", function () {
    deleteButton.closest(".card").remove();
  });
 
  cardImage.addEventListener("click", function () {
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
    openModal(imagePopup);
  });
 
  return cardElement;
}
 
function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.prepend(cardElement);
}
 
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(cardNameInput.value, cardLinkInput.value, cardsContainer);
  closeModal(newCardPopup);
  newCardForm.reset();
}
 

editButton.addEventListener("click", handleOpenEditModal);
editCloseButton.addEventListener("click", function () {
  closeModal(editPopup);
});
formElement.addEventListener("submit", handleProfileFormSubmit);
 
 
addButton.addEventListener("click", function () {
  resetValidation(newCardForm, validationConfig);
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
 

initialCards.forEach(function (card) {
  renderCard(card.name, card.link, cardsContainer);
});

enableValidation(validationConfig);