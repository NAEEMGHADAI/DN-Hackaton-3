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
