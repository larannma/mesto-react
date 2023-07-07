import React from "react";
import logo from "../images/header__logo.svg";
import Header from "./Header"
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api"
import Card from "./Card";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({}); //current user state variable

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      const userInfoApi = {
        name: res.name,
        about: res.about,
        _id: res._id,
        avatar: res.avatar
      }
      setCurrentUser(userInfoApi);
    });
  }, []);

  React.useEffect(() => {
    api.getCards().then((res) => {
      const cardsApi = res.map((item) => ({
        name: item.name,
        link: item.link,
        likes: item.likes,
        _id: item._id,
        owner: item.owner
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
    setSelectedCard({});
  }

  function handleCardLike(card) {
      const isLiked = card.likes.some(i => (
        i._id === currentUser._id
        ));

      if (!isLiked) {
        api.putLike(currentUser, card._id).then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
      } else {
        api.deleteLike(currentUser, card._id).then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
      }
  }

  
  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter(c => c._id !== card._id));
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App root">
        <div className="root__page">
          <Header logo={logo}/>
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}>
          {cards.map(item => (
            <Card key={item._id} onCardClick={handleCardClick} onLikeClick={handleCardLike} onCardDelete={handleCardDelete} {...item}/>
          ))}
          </Main>
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
          <PopupWithForm onSubmit={1} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title={"Новое место"} name={"cardInfo"} styleClass={"add"}>
            <input id="cardName-input" name="name" type="text" placeholder="Название" className="popup__text popup__text_type_name" required minLength="2" maxLength="30"/>
            <span className="cardName-input-error popup__text-error"></span>
            <input id="photo-link-input" name="photo-link" type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_type_photo-link" required/>
            <span className="photo-link-input-error popup__text-error"></span>
            <button type="submit" className="popup__submit-btn">Создать</button>
          </PopupWithForm>
          <ImagePopup onClose={closeAllPopups} isOpen={isImagePopupOpen} card={selectedCard}/>
          <PopupWithForm onSubmit={1} isOpen={false} onClose={closeAllPopups} title={"Вы уверены?"} name={"cardInfo"} styleClass={"confirm"}>
            <button type="submit" className="popup__submit-btn popup__confirm-btn">Да</button>
          </PopupWithForm>
          <PopupWithForm onSubmit={1} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title={"Обновить аватар"} name={"cardInfo"} styleClass={"update"}>
            <input id="update-profile-photo-input" name="photo-avatar-link" type="url" placeholder="Ссылка на аватар" className="popup__text popup__text_type_photo-avatar-link" required/>
            <span className="update-profile-photo-input-error popup__text-error"></span>
            <button type="submit" className="popup__submit-btn">Сохранить</button>
          </PopupWithForm>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
