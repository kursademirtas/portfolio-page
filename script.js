const homePage = document.querySelector('.home');
const aboutPage = document.querySelector('.aboutPage');
const aboutButton = document.querySelector('.about');
const backButton = document.querySelector('.back');

function goHomePage() {
	aboutPage.classList.add('none');
	homePage.classList.remove('none');
	history.pushState({page: 1}, "", "/home")
}

function goAboutPage() {
	homePage.classList.add('none');
	aboutPage.classList.remove('none');
	history.pushState({page: 2}, "", "/about")
}


aboutButton.addEventListener('click', goAboutPage);
backButton.addEventListener('click', goHomePage);