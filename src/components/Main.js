import PopupWithForm from "./PopupWithForm";

function Main () {

  function handleEditAvatarClick() {
    const editPopup = document.querySelector(".updatePopup");
    editPopup.classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    const editPopup = document.querySelector(".editPopup");
    editPopup.classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    const editPopup = document.querySelector(".addPopup");
    editPopup.classList.add("popup_opened");
  }

  return (
    <>
      <main>
        <section className="profile root__section">
          <div className="profile__base">
            <div type="button" className="profile__overlay-container" onClick={handleEditAvatarClick}>
              <img className="profile__avatar"/>
            </div>
            <div className="profile__info">
              <div className="profile__extra-info">
                <h1 className="profile__title"></h1>
                <button type="button" onClick={handleEditProfileClick} aria-label="Кнопка редактирования профиля" className="profile__edit-button"></button>
              </div>
              <p className="profile__subtitle"></p>
            </div>
          </div>
          <button type="button" onClick={handleAddPlaceClick} aria-label="Кнопка добавления нового поста" className="profile__add-button"></button>
        </section>
        <section aria-label="Посты в профиле" className="elements root__section">
          <template id="card">
            <div className="element">
              <button aria-label="Кнопка корзины" type="button" className="element__trash"></button>
              <img src="./images/juk.png" alt="Жук" className="element__image" role="button"/>
              <div className="element__description">
                <h2 className="element__name">Опасный зверь</h2>
                <div className="element__extra-info">
                  <button aria-label="Кнопка лайка" type="button" className="element__like-ico"></button>
                  <p className="element__like-count">0</p>
                </div>
              </div>
            </div>
          </template>
        </section>
      </main>
      <PopupWithForm title={"Редактировать профиль"} name={"profileInfo"}>
        <input id="name-input" name="name" type="text" placeholder="Имя" className="popup__text popup__text_type_name" required minlength="2" maxlength="40"/>
        <span className="name-input-error popup__text-error"></span>
        <input id="interests-input" name="interests" type="text" placeholder="Деятельность" className="popup__text popup__text_type_interests" required minlength="2" maxlength="200"/>
        <span className="interests-input-error popup__text-error"></span>
        <button type="submit" className="popup__submit-btn">Сохранить</button>
      </PopupWithForm>
      <div className="popup addPopup">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h2 className="popup__title">Новое место</h2>
            <form name="cardInfo" className="popup__form" novalidate>
              <input id="cardName-input" name="name" type="text" placeholder="Название" className="popup__text popup__text_type_name" required minlength="2" maxlength="30"/>
              <span className="cardName-input-error popup__text-error"></span>
              <input id="photo-link-input" name="photo-link" type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_type_photo-link" required/>
              <span className="photo-link-input-error popup__text-error"></span>
              <button type="submit" className="popup__submit-btn">Создать</button>
          </form>
    </div>
      </div>
      <div className="popup cardPopup">
        <div className="popup__image-container">
          <button type="button" className="popup__close-button"></button>
          <img alt="Красивая картинка" className="popup__image"/>
          <p className="popup__image-text">Горный Алтай</p>
    </div>
      </div>
      <div className="popup confirmPopup">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h2 className="popup__title popup__confirm">Вы уверены?</h2>
          <button type="submit" className="popup__submit-btn">Да</button>
        </div>
      </div>
      <div className="popup updatePopup">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
            <form name="cardInfo" className="popup__form" novalidate>
              <input id="update-profile-photo-input" name="photo-avatar-link" type="url" placeholder="Ссылка на аватар" className="popup__text popup__text_type_photo-avatar-link" required/>
              <span className="update-profile-photo-input-error popup__text-error"></span>
              <button type="submit" className="popup__submit-btn">Сохранить</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Main;