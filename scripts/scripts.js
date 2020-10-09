let popup = document.querySelector(".popup");
let profileInfo = document.querySelector(".profile__info");
let buttonOpenPopup = profileInfo.querySelector(".profile__button-edit");
let buttonClosePopup = popup.querySelector(".popup__close-image");
let buttonSavePopup = popup.querySelector(".popup__button_submit");
let popupContainer = document.querySelector(".popup__container");

let popupToggle = () => {
    popup.classList.toggle("popup_is-opened")
}

buttonOpenPopup.addEventListener("click", popupToggle)
buttonClosePopup.addEventListener("click", popupToggle)
buttonSavePopup.addEventListener("click", popupToggle)

let profileInfoName = profileInfo.querySelector(".profile__name");
let profileInfoProfession = profileInfo.querySelector(".profile__profession")
let formElementOne = popup.querySelector(".input__text_type_name");
let formElementTwo = popup.querySelector(".input__text_type_aboutyou");

function formSubmitName (evt) {
    evt.preventDefault(); 
    let popupContainer = document.querySelector(".popup__container");
    let name = popupContainer.querySelector(".input__text_type_name");
    let profession = popupContainer.querySelector(".input__text_type_aboutyou");
   
let nameHolder = profileInfo.querySelector('.profile__name'); //querySelector находить элемент и присваивает его переменной
nameHolder.textContent = name.value; //textContent динамически присваивает значения компонентам html
let professionProfile = profileInfo.querySelector('.profile__profession');
professionProfile.textContent = profession.value; 
}
buttonSavePopup.addEventListener('click', formSubmitName); 

