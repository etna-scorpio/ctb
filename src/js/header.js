function toggleMenu() {
	var menuIco = document.querySelector('.js-menu-ico');

	menuIco.addEventListener('click', (e) => {
		e.preventDefault();
		e.currentTarget.classList.toggle('menu-ico--active');
	});
}

toggleMenu();