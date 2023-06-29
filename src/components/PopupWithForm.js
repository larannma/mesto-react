function PopupWithForm(props) {
  return (
    <div className="popup editPopup">
      <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <h2 className="popup__title">{props.title}</h2>
          <form name={props.name} className="popup__form" novalidate>
            {props.children}
          </form>
      </div>
  </div>
  );
}

export default PopupWithForm;
