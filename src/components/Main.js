import React from "react";
import api from "../utils/api"

function Main ({onEditProfile, onAddPlace, onEditAvatar}) {
  
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserAvatar(res.avatar);
      setUserDescription(res.about);
      setUserName(res.name);
    })
  }, [])

  return (
    <>
      <main>
        <section className="profile root__section">
          <div className="profile__base">
            <div type="button" className="profile__overlay-container" onClick={onEditAvatar}>
              <img src={userAvatar} className="profile__avatar"/>
            </div>
            <div className="profile__info">
              <div className="profile__extra-info">
                <h1 className="profile__title">{userName}</h1>
                <button type="button" onClick={onEditProfile} aria-label="Кнопка редактирования профиля" className="profile__edit-button"></button>
              </div>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
          </div>
          <button type="button" onClick={onAddPlace} aria-label="Кнопка добавления нового поста" className="profile__add-button"></button>
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
    </>
  );
}

export default Main;