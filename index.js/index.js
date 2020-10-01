console.log("Hello world");

let popup = document.querySelector(".popup");
let profile = document.querySelector(".profile");
let buttonOpenPopup = profile.querySelector(".button__edit");
let buttonClosePopup = popup.querySelector(".popup__close-image");
let buttonSavePopup = popup.querySelector(".button__submit")

let popupToggle = () => {
    popup.classList.toggle("popup_is-opened")
}

buttonOpenPopup.addEventListener("click", popupToggle)
buttonClosePopup.addEventListener("click", popupToggle)
buttonSavePopup.addEventListener("click", popupToggle)