const homePage = document.querySelector('.home');
const aboutPage = document.querySelector('.aboutPage');
const aboutButton = document.querySelector('.about');
const backButton = document.querySelector('.back');
const welcomeSection = document.querySelector('#welcome-section');
function goHomePage() {
	aboutPage.style.display = "none";
	homePage.style.display = "block";
}

function goAboutPage() {
	homePage.style.display = "none";
	aboutPage.style.display = "block";
}
function loadAnimation() {
	welcomeSection.classList.remove('welcomeLoad');
	welcomeSection.classList.add('welcome')
}
aboutButton.addEventListener('click', goAboutPage);
backButton.addEventListener('click', goHomePage);
window.addEventListener('load', loadAnimation)

gsap.registerPlugin(ScrollTrigger);
	let	sections = gsap.utils.toArray(".work"),
		tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".works",
				pin: true,
				marker:true,
				scrub: 1,
        		snap: 1 / (sections.length),
				start: "top top",
				end: "+=5000"
			}
		});
tl.to(sections, {
  xPercent: -100 * (sections.length),
  ease: "none"
});

