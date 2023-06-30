import React from "react";
import api from "../utils/api"

function Main ({onEditProfile, onAddPlace, onEditAvatar, ...props}) {
  
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserAvatar(res.avatar);
      setUserDescription(res.about);
      setUserName(res.name);
    })
  }, []);

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
          {props.children}
        </section>
      </main>
    </>
  );
}

export default Main;