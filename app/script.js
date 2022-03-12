const nav = document.querySelector("nav");
const navLi = document.querySelectorAll("li");
const navBtn = document.querySelector(".navBarToggle");
const emptyNavclose = document.querySelector(".emptyNavClose");
const emailBtn = document.getElementById("emailBtn");


const svgContainer = document.querySelector('.loadingAnimation')





//-------------------- function for navBtn close and open -------------------//
function openNav() {
	nav.setAttribute("data-visible", true);
	navBtn.setAttribute("aria-expanded", true);
	emptyNavclose.style.display = "inline";
}

function closeNav() {
	nav.setAttribute("data-visible", false);
	navBtn.setAttribute("aria-expanded", false);
	emptyNavclose.style.display = "none";
}

//------------------------------- Active Nav Bar ---------------------------//
navLi.forEach((element) => {
	element.addEventListener("click", () => {
		const activeLi = document.querySelector(".active");
		activeLi.classList.remove("active");
		element.classList.add("active");
		closeNav();
	});
});

// --------------------------- navBtn close and open -----------------------//
navBtn.addEventListener("click", () => {
	const visibility = nav.getAttribute("data-visible");

	if (visibility === "false") {
		openNav();
	} else {
		closeNav();
	}
});

//--------------------------- empty area nav close --------------------------//
emptyNavclose.addEventListener("click", () => {
	closeNav();
});

//-------------------------- contact through email ------------------------//
emailBtn.addEventListener("click", () => {
	const emailTo = "rahulpalamarthi@gmail.com"
	const emailToCompose = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + emailTo;
	window.open(emailToCompose, "_blank")
});

//---------------------- Loaing Animation -------------------//
const animItem = bodymovin.loadAnimation({
	wrapper: svgContainer,
	animType: "svg",
	loop: true,
	autoplay: true,
	path: "https://assets5.lottiefiles.com/packages/lf20_lfcuyaos.json",
})

animItem.goToAndPlay(0, true);

window.addEventListener("load", () => {
	svgContainer.parentElement.removeChild(svgContainer)
})



