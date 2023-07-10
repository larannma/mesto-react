import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onSubmit}) {
  const [placeName, setPlaceName] = React.useState("");
  const [placeLink, setPlaceLink] = React.useState("");

  function handlePlaceNameChange(e) {
    setPlaceName(e.target.value);
  }

  function handlePlaceLinkChange(e) {
    setPlaceLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({placeName, placeLink});
    setPlaceName("");
    setPlaceLink("");
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} title={"Новое место"} name={"cardInfo"} styleClass={"add"}>
      <input value={placeName} onChange={handlePlaceNameChange} id="cardName-input" name="name" type="text" placeholder="Название" className="popup__text popup__text_type_name" required minLength="2" maxLength="30"/>
      <span className="cardName-input-error popup__text-error"></span>
      <input value={placeLink} onChange={handlePlaceLinkChange} id="photo-link-input" name="photo-link" type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_type_photo-link" required/>
      <span className="photo-link-input-error popup__text-error"></span>
      <button type="submit" className="popup__submit-btn">Создать</button>
  </PopupWithForm>
  );
}

export default AddPlacePopup;