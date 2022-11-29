// Custom Scripts
// Custom scripts
const mainBody = document.querySelector(".main__body")

// header
const headerMenuM = document.querySelector(".header__menu-m")
const header = document.querySelector(".header")
const headerMenu = document.querySelector(".header__menu")
const headerNav = document.querySelector(".header__navigation")
let winWidth = window.innerWidth;
let winWidth_2 = document.documentElement.clientWidth
if (header){
header.addEventListener("click", function (e) {
	let target = e.target
	if (target.closest(".header__menu-m")) {
		headerToggle()
		if (((window.innerWidth < 991.98) && (window.innerHeight > 991.98))) {
			if (headerMenuM.classList.contains("-active") && mainBody.classList.contains('-locked')) {
				winWidth = window.innerWidth;
					window.addEventListener('resize', checkWinWidth)
			} else {
				window.removeEventListener('resize', checkWinWidth)
			}
		}
	}

	if (target.classList.contains('header__link') && !(target.closest('.header__link_arrow'))) {
		e.preventDefault
		closeMenu()
	}
	if (headerMenu.classList.contains("-active") && !target.closest('.header__navigation') && !target.closest('.header__menu-m')){
		closeMenu()
	}
	if (target.closest('.header__link_arrow')){
		headerSublist(target)
	}

});
}
function headerToggle(){
	headerMenuM.classList.toggle("-active");
	headerMenu.classList.toggle("-active");
	mainBody.classList.toggle('-locked');
}
// checkWinWidth
function checkWinWidth(){
	let winWidthNew = window.innerWidth;
	if (!(winWidthNew === winWidth)){
		winWidth = winWidthNew;
		if (headerMenuM.classList.contains("-active")) {
			closeMenu()
		}
		window.removeEventListener('resize', checkWinWidth)
	}

}
// close menu
function closeMenu() {
	headerMenuM.classList.remove("-active");
	headerMenu.classList.remove("-active");
	mainBody.classList.remove('-locked');
	let headerLiOpen = header.querySelector('li.-open')
	if (headerLiOpen){
		header.querySelector('li.-open').classList.remove('-open')
	}
}

// right padding
let delay = 800;
let rp = document.querySelectorAll('.-rp')
function rightPadding() {
	let winWidth = window.innerWidth;
	let winWidth_2 = document.documentElement.clientWidth
	if (winWidth != winWidth_2) {
		mainBody.style.paddingRight = winWidth - winWidth_2 + "px"
	}
}
function removeRightPadding() {
	if (mainBody.style.paddingRight) {
		mainBody.style.paddingRight = ""
	}
}

// headerSublist
function headerSublist(element){
	let headerLiOpen = header.querySelector('li.-open')
	let headerLiTarget = element.closest('li')
	if (headerLiOpen && headerLiOpen != headerLiTarget){
		headerLiOpen.classList.remove('-open')
		headerLiTarget.classList.add('-open')
	} else {
		headerLiTarget.classList.toggle('-open')
	}
}





;
// popup
let popupLink = document.querySelectorAll('.-popup-link')
if (popupLink.length > 0) {
	popupLink.forEach(element => {
		let hrefAttrPopup = element.getAttribute('href');
		let popup = document.querySelector(`${hrefAttrPopup}`);
		if (popup) {
			element.addEventListener("click", function (e) {
				popupOpen(popup)
				e.defaultPrevented;
			});
		}
	});
};

function popupOpen(popup) {
	let popupActive = document.querySelector('.popup.-active');
	if (popupActive) {
		popupActive.classList.remove(".-active")
	}
	if (headerMenuM.classList.contains("-active")) {
		closeMenu()
	}
	if (!(mainBody.classList.contains('-locked'))) {
		setTimeout(rightPadding(), 800)
		mainBody.classList.add('-locked')
	}
	popup.classList.add("-active")
	popupClose(popup);
}

function popupClose(popup) {
	popup.addEventListener("click", function (e) {
		let click = e.target
		if ((click.closest(".-close")) || (!(click.closest(".popup__block")))) {
			// stopVideo(popup)
			popup.classList.remove("-active")
			setTimeout(removeRightPadding(), delay)
			mainBody.classList.remove('-locked')
		}
	});
}

// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// let player;

// function onYouTubeIframeAPIReady() {
// 	player = new YT.Player(".player", {
// 		// events: {
// 		// 	'onReady': onPlayerReady,
// 		// 	'onStateChange': onPlayerStateChange
// 		// }
// 	});
// }

// function stopVideo(popup) {
// 	if (!popup.querySelector('.player')){
// 		return
// 	}
// 	// let player = popup.querySelector('.player')
// 	console.log(10)
// 	onYouTubeIframeAPIReady()
// 	console.log(player)
// 	if (player){
// 		// stopVideo()
// 	}
// };
if (document.querySelector(".benefit__slider")){
const swiperBenefit = new Swiper('.benefit__slider', {
	// Optional parameters
	slidesPerView: 'auto',
	spaceBetween: 16,
	simulateTouch: true,
	pagination: {
		el: '.benefit__paggination',
		clickable: true,
	},
});
}

if (document.querySelector(".our-video__slider")) {
const swiperOurVideo = new Swiper('.our-video__slider', {
	// Optional parameters
	slidesPerView: 'auto',
	spaceBetween: 20,
	simulateTouch: true,
	pagination: {
		el: '.our-video__pagination',
		clickable: true,
	},
});
}

if (document.querySelector(".our-case__slider")) {
const swiperCase = new Swiper('.our-case__slider', {
	// Optional parameters
	slidesPerView: 1,
	spaceBetween: 16,
	simulateTouch: true,
	pagination: {
		el: '.our-case__pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.our-case-next',
		prevEl: '.our-case-prev',
	},
});
}

if (document.querySelector(".our-feedback__slider")) {
const swiperOurFeedback = new Swiper('.our-feedback__slider', {
	// Optional parameters
	slidesPerView: 1,
	spaceBetween: 16,
	simulateTouch: true,
	pagination: {
		el: '.our-feedback__pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.our-feedback-next',
		prevEl: '.our-feedback-prev',
	},
});
}

if (document.querySelector(".wa-feedback__slide")) {
const swiperWaFeedback = new Swiper('.wa-feedback__slider', {
	// Optional parameters
	loop: true,
	slideClass: 'wa-feedback__slide',
	slidesPerView: 'auto',
	spaceBetween: 20,
	simulateTouch: true,
	navigation: {
		nextEl: '.wa-feedback-next',
		prevEl: '.wa-feedback-prev',
	},
});
}

if (document.querySelector(".foto-about-me__slider")) {
const fotoAboutMeSlider = new Swiper('.foto-about-me__slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 20,
	simulateTouch: true,
	pagination: {
		el: '.foto-about-me__pagination-1',
		clickable: true,
	},
});
}

if (document.querySelector(".foto-about-me__slider-2")) {
const fotoAboutMeSlider_2 = new Swiper('.foto-about-me__slider-2', {
	// Optional parameters
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 20,
	simulateTouch: true,
	pagination: {
		el: '.foto-about-me__pagination-2',
		clickable: true,
	},
});
};
// faq
let toggleFaqText = document.querySelectorAll('.faq-body__question span');

toggleFaqText.forEach(element => {
	element.addEventListener("click", function (e) {
		let click = e.target;
		if (click.closest('.faq-body__question')){
			let text = click.closest('.faq-body__question').querySelector('.faq-body__text');
			text.classList.toggle('faq-body__text_visible')
		}
	});
});

// toggle
let toggle = document.querySelector('.-toggle');
if (toggle){
	let toggleFilter = toggle.querySelector(".-toggle-filter")
	toggleFilter.addEventListener("click", changeToggleFilter)
}

function changeToggleFilter(event) {
	let clickElement = event.target
	let toggleNewFilter = clickElement.closest('.-toggle-choice')
	if (checkToActiveElement(".-toggle-choice", toggleNewFilter)){
		changeActiveElement(toggle, toggleNewFilter)
		let dataFilter = toggleNewFilter.dataset.filter
		changeToggleCard(dataFilter)
	}
}


function changeToggleCard(data) {
	let toggleCards = toggle.querySelectorAll('.-toggle-card');
	toggleCards.forEach(element => {
		if (data === "all") {
			element.style.display = "block"
		} else {
		element.style.display = element.dataset.card === data ? "block" : "none"
		}
	});
}
;
// our-video
let ourVideo = document.querySelector('.our-video');
if (ourVideo) {
	const ourVideoSlide = document.querySelectorAll('.our-video__slide');
	const ourVideoScreensaver = document.querySelectorAll('.our-video__screensaver');
	const ourVideoName = document.querySelectorAll('.our-video__li');
	ourVideo.addEventListener("click", function (e) {
		let click = e.target
		if (click.closest('.our-video__slide') && !click.closest('.our-video__slide').classList.contains('-active')) {
			let clickClosest = click.closest('.our-video__slide');
			checkSlide(clickClosest, ourVideoSlide, ourVideoScreensaver, ourVideoName)
		}
	});
}

function checkSlide(clickClosest, clickElement, checkImg, checkText) {
	const clickElementArr = Array.from(clickElement);
	const checkImgArr = Array.from(checkImg);
	const clickClosestElement = findIndex(clickElementArr, clickClosest);
	toggleActive(findActiveElement(clickElementArr))
	toggleActive(findActiveElement(checkImgArr))
	if (checkText) {
		const checkTextArr = Array.from(checkText);
		toggleActive(findActiveElement(checkTextArr))
		toggleActive(checkTextArr[clickClosestElement])
	}
	toggleActive(clickElementArr[clickClosestElement])
	toggleActive(checkImgArr[clickClosestElement])
}

function findIndex(arr, element) {
	return arr.findIndex(item => item == element);
}

function findActiveElement(arr) {
	return arr.find(item => item.classList.contains('-active'));
}

function toggleActive(element) {
	element.classList.toggle('-active')
};
// forms
	
let forms = Array.from(document.forms);
if (forms.length > 0){
	forms.forEach(element => {
		element.addEventListener("submit", checkForm)
		});
}

function checkForm(event) {
	
	event.preventDefault()
	let form = event.target
	let inputText = form.querySelector("[type = text]");
	let inputEmail = form.querySelector("[type = email]");
	let textarea = form.querySelector("textarea");
	let check = true;
	if (inputText) {
		check = checkText(inputText, 2) && check;
		// check = check ? checkInput : false
	}

	if (inputEmail) {
		check = checkEmail(inputEmail) && check;
	}

	if (textarea) {
		check = checkText(textarea, 5) && check;
	}

	if (check) {
		
		form.submit()
	}
}

function checkText(input, minLength) {
	let length = input.value.length;
	let flag = length >= minLength;
	showFormError(input, flag);
	return flag;
}

function checkEmail(input) {
	let value = input.value;
	let posDog = value.indexOf("@", 1);
	let result = value.includes(".", (posDog + 2)) && (posDog > 0);
	showFormError(input, result);
	return result;
}

function showFormError(input, visible) {
	let inputContainer = input.closest(".-input-line");
	let labelError = inputContainer.querySelector(".-error");
	labelError.style.display = visible ? "none" : "block";
}
;
// filter
let switchParentAll = document.querySelectorAll('.-switch');

if (switchParentAll.length > 0) {
	
	switchParentAll.forEach(element => {
		createPage(element, 1)
		createNumberPage(element)
		let switchPages = element.querySelector(".-switch-pages")
		switchPages.addEventListener("click", changePage)
		if (element.querySelector(".-switch-filter")){
			element.addEventListener("click", changeFilter)
		}
		
	});
}

function changeFilter(event) {
	let clickElement = event.target
	let switchParent = clickElement.closest('.-switch')
	if (checkToActiveElement(".-switch-choice", clickElement)){
		let newFilter = clickElement.closest(".-switch-choice")
		changeActiveElement(switchParent, newFilter)
		let dataFilter = newFilter.dataset.filter
		changeVisible(switchParent, dataFilter)
	}
	
}

function checkToActiveElement(selector, toggleFilterElement) {
	let parentClick = toggleFilterElement.closest(selector)
	let parentClickActive = parentClick.classList.contains("-active")
	return parentClick && !parentClickActive
}

function changeActiveElement(parent, newElement) {
	let activeFilter = parent.querySelector(".-active");
	activeFilter.classList.remove('-active')
	newElement.classList.add('-active')
	return newElement
}

function changeVisible(switchParent, parametr) {
	let cardFilter = switchParent.querySelectorAll('.-switch-card');
	cardFilter.forEach(element => {
		if (parametr === "all"){
			element.dataset.visible = "visible"
		} else {
			element.dataset.visible = element.dataset.card === parametr ? "visible" : "hidden"
		}
	});
	createNumberPage(switchParent)
	createPage(switchParent)
}

function createPage(switchParent, numberPage = 1) {
	let cardVisible = switchParent.querySelectorAll('[data-visible="visible"]');
	let cardHidden = switchParent.querySelectorAll('[data-visible="hidden"]');
	cardHidden.forEach(element => {
		element.style.display = "none"
	});
	cardVisible.forEach(element => {
		element.style.display = "none"
	});
	let cardVisibleLength = cardVisible.length
	for (let index = ((numberPage - 1) * 6); index < (numberPage * 6) && index < cardVisibleLength; index++) {
		let element = cardVisible[index];
		element.style.display = "block";
		if (element.querySelector(".-switch-card-number")){
			let switchCardNumber = element.querySelector(".-switch-card-number")
			switchCardNumber.textContent = (index % 6 + 1)
		}
	}
	
}

function changePage(event) {
	let pressedPage = event.target;
	if (checkToActiveElement(".-switch-number", pressedPage)){
		let activePage = pressedPage.closest(".-switch-pages").querySelector(".-switch-number.-active")
		activePage.classList.remove('-active')
		pressedPage.classList.add('-active')
		let numberPage = pressedPage.textContent
		let switchParent = pressedPage.closest('.-switch')
		createPage(switchParent, numberPage)
		scrollTo()
	}
}

function scrollTo() {
	document.querySelector("main").scrollIntoView({
		behavior: "smooth",
	})
}

function createNumberPage(switchParent) {
	let cardArray = switchParent.querySelectorAll('[data-visible="visible"]');
	let pageFilterBlock = switchParent.querySelector(".-switch-pages");
	pageFilterBlock.textContent = "";
	let quantityPageFilter = Math.ceil(cardArray.length / 6)
	for (let index = 1; index <= quantityPageFilter; index++) {
		let pageFilterNumber = document.createElement("div");
		pageFilterNumber.className = "page-number__number -switch-number";
		if (index === 1) {
			pageFilterNumber.classList.add('-active')
		}
		pageFilterNumber.textContent = index
		pageFilterBlock.append(pageFilterNumber)
	}
};

