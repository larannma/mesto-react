function Card({onCardClick, ...props}) {

  function handleClick() {
    onCardClick(props);
  }
  
  return (
    <div key={props.id} className="element">
      <button aria-label="Кнопка корзины" type="button" className="element__trash"></button>
      <img src={props.url} alt={props.name} className="element__image" role="button" onClick={handleClick}/>
      <div className="element__description">
        <h2 className="element__name">{props.name}</h2>
        <div className="element__extra-info">
          <button aria-label="Кнопка лайка" type="button" className="element__like-ico"></button>
          <p className="element__like-count">{props.likes}</p>
        </div>
    </div>
  </div>
  );
}

export default Card;
