import React from "react";
import logo from "../images/header__logo.svg";
import Header from "./Header"
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api"
import Card from "./Card";

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

  React.useEffect(() => {
    api.getCards().then((res) => {
      const cardsApi = res.map((item) => ({
        name: item.name,
        url: item.link,
        likes: item.likes.length,
        id: item._id
      }));
      setCards(cardsApi);
    });
  }, []);

  function handleCardClick(cardInfo) {
    setImagePopupOpen(true);
    setSelectedCard(cardInfo);
  }

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
    setImagePopupOpen(false);
    setSelectedCard('');
  }

  return (
    <div classNameName="App" className="root">
      <div className="root__page">
        <Header logo={logo}/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}>
        {cards.map(item => (
          <Card onCardClick={handleCardClick} {...item}/>
        ))}
        </Main>
        <Footer />
        <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title={"Редактировать профиль"} name={"profileInfo"} styleClass={"edit"}>
        <input id="name-input" name="name" type="text" placeholder="Имя" className="popup__text popup__text_type_name" required minLength="2" maxLength="40"/>
        <span className="name-input-error popup__text-error"></span>
        <input id="interests-input" name="interests" type="text" placeholder="Деятельность" className="popup__text popup__text_type_interests" required minLength="2" maxLength="200"/>
        <span className="interests-input-error popup__text-error"></span>
        <button type="submit" className="popup__submit-btn">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title={"Новое место"} name={"cardInfo"} styleClass={"add"}>
        <input id="cardName-input" name="name" type="text" placeholder="Название" className="popup__text popup__text_type_name" required minLength="2" maxLength="30"/>
          <span className="cardName-input-error popup__text-error"></span>
          <input id="photo-link-input" name="photo-link" type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_type_photo-link" required/>
          <span className="photo-link-input-error popup__text-error"></span>
          <button type="submit" className="popup__submit-btn">Создать</button>
        </PopupWithForm>
        <ImagePopup onClose={closeAllPopups} isOpen={isImagePopupOpen} card={selectedCard}/>
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
