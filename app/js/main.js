import { Swiper, Autoplay, EffectFade, EffectCoverflow, Pagination, Navigation } from 'swiper'
Swiper.use([Autoplay, EffectFade, EffectCoverflow, Pagination, Navigation])

import MicroModal from 'micromodal'
import SmoothScroll from 'smooth-scroll'
import WOW from 'wow.js'
import { Fancybox } from '@fancyapps/fancybox'
import IMask from 'imask'

document.addEventListener('DOMContentLoaded', () => {
	new WOW().init()

	$(window).scroll(function () {
		var target = $(this).scrollTop()

		if (target == 0) {
			$('.up').removeClass('up--active')
		} else {
			$('.up').addClass('up--active')
		}
	})

	const gallerySwiper = new Swiper('.gallery-swiper', {
		effect: 'coverflow',
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 30,
			stretch: 30,
			scale: 0.7,
			depth: 200,
			modifier: 1,
			slideShadows: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

	const scroll = new SmoothScroll('a[href="#services"], a[href="#reviews"], a[href="#header"], a[href="#footer"]', {
		ignore: '.ignore',
		speed: 1500,
		speedAsDuration: true,
	})

	MicroModal.init({
		openTrigger: 'data-micromodal-open',
		closeTrigger: 'data-micromodal-close',
		disableFocus: true,
		disableScroll: true,
		awaitOpenAnimation: true,
		awaitCloseAnimation: true,
	})

	const swiper = new Swiper('.header-swiper', {
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 4000,
		},
	})

	const reviewsSwiper = new Swiper('.reviews-swiper', {
		loop: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

	const servicesSwiper = new Swiper('.services-swiper', {
		autoHeight: true,
		slidesPerView: 2,
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			600: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			998: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
	})

	document.querySelectorAll('.phone-mask').forEach((e) => {
		const phoneMask = IMask(e, { mask: '+{7} (000)000-00-00' })
	})

	const burgerBtn = document.querySelector('.burger-btn')
	const burgerMenu = document.querySelector('.burger-menu')
	const overlay = document.querySelector('.overlay')

	burgerBtn.addEventListener('click', () => {
		if (!burgerMenu.classList.contains('burger-menu--active')) {
			document.querySelector('html').style.overflowY = 'hidden'
		} else {
			console.log(1)
			document.querySelector('html').style.overflowY = 'auto'
		}
		burgerMenu.classList.toggle('burger-menu--active')
		burgerBtn.classList.toggle('burger-btn--active')
		overlay.classList.toggle('overlay--active')
	})
	overlay.addEventListener('click', () => {
		burgerMenu.classList.remove('burger-menu--active')
		burgerBtn.classList.remove('burger-btn--active')
		overlay.classList.remove('overlay--active')
		document.querySelector('html').style.overflowY = 'auto'
	})
})
