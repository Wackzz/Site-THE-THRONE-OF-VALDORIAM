const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
const equipe = document.querySelector('.equipe');

//observateur pour surveiller la visibilité de l'élément
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        //si l'élément est visible dans le viewport
        if (entry.isIntersecting) {
            equipe.classList.toggle('active');
        } else {
            equipe.classList.toggle('active');
        }
    });
});
//observation sur l'élément
observer.observe(equipe);