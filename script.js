const modal = document.querySelector('.modal-container');

const buttonOpenModal = document.querySelector('.open-button');

const buttonCloseModal = modal.querySelector('.modal-close-button');

buttonCloseModal.addEventListener('click', () => {
	modal.classList.add('visually-hidden');
});

buttonOpenModal.addEventListener('click', () => {
	modal.classList.remove('visually-hidden');
});

console.log(modal, buttonOpenModal, buttonCloseModal);
