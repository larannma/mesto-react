import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({avatarPhotoRef, onSubmit, isOpen, onClose}) {

    function handleSubmit(e) {
        e.preventDefault();
      
        onSubmit({
          avatar: avatarPhotoRef.current.value,
        });
        avatarPhotoRef.current.value = "";
      }

  return (
    <PopupWithForm onSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} title={"Обновить аватар"} name={"cardInfo"} styleClass={"update"}>
        <input ref={avatarPhotoRef} id="update-profile-photo-input" name="photo-avatar-link" type="url" placeholder="Ссылка на аватар" className="popup__text popup__text_type_photo-avatar-link" required/>
        <span className="update-profile-photo-input-error popup__text-error"></span>
        <button type="submit" className="popup__submit-btn">Сохранить</button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;