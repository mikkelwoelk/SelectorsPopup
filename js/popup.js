/**
 * Pop-up
 */

// Put all logic in an isolated object to limit the scope of the code
var ctaPopup = {
	popupClose: document.getElementById('ctaPopup_close_btn'),
	cvPopup: document.getElementById('ctaPopup'),
	infoButton: document.querySelector('.ctaPopup_inner_info_btn'),

	// The init method initiates the code
	init: function() {
			// Set the cookie name for the cookie that stores whether 
			// or not the user has closed the pop up already
			this.cookieName = 'selectors-pop-up' + '-' + (window.ctaPopupCookieId || 1);

			// Add event listener for close button
			// Note: We use bind(this) to bind the scope 
			// of this ctaPopup-object to the dismiss method
			this.popupClose.addEventListener('click', this.dismiss.bind(this));

			// Dismiss popup when clicking the CTA link
			this.infoButton.addEventListener('click', this.dismiss.bind(this));

			// Check if the user has dismissed the popup
			// If not; show the popoup
			if (!this.hasDismissed()) {
					this.show();
			}
	},

	// Reads the cookie to check if the user has dismissed already
	hasDismissed: function getCookie() {
			var v = document.cookie.match('(^|;) ?' + this.cookieName + '=([^;]*)(;|$)');
			return !!v;
	},

	show: function() {
			const popupEl = this.cvPopup;
			popupEl.classList.add('ctaPopup--show');

			setTimeout(function() {
					popupEl.classList.add('ctaPopup--fade-in');
			}, 50);
	},

	hide: function() {
			const popupEl = this.cvPopup;
			popupEl.classList.add('ctaPopup--fade-out');
			
			setTimeout(function() {
					popupEl.classList.remove('ctaPopup--show', 'ctaPopup--fade-in', 'ctaPopup--fade-out');
					popupEl.classList.add('ctaPopup--hidden');
			}, 50);
	},

	// Hide the pop-up and save a cookie that we can check for next time the page loads
	dismiss: function() {
			this.hide();

			var d = new Date;
			var days = 360;
			d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
			document.cookie = this.cookieName + "=" + true + ";path=/;expires=" + d.toGMTString();
	}
}

// Fire the init method when the DOM loads
document.addEventListener('DOMContentLoaded', ctaPopup.init());
