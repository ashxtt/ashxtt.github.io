/*Menu Show*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/* remove menu mobile*/

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*Scroll Section Active Link*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scro11y = window.pageYOffset
}
sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scro11Y > sectionTop && scro11Y <= sectionTop + sectionHeight){
        document.querySelector('.nav-manu a[href*=' + sectionId + ']').classList.add('active')
    }else{
        document.quereySelector('.nav-menu a [href*=' + sectionId + ']').classList.remove('active')
    }
})
dow.addEventListener('scroll', scrollActive)

/*Scroll Reveal Animation*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});