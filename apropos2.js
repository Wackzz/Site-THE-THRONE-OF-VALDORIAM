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



const members = document.querySelector('.members')
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        //si l'élément est visible dans le viewport
        if (entry.isIntersecting) {
            setTimeout(() => {members.classList.add('active');}, 500); // Délai en millisecondes (2000 ms = 2 secondes)

        } else {
        }
    });
});
observer.observe(members);


const theodore = document.querySelector('.Théodore');
const txtTheodore = document.querySelector('.txtTheodore');
theodore.addEventListener('click', () => {
    txtTheodore.classList.toggle('active');
    theodore.classList.toggle('active');
})







const romario = document.querySelector('.Romario');
const txtromario = document.querySelector('.txtRomario');
romario.addEventListener('click', () => {
    txtromario.classList.toggle('active');
    romario.classList.toggle('active');
})






const romain = document.querySelector('.Romain');
const txtromain = document.querySelector('.txtRomain');
romain.addEventListener('click', () => {
    txtromain.classList.toggle('active');
    romain.classList.toggle('active');
})

const leewen = document.querySelector('.Leewen');
const txtleewen = document.querySelector('.txtLeewen');

leewen.addEventListener('click', () => {
    txtleewen.classList.toggle('active');
    leewen.classList.toggle('active');
})

const giovanni = document.querySelector('.Giovanni');
const txtgiovanni = document.querySelector('.txtGiovanni');
giovanni.addEventListener('click', () => {
    txtgiovanni.classList.toggle('active');
    giovanni.classList.toggle('active');
})