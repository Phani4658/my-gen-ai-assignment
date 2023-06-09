const hamIconEl = document.getElementById('hamIcon');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');
hamIconEl.onclick =  function(){
    hamIconEl.classList.toggle('fa-bars');
    hamIconEl.classList.toggle('fa-xmark');
    mobileNav.classList.toggle('hidden');
}

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');


openModalButtons.forEach(button => {
    button.addEventListener('click',() => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)
    })});

closeModalButtons.forEach(button => {
    button.addEventListener('click',() => {
        const modal = button.closest('.modal');
        closeModal(modal)
    })});


function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('overlay-active')
}

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('overlay-active')
}