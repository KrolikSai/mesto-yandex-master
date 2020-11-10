///карточки
const initialCards = [

    {
        name: 'Кейптаун',
        link: 'https://images.unsplash.com/photo-1529528070131-eda9f3e90919?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
        name: 'Дельта Окаванго',
        link: 'https://images.unsplash.com/photo-1528376406316-5fb482c79b5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80',
    },
    {
        name: 'Скай',
        link: 'https://images.unsplash.com/photo-1500408921219-79e2a10faaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    },
    {
        name: 'Остров Фрейзер',
        link: 'https://images.unsplash.com/photo-1591014148345-40a3256ad822?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80',
    },
    {
        name: 'Амстердам',
        link: 'https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    },
    {
        name: 'Серенгети',
        link: 'https://images.unsplash.com/photo-1580681477315-f272d1430746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=710&q=80',
    }
];
// добавить этот массив данных в html через
const list = document.querySelector('.elements__grid');
//переменная для добавления значения из input
const addButton = document.querySelector('.popup_type_new-card__button-submit');
const inputName = document.querySelector('.input__text_type_name-add');
const inputLink = document.querySelector('.input__text_type_link')

const renderList = () => {
    const items = initialCards.map(element => {
        return getItems(element);
    }).join('');
    // так как items - массив, нужно восопльзоваться join


    list.insertAdjacentHTML('afterbegin', items);

};

// функция которая будет возвращать вёрстку при каждом вызове
//эта функция будет применять объект data и возвращать повторяющийся участок кода
const getItems = (data) => {
    return `<div class="element">
                <img alt="Фотография Кейптауна" class="element__logo" src='${data.link}'>
                <h2 class="element__name">${data.name}</h2>
                <button type="button" class="element__button-like"></button>
            </div>`

};


// навесить обработчики. обьявляем отдельную функцию чтобы она не перемешивалась со всей остальной
const bindHandlers = () => {
    addButton.addEventListener('click', () => {
        const item = getItems({
            name: inputName.value,
            link: inputLink.value
        })
        list.insertAdjacentHTML('afterbegin', item);
    });
};
renderList();
bindHandlers();

// popups
let popupEdit = document.querySelector(".popup_type_edit");
let popupNew = document.querySelector(".popup_type_new-card")
let popupImage = document.querySelector(".popup_type_image");

// popup close buttons
let buttonClosePopupEdit = popupEdit.querySelector(".popup__close-image");
let buttonClosePopupNew = popupNew.querySelector(".popup__close-image");


// popup open buttons
let profileInfo = document.querySelector(".profile__info");
let buttonOpenPopupEdit = profileInfo.querySelector(".profile__button-edit");
let profile = document.querySelector(".profile");
let buttonOpenPopupNew = profile.querySelector(".profile__button-add");

// popup-save
let buttonSavePopupNew = document.querySelector(".popup_type_new-card__button-submit");
let buttonSavePopupEdit = document.querySelector(".popup_type_edit__button-submit");


const popupToggle = function (popup) {
    popup.classList.toggle("popup_is-opened")
}
// open toggle
buttonOpenPopupEdit.addEventListener('click', function () {
    popupToggle(popupEdit)
})
buttonOpenPopupNew.addEventListener('click', function () {
    popupToggle(popupNew)
})
// close toggle
buttonClosePopupEdit.addEventListener('click', function () {
    popupToggle(popupEdit)
})
buttonClosePopupNew.addEventListener('click', function () {
    popupToggle(popupNew)
})
// save toggle
buttonSavePopupNew.addEventListener('click', function () {
    popupToggle(popupNew)
})
buttonSavePopupEdit.addEventListener('click', function () {
    popupToggle(popupEdit)
})


let profileInfoName = profileInfo.querySelector(".profile__name");
let profileInfoProfession = profileInfo.querySelector(".profile__profession")
let formElementOne = document.querySelector(".input__text_type_name");
let formElementTwo = document.querySelector(".input__text_type_aboutyou");

function formSubmitName(evt) {
    evt.preventDefault();
    //const popupEditContainer = document.querySelector(".popup_type_edit__container");
    const name = document.querySelector(".input__text_type_name");
    const profession = document.querySelector(".input__text_type_aboutyou");

    const nameHolder = profileInfo.querySelector('.profile__name'); //querySelector находить элемент и присваивает его переменной
    nameHolder.textContent = name.value; //textContent динамически присваивает значения компонентам html
    const professionHolder = profileInfo.querySelector('.profile__profession');
    professionHolder.textContent = profession.value;
}
buttonSavePopupEdit.addEventListener('click', formSubmitName);

// button like


