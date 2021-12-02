//marquee js
/////////////////////////////////////////////////////////////
function handleMarquee() {
	const marquee = document.querySelectorAll('.marquee');
	let direction = 1;
	let speed = 4 * direction;
	const maxSpeed = 6;
	let lastScrollPos = 0;
	let timer;

	marquee.forEach(function (el) {
		const container = el.querySelector('.inner');
		const content = el.querySelector('.inner > *');
		//Get total width
		const elWidth = content.offsetWidth;


		//Duplicate content
		for (var i = 0; i < 6; i++) {
			const clone = content.cloneNode(true);
			container.appendChild(clone);
		}

		let progress = 1;

		function loop() {
			progress = progress - speed;

			if (progress <= (elWidth - 1) * -1) {
				progress = 0;
			}

			container.style.transform = 'translateX(' + progress + 'px)';
			container.style.transform += 'skewX(' + speed + 'deg)';

			window.requestAnimationFrame(loop);
		}
		loop();
	});

	window.addEventListener('scroll', function () {
		let scrollPos = window.scrollY;
		let scrollValue = scrollPos;
		getDirection = scrollPos - lastScrollPos;

		lastScrollPos = scrollPos;

		if (scrollValue > maxSpeed) scrollValue = maxSpeed;
		else if (scrollValue < -maxSpeed) scrollValue = -maxSpeed;

		if (getDirection > 0) {
			direction = 1;
		} else {
			direction = -1;
		}

		speed = scrollValue;

		clearTimeout(timer);
		timer = setTimeout(handleSpeedClear, 10);
	});

	function handleSpeedClear() {
		speed = 4;
	}
};

handleMarquee();

// Initialize Tootlips and Popovers
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});

//Navbar Box Shadow on Scroll 
$(function () {
	var navbar = $('.navbar');
	$(window).scroll(function () {
		if ($(window).scrollTop() <= 40) {
			navbar.css('box-shadow', 'none');
		} else {
			navbar.css('box-shadow', '0px 10px 20px rgba(0, 0, 0, 0.4)');
		}
	});
})