import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({onCardClick, onLikeClick, ...props}) {
  const сurrentUser = React.useContext(CurrentUserContext);
  const isOwn = props.owner === сurrentUser.id;
  const isLiked = props.likes.some(i => i._id === сurrentUser.id);
  const cardLikeButtonClassName = ( 
    `element__like-ico ${isLiked && 'element__like-ico_active'}` 
  );

  function handleClick() {
    onCardClick(props);
  }
  
  return (
    <div className="element">
      {isOwn && <button aria-label="Кнопка корзины" type="button" className='element__trash' />}
      <img src={props.url} alt={props.name} className="element__image" role="button" onClick={handleClick}/>
      <div className="element__description">
        <h2 className="element__name">{props.name}</h2>
        <div className="element__extra-info">
          <button aria-label="Кнопка лайка" type="button" className={cardLikeButtonClassName} onClick={onLikeClick(props)}></button>
          <p className="element__like-count">{props.likes.length}</p>
        </div>
    </div>
  </div>
  );
}

export default Card;
