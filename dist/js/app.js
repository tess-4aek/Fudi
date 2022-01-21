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

// Скрипты модального окна

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

const burgerBtn = document.querySelector('.menu-btn__elem');
const burgerMenu = document.querySelector('.header__menu-content');
burgerBtn.onclick = () => {
    burgerMenu.classList.toggle('active');
}

// function statsOutNums(num, elem, step, time) {
//     console.log(num);
//     let l = document.querySelector('#' + elem);
//     n = 0;
//     let t = time / (num / step);
//     let interval = setInterval(() => {
//         n = n + step;
//         l.innerHTML = n;
//         if (n >= num) {
//             clearInterval(interval);
//             l.innerHTML = num;
//         }
//     }, t);
// }


// statsOutNums(23567, 'statsNum1', 100, 6000);
// statsOutNums(431729, 'statsNum2', 1000, 3000);
// statsOutNums(892173, 'statsNum3', 1000, 3000);
// statsOutNums(56581, 'statsNum4', 100, 6000);
// statsOutNums(3182, 'statsNum5', 10, 1500);