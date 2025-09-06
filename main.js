// === DECLARAÇÃO DE VARIÁVEIS GLOBAIS ===
const navigation = document.getElementById('navigation')
const backToTopButton = document.getElementById('backToTopButton')

const home = document.getElementById('home')
const services = document.getElementById('services')
const about = document.getElementById('about')
const contact = document.getElementById('contact')
// =========================================

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card ,
  #about, 
  #about header, 
  #about .content`)

// === CARROSSEL AUTOMÁTICO - SEÇÃO SOBRE NÓS ===
document.addEventListener('DOMContentLoaded', function() {
  const carouselSlide = document.querySelector('#about .carousel-slide');
  
  if (carouselSlide) {
    const carouselImages = carouselSlide.querySelectorAll('img');
    
    if (carouselImages.length === 0) return;

    let counter = 0;
    const totalImages = carouselImages.length;

    function moveSlide() {
      const size = carouselImages[0].clientWidth;
      
      if (size === 0) return;

      counter++;
      if (counter >= totalImages) {
        counter = 0;
      }
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    // Altere o número 3000 para mudar a velocidade (em milissegundos)
    setInterval(moveSlide, 3000);
  }
});