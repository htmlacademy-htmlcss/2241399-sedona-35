const modal = document.querySelector('.modal-container');

const buttonOpenModal = document.querySelector('.open-button');

const butttonCloseModal = modal.querySelector('.modal-close-button');
butttonCloseModal.addEventListener('click', () => {
    modal.classList.add('visually-hidden');
});
buttonOpenModal.addEventListener('click', () => {
    modal.classList.remove('visually-hidden');
});
console.log(modal, buttonOpenModal, buttonCloseModal);
