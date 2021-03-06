const homePage = document.querySelector('.home');
const aboutPage = document.querySelector('.aboutPage');
const aboutButton = document.querySelector('.about');
const backButton = document.querySelector('.back');

function goHomePage() {
	aboutPage.style.display = "none";
	homePage.style.display = "block";
}

function goAboutPage() {
	homePage.style.display = "none";
	aboutPage.style.display = "block";
}

aboutButton.addEventListener('click', goAboutPage);
backButton.addEventListener('click', goHomePage);

