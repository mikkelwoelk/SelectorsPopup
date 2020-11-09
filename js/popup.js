/*Popup JS*/

let cvPopup = document.getElementById('popup');
let popupClose = document.getElementById('popup_close_btn');

//  Displays and fades in popup, 5 sec after the site loads
const popupShow = async () => {
    cvPopup.classList.add('show');
    await delay(5000)
    if (cvPopup.classList.contains('show')){
        cvPopup.classList.add('fade-in');
    }
}

//  Fades out popup after .5 sec and removes classes, when clicking the close button
const popupDismiss = async () => {
    cvPopup.classList.add('fade-out');
    await delay(500)
    if (cvPopup.classList.contains('fade-out')){
        cvPopup.classList.remove('show', 'fade-in', 'fade-out');
        cvPopup.classList.add('hidden');
    }
}

//  Declaring a constant for a delay
const delay = ms => new Promise(res => setTimeout(res, ms));

popupClose.addEventListener('click', popupDismiss);
window.addEventListener('load', popupShow);