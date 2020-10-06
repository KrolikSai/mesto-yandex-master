console.log("Hello world");

let popup = document.querySelector(".popup");
let profileInfo = document.querySelector(".profile__info");
let buttonOpenPopup = profileInfo.querySelector(".profile__button_edit");
let buttonClosePopup = popup.querySelector(".popup__close-image");
let buttonSavePopup = popup.querySelector(".popup__button_submit");
let popupContainer = document.querySelector(".popup__container");

let popupToggle = () => {
    popup.classList.toggle("popup_is-opened")
}

buttonOpenPopup.addEventListener("click", popupToggle)
buttonClosePopup.addEventListener("click", popupToggle)
buttonSavePopup.addEventListener("click", popupToggle)

let profileInfoName = profileInfo.querySelector(".profile__info_name");
let profileInfoProfession = profileInfo.querySelector(".profile__info_profession")
let formElementOne = popup.querySelector(".popup__field-one");
let formElementTwo = popup.querySelector(".popup__field-two");

function addName() {
    profileInfoName.innerHTML = '<h2 class="profile__name">Жак-Ив Кусто</h2>';
}
addName();
function addProfession() {
    profileInfoProfession.innerHTML = '<p class="profile__profession">Исследователь океана</p>';
}
addProfession();

function formSubmitName (evt) {
    evt.preventDefault(); 

    let name = document.querySelector(".input__text_type_name");

   
let nameHolder = document.querySelector('.profile__name'); //querySelector находить элемент и присваивает его переменной
nameHolder.textContent = name.value; //textContent динамически присваивает значения компонентам html

}

let name = document.querySelector(".input__text_type_name");

name.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
       event.preventDefault();
       document.querySelector(".popup__button_submit").click();
    }
 });

buttonSavePopup.addEventListener('click', formSubmitName); 

/// вторая строка попапа

function formSubmitProfession (evt) {
    evt.preventDefault(); 

    let profession = document.querySelector(".input__text_type_aboutyou");

   
let professionProfile = document.querySelector('.profile__profession');
professionProfile.textContent = profession.value; 

}

buttonSavePopup.addEventListener('click', formSubmitProfession); 

let profession = document.querySelector(".input__text_type_aboutyou");
profession.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
       event.preventDefault();
       document.querySelector(".popup__button_submit").click();
    }
 });