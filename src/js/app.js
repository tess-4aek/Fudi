// Слайдер

const sliderReviews = new Swiper('.swiper', {
    slidesPerView: 1,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    speed: 1500,
});

// Скрипты модального окна авторизации

const logInBtn = document.querySelector('.header__log-in');
const logInModalWindow = document.querySelector('.modal-log-in');
const logInSubstrate = document.querySelector('.modal-log-in__substrate');
const logInClose = document.querySelector('.modal-log-in__close');
const logInLink = document.querySelector('#modalLink-log-in');
logInBtn.onclick = () => {
    logInModalWindow.classList.add('active');
    document.querySelector('body').classList.add('scroll-lock');
}
logInSubstrate.onclick = () => {
    logInModalWindow.classList.remove('active');
    document.querySelector('body').classList.remove('scroll-lock');
}
logInClose.onclick = () => {
    logInModalWindow.classList.remove('active');
    document.querySelector('body').classList.remove('scroll-lock');
}
logInLink.onclick = () => {
    logInModalWindow.classList.remove('active');
    signUpModalWindow.classList.add('active');
}

// Скрипты модального окна регистрации

const signUpBtn = document.querySelector('.header__sign-up');
const signUpModalWindow = document.querySelector('.modal-sign-up');
const signUpSubstrate = document.querySelector('.modal-sign-up__substrate');
const signUpClose = document.querySelector('.modal-sign-up__close');
const signUpLink = document.querySelector('#modalLink-sign-up');
signUpBtn.onclick = () => {
    signUpModalWindow.classList.add('active');
    document.querySelector('body').classList.add('scroll-lock');
}
signUpSubstrate.onclick = () => {
    signUpModalWindow.classList.remove('active');
    document.querySelector('body').classList.remove('scroll-lock');
}
signUpClose.onclick = () => {
    signUpModalWindow.classList.remove('active');
    document.querySelector('body').classList.remove('scroll-lock');
}
signUpLink.onclick = () => {
    signUpModalWindow.classList.remove('active');
    logInModalWindow.classList.add('active');
}

// Скрипт бургер меню

const burgerBtn = document.querySelector('.menu-btn');
const burgerMenu = document.querySelector('.header__menu-content');
burgerBtn.onclick = () => {
    burgerMenu.classList.toggle('active');
}

// Анимация при скролле

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);


    function animOnScroll(params) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');

                // Анимация прокрутки чисел
                const numbers = document.querySelectorAll('.stats__number');

                numbers.forEach((number) => {
                    number.innerHTML = number.getAttribute('data-start');

                    const updateNumber = () => {
                        const target = +number.getAttribute('data-end');
                        const c = +number.innerText;
                        if (c < target) {
                            number.innerText = c + 1;
                            setTimeout(updateNumber, 1);
                        } else {
                            number.innerText = target;
                        }
                    };
                    updateNumber();
                });
            }


        }
    }
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

animOnScroll();








// Кастомный селект + сортировка + отрисовка DOM
let select = function() {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    let selectInput = document.querySelectorAll('.select__input');
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });


    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerHTML,
            textInput = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current'),
            currentId = this.id;
        selectInput.value = currentId;
        currentText.innerHTML = text;
        if (selectInput.value === 'sortUpToDown') drawRecipts(sortUpToDown(reciptsArray));
        if (selectInput.value === 'sortDownToUp') drawRecipts(sortDownToUp(reciptsArray));
        if (selectInput.value === 'sortNaN') drawRecipts(reciptsArray);
        select.classList.remove('is-active');
    }
};

select();


let reciptsList = document.querySelector('.recipts__list').innerHTML;
let reciptsArray = [
    recipt_id_0 = {
        amount: 327,
        link: '#',
        image: 'img/food-imgs/food_img-1.jpg',
        imageAlt: 'Итальянская кухня',
        title: 'ITALIAN',
    },
    recipt_id_1 = {
        amount: 856,
        link: '#',
        image: 'img/food-imgs/food_img-2.jpg',
        imageAlt: 'Индийская кухня',
        title: 'INDIAN',
    },
    recipt_id_2 = {
        amount: 27,
        link: '#',
        image: 'img/food-imgs/food_img-3.jpg',
        imageAlt: 'Французкая кухня',
        title: 'FRENCH',
    },
    recipt_id_3 = {
        amount: 174,
        link: '#',
        image: 'img/food-imgs/food_img-4.jpg',
        imageAlt: 'Стейки',
        title: 'STEAKHOUSE',
    },
    recipt_id_4 = {
        amount: 731,
        link: '#',
        image: 'img/food-imgs/food_img-5.jpg',
        imageAlt: 'Еда из морепродуктов',
        title: 'SEAFOOD',
    },
    recipt_id_5 = {
        amount: 237,
        link: '#',
        image: 'img/food-imgs/food_img-6.jpg',
        imageAlt: 'Суши',
        title: 'SUSHI',
    },
    recipt_id_6 = {
        amount: 529,
        link: '#',
        image: 'img/food-imgs/food_img-7.jpg',
        imageAlt: 'Мексиканская кухня',
        title: 'MEXICAN',
    },
    recipt_id_7 = {
        amount: 145,
        link: '#',
        image: 'img/food-imgs/food_img-8.jpg',
        imageAlt: 'Китайская кухня',
        title: 'CHINESE',
    },
    recipt_id_8 = {
        amount: 237,
        link: '#',
        image: 'img/food-imgs/food_img-9.jpg',
        imageAlt: 'Пицца',
        title: 'PIZZA',
    },
    recipt_id_9 = {
        amount: 1437,
        link: '#',
        image: 'img/food-imgs/food_img-10.jpg',
        imageAlt: 'Американская кухня',
        title: 'AMERICAN',
    },
];

function sortUpToDown(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) continue;
        if (array[i].amount > pivot.amount) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...sortUpToDown(less), pivot, ...sortUpToDown(greater)];
}

function sortDownToUp(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) continue;
        if (array[i].amount < pivot.amount) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...sortDownToUp(less), pivot, ...sortDownToUp(greater)];
}

function drawRecipts(array) {
    reciptsList = '';
    for (let i = 0; i < array.length; i++) {
        reciptsList +=
            `${'<a href="' + array[i].link + '" class="recipts__item">' +
            '<div class="recipts__item-img">' +
            '<img src="' + array[i].image + '" alt="' + array[i].imageAlt + '">' +
            '</div>' +
            '<div class="recipts__item-content">' +
            '<div class="recipts__item-amount">' + array[i].amount + ' Recipes</div>' +
            '<div class="recipts__item-title">' + array[i].title + '</div>' +
            '</div>' +
            '</a>'
            }`;
        document.querySelector('.recipts__list').innerHTML = reciptsList;
    }
}

drawRecipts(reciptsArray);