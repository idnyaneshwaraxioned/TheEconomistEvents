/* Author: 

*/

// Humburger toogle menu icon

function toggleNav() {
	let hamburger = document.querySelector('.hamburger');
	let menu1 = document.querySelector('.main-menu');
	let menu2 = document.querySelector('.sub-menu');
	hamburger.addEventListener('click', function () {
		hamburger.classList.toggle('active');
		menu1.classList.toggle('active');
		menu2.classList.toggle('active');
	})
}
toggleNav();

// Active anchor menu item 

function anchorActive() {
	let anchor = document.querySelectorAll('.menu-item a');

	anchor.forEach(function (val) {
		val.addEventListener('click', function () {
			anchor.forEach(function (elem) {
				elem.classList.remove('active');
			});
			val.classList.add('active');
		});
	});
}
anchorActive()

// Form validation

function formValidate() {
	let form = document.querySelector('.newsletter-form');
	let type = document.querySelector('#type')
	let fname = document.querySelector('.fname');
	let sname = document.querySelector('.sname');
	let job = document.querySelector('.job');
	let company = document.querySelector('.company');
	let industry = document.querySelector('#industry');
	let country = document.querySelector('#country');
	let email = document.querySelector('.email');
	let userCheck = /^[A-Za-z. ]{3,30}$/;
	let emailexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		handleInput();
		resetForm();
	});

	function handleInput() {

		if (type.value === 'salutation') {
			setError(type, '*Select correct salutation');
			return false;
		}
		else if (!fname.value || !userCheck.test(fname.value)) {
			setError(fname, '*First name is not valid');
			return false;
		} else if (!sname.value || !userCheck.test(sname.value)) {
			setError(sname, '*Surname is not valid');
			return false;
		} else if (!job.value || !userCheck.test(job.value)) {
			setError(job, '*Enter valid job detail');
			return false;
		} else if (!company.value || !userCheck.test(company.value)) {
			setError(company, '*Enter valid job detail');
			return false;
		} else if (industry.value === 'industry') {
			setError(industry, '*Please select industry');
			return false;
		} else if (country.value === 'country') {
			setError(country, '*Please select industry');
			return false;
		} else if (!email.value || !emailexp.test(email.value)) {
			setError(email, '*Enter valid mail ID');
			return false;
		} else {
			return true;
		}
	}

	function setError(input, message) {
		let formControl = input.parentElement;
		let errorSpan = formControl.querySelector('.error')
		console.log(errorSpan);
		errorSpan.innerText = message;

		setTimeout(function () {
			errorSpan.innerText = '';
		}, 4000)
	}

	function resetForm() {
		type.value = 'salutation';
		fname.value = '';
		sname.value = '';
		job.value = '';
		company.value = '';
		industry.value = 'industry';
		country.value = 'country';
		email.value = '';
	}
}
formValidate();

// Scroll btn

function scrolbtn() {
	let scrollBtn = document.querySelector('.scrollbtn');

	window.addEventListener("scroll", function () {

		let scrollVal = this.scrollY;

		if (scrollVal > 600) {
			scrollBtn.classList.add('active');
		}
		else {
			scrollBtn.classList.remove('active');
		}
	});
	scrollBtn.addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	});
}
scrolbtn();

// homepage slider 

$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});


















