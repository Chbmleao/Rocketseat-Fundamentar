const openModalButton = document.querySelector('#openModal')

const modalWindow = document.querySelector('div')

openModalButton.addEventListener('click', openModal)

function openModal() {
    modalWindow.classList.remove('invisible')
}

document.onkeydown = function(event) {
    const isEscKey = event.code === 'Escape'
    const isModalWindowInvisible = modalWindow.classList.contains('invisible')

    if(isEscKey && !isModalWindowInvisible) {
        modalWindow.classList.add('invisible') 
    }
}