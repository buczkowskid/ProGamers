// DomContentLoaded - dopiero po wczytaniu całej strony uruchomia się funkcje JS
document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const navShow = document.querySelector(".navbar-collapse");
	const navItems = document.querySelector(".navbar-nav");
	// var myCarousel = document.querySelector("#portfolioCarousel");
	// var carousel = new bootstrap.Carousel(myCarousel, {interval: 200
	// wrap: false});

	//Adding shadow on the navigation
	function addShadow() {
		//IF, który sprawdzi, czy window.scrolly jest większy lub równy    200,  (true) dodaj do zmiennej nav klase shadow-bg (false) usuń .shadow-bg
		if (window.scrollY >= 200) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	//Hiding navigation after click
	function hideNav() {
		if (navShow.classList.contains("show")) {
			navShow.classList.remove("show");
		}
	}

	//Same function without IF
	// navItems.forEach((item) =>
	// 	item.addEventListener("click", () => navShow.classList.remove("show"))
	// );

	//after scrolling start function
	window.addEventListener("scroll", addShadow);

	//after click any nav 'a' navigation is hiding
	navItems.addEventListener("click", hideNav);
});
