let slideIndex = 1;
console.log(slideIndex);
showSlides(slideIndex);
console.log(slideIndex);
// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	// for (i = 0; i < dots.length; i++) {
	// 	dots[i].className = dots[i].className.replace(" active", "");
	// }
	slides[slideIndex - 1].style.display = "block";
	// dots[slideIndex - 1].className += " active";
}

let hamb = document.querySelector(".hamb");
let nav = document.querySelector("nav");
let hideNavLi = document.querySelectorAll(".hide-nav-li");
let nav1 = document.querySelector(".navv-1");
let nav2 = document.querySelector(".navv-2");
hamb.addEventListener("click", () => {
	for (let index = 0; index < hideNavLi.length; index++) {
		hideNavLi[index].classList.toggle("hide-nav-li");
		hideNavLi[index].classList.toggle("hide-nav-li-mob");
	}
	nav1.classList.toggle("nav-1");
	nav2.classList.toggle("nav-2");
	nav.classList.toggle("nav-mobile");
});
