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





const p1 = document.querySelector('.Paragraphe1');
const p2 = document.querySelector('.Paragraphe2');
const p3 = document.querySelector('.Paragraphe3');
const p4 = document.querySelector('.Paragraphe4'); //faire les actions


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        //si l'élément est visible dans le viewport
        if (entry.isIntersecting) {
            setTimeout(() => {p1.classList.add('active');p2.classList.add('active');p3.classList.add('active');p4.classList.add('active');}, 500);
        } else {
        }
    });
});
observer.observe(p1);
