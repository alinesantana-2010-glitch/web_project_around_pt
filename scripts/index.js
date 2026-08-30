import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";


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

const cardTemplateSelector = "#card-template";

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const editProfileForm = document.querySelector("#edit-profile-form");
const nameInput = editProfileForm.querySelector(".popup__input_type_name");
const descriptionInput = editProfileForm.querySelector(
  ".popup__input_type_description"
);
const newCardForm = document.querySelector("#new-card-form");

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

function handleCardClick(name, link) {
  imagePopup.open(name, link);
}

function createCard(cardData) {
  const card = new Card(cardData, cardTemplateSelector, handleCardClick);
  return card.generateCard();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      cardSection.addItem(createCard(cardData));
    },
  },
  ".cards__list"
);
cardSection.renderItems();

const editProfileFormValidator = new FormValidator(
  validationConfig,
  editProfileForm
);
editProfileFormValidator.setEventListeners();

const newCardFormValidator = new FormValidator(validationConfig, newCardForm);
newCardFormValidator.setEventListeners();

const editProfilePopup = new PopupWithForm("#edit-popup", (formValues) => {
  userInfo.setUserInfo({ name: formValues.name, job: formValues.description });
  editProfilePopup.close();
});
editProfilePopup.setEventListeners();

const newCardPopup = new PopupWithForm("#new-card-popup", (formValues) => {
  const cardElement = createCard({
    name: formValues["place-name"],
    link: formValues.link,
  });
  cardSection.addItem(cardElement);
  newCardPopup.close();
  newCardFormValidator.resetValidation();
});
newCardPopup.setEventListeners();

editButton.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.name;
  descriptionInput.value = currentUserInfo.job;
  editProfileFormValidator.resetValidation();
  editProfilePopup.open();
});

addButton.addEventListener("click", () => {
  newCardFormValidator.resetValidation();
  newCardPopup.open();
});