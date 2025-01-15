const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
document.addEventListener('click', (event) => {
    if (!offScreenMenu.contains(event.target) && !hamMenu.contains(event.target)) {
        offScreenMenu.classList.remove('active');
        hamMenu.classList.remove('active');
    }
});


//const test = document.querySelector('.testJava');
//test.addEventListener('click', () => {
//    test.classList.toggle('active');
//})

const acceuil = document.querySelector('.acceuil');
const apropos = document.querySelector('.apropos');
const apropos2 = document.querySelector('.apropos2');
const contactus = document.querySelector('.contactus');
const inspire = document.querySelector('.inspire');
const annexe = document.querySelector('.annexe');
acceuil.addEventListener('mouseenter', () => {
    acceuil.classList.add('active');
});
acceuil.addEventListener('mouseleave', () => {
    acceuil.classList.remove('active');
});

apropos.addEventListener('mouseenter', () => {
    apropos.classList.add('active');
});
apropos.addEventListener('mouseleave', () => {
    apropos.classList.remove('active');
});

apropos2.addEventListener('mouseenter', () => {
    apropos2.classList.add('active');
});
apropos2.addEventListener('mouseleave', () => {
    apropos2.classList.remove('active');
});

contactus.addEventListener('mouseenter', () => {
    contactus.classList.add('active');
});
contactus.addEventListener('mouseleave', () => {
    contactus.classList.remove('active');
});

inspire.addEventListener('mouseenter', () => {
    inspire.classList.add('active');
});
inspire.addEventListener('mouseleave', () => {
    inspire.classList.remove('active');
});
annexe.addEventListener('mouseenter', () => {
    annexe.classList.add('active');
})
annexe.addEventListener('mouseleave', () => {
    annexe.classList.remove('active');
})

const install = document.querySelector('.install')
const fleche = document.querySelector('.espace2')
const observer5 =  new IntersectionObserver(entries => {
    entries.forEach(entry => {
        //si l'élément est visible dans le viewport
        if (entry.isIntersecting) {
            setTimeout(() => {install.classList.add('active');fleche.classList.add('active');}, 0); // Délai en millisecondes (2000 ms = 2 secondes)

        } else {
        }
    });
});
observer5.observe(install);