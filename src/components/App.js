import React from "react";
import logo from "../images/header__logo.svg";
import Header from "./Header"
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <div classNameName="App" className="root">
      <div className="root__page">
        <Header logo={logo}/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
        <Footer />
        <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title={"Редактировать профиль"} name={"profileInfo"} styleClass={"edit"}>
        <input id="name-input" name="name" type="text" placeholder="Имя" className="popup__text popup__text_type_name" required minlength="2" maxlength="40"/>
        <span className="name-input-error popup__text-error"></span>
        <input id="interests-input" name="interests" type="text" placeholder="Деятельность" className="popup__text popup__text_type_interests" required minlength="2" maxlength="200"/>
        <span className="interests-input-error popup__text-error"></span>
        <button type="submit" className="popup__submit-btn">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title={"Новое место"} name={"cardInfo"} styleClass={"add"}>
        <input id="cardName-input" name="name" type="text" placeholder="Название" className="popup__text popup__text_type_name" required minlength="2" maxlength="30"/>
          <span className="cardName-input-error popup__text-error"></span>
          <input id="photo-link-input" name="photo-link" type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_type_photo-link" required/>
          <span className="photo-link-input-error popup__text-error"></span>
          <button type="submit" className="popup__submit-btn">Создать</button>
        </PopupWithForm>
        <ImagePopup />
        <PopupWithForm isOpen={false} onClose={closeAllPopups} title={"Вы уверены?"} name={"cardInfo"} styleClass={"confirm"}>
        <button type="submit" className="popup__submit-btn popup__confirm-btn">Да</button>
        </PopupWithForm>
        <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title={"Обновить аватар"} name={"cardInfo"} styleClass={"update"}>
        <input id="update-profile-photo-input" name="photo-avatar-link" type="url" placeholder="Ссылка на аватар" className="popup__text popup__text_type_photo-avatar-link" required/>
        <span className="update-profile-photo-input-error popup__text-error"></span>
        <button type="submit" className="popup__submit-btn">Сохранить</button>
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
