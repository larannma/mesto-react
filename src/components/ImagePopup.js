function ImagePopup() {
    return (
        <div className="popup cardPopup">
            <div className="popup__image-container">
            <button type="button" className="popup__close-button"></button>
            <img alt="Красивая картинка" className="popup__image"/>
            <p className="popup__image-text">Горный Алтай</p>
            </div>
      </div>
    );
  }
  
  export default ImagePopup;
  