'use strict';

let cvPopup = document.getElementById('popup');
let popupClose = document.getElementById('popup_close_btn');

//  Hides the CV popup
function popupDismiss() {
    cvPopup.style.opacity = '0';
    cvPopup.style.zIndex = '-1';
    popupClose.style.display = 'none';
}

popupClose.addEventListener('click', popupDismiss);