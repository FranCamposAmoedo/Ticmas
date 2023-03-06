const elementoModal = document.getElementById('modal-container');
const elementoImg = document.getElementById('profile-picture');

elementoImg.addEventListener('click', function(e) {
        e.stopPropagation();
        elementoModal.classList.add('active')
        elementoImg.classList.add('active')
        console.log('Hice Click')
    }) 

elementoModal.addEventListener('click', function(e) {
         elementoModal.classList.remove('active')
        elementoImg.classList.remove('active')
    }) 
    