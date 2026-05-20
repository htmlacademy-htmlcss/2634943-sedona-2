const openModalButton = document.querySelector('.open-modal');
const modalContainer = document.querySelector('.modal-container');
const searchFormCloseButton = document.querySelector('.search-form__close');

openModalButton.addEventListener('click', () => {
  modalContainer.classList.remove('modal-container-close');
});

searchFormCloseButton.addEventListener('click', () => {
  modalContainer.classList.add('modal-container-close');
});


modalContainer.addEventListener('click', (event) => {
  if (event.target === modalContainer) {
    modalContainer.classList.add('modal-container-close');
  }
});
