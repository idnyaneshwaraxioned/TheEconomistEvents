
// Humburger toogle menu icon start
function toggleNav() {
	let hamburger = document.querySelector('.hamburger');
	let menu1 = document.querySelector('.main-menu');
	hamburger.addEventListener('click', function () {
		hamburger.classList.toggle('active');
		menu1.classList.toggle('active');
	})
}
toggleNav();
// Humburger toogle menu icon end

// Form validation start
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
	let notify = document.querySelector('#wish');
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
		} else if (!notify.checked) {
			setError(notify, '*Please checked wish');
			return false;
		} else {
			return true;
		}
	}

	function setError(input, message) {
		let formControl = input.parentElement;
		let errorSpan = formControl.querySelector('.error');
		errorSpan.innerText = message;

		setTimeout(function () {
			errorSpan.innerText = '';
		}, 2000)
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
// Form validation done

// Scroll btn start
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
// Scroll btn end

// new page plenary section white box start
function whitebox() {
	let mainBox = document.createElement('div');
	let imgbox = document.createElement('div');
	let boxImage = document.createElement('img');
	let closeBtn = document.createElement('button');
	let plenaryItem = document.querySelectorAll('#plenary li');

	mainBox.classList.add('mainbox');
	imgbox.classList.add('whitebox');
	closeBtn.classList.add('whiteBtn');
	imgbox.appendChild(closeBtn);
	imgbox.appendChild(boxImage);
	mainBox.appendChild(imgbox);
	document.body.appendChild(mainBox);

	plenaryItem.forEach(function (val) {
		val.addEventListener('click', function () {
			let img = val.querySelector('img');
			boxImage.src = img.src;

			setTimeout(function () {
				mainBox.style.display = 'block';
			}, 300);
		});
	});

	closeBtn.addEventListener('click', function () {
		mainBox.style.display = 'none';
	});
}
whitebox();
// new page plenary section white box end

// Speaker page filter,load btn and search start 
function speakerfun() {
	let filterlist = document.querySelectorAll('.filter-btn li');
	let speaker = document.querySelectorAll('.speakerlist li');
	let loadbtn = document.querySelector('.load-btn a');
	let searchinput = document.querySelector('.searchbox input');
	let index = 6;

	for (let i = 0; i < filterlist.length; i++) {
		filterlist[i].addEventListener('click', function () {
			let filterVal = this.querySelector('a').getAttribute('title');

			filterlist.forEach(function (val) {
				val.querySelector('a').classList.remove('active');
			})
			filterlist[i].querySelector('a').classList.add('active');

			speaker.forEach(function (val) {
				let datatrr = val.getAttribute('data-filter');

				if (datatrr === filterVal) {
					val.style.display = "unset";
				}
				else {
					val.style.display = "none";
				}

				if (filterVal === "all") {
					val.style.display = 'block';
				}
			});
		})
	}

	loadbtn.addEventListener('click', function () {
		index = index + 6;
		if (index === 30) {
			loadbtn.style.display = 'none';
		}
		showspeaker();
	})

	function showspeaker() {
		for (let i = 0; i < index; i++) {
			speaker[i].style.display = 'block';
		}
	}
	showspeaker();

	searchinput.addEventListener('keyup', function () {
		speaker.forEach(function (val) {
			let sname = val.querySelector('.speaker_name').innerText;
			if (sname.toLowerCase().indexOf(searchinput.value.toLowerCase()) > -1) {
				val.style.display = "block";
			}
			else {
				val.style.display = "none";
			}
		});
	});

}

let page_path = window.location.href;  //getting active page path

if (page_path.includes('speakers.html')) {
	speakerfun();
}
// Speaker page filter,load btn and search end 

// homepage slider start
if (page_path.includes('index.html')) {
	$(document).ready(function () {
		$('.slider').slick({
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
		});
	});
}
// homepage slider end



