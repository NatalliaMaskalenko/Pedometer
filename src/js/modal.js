(() => {
  const refs = {
    modal: document.querySelector('[data-modal]'),
    wrapp: document.querySelector('[data-wrapp]')  
  };

  refs.modal.addEventListener('click', closeModal);  
  document.addEventListener("keydown", closeModalKeydown);

  function closeModal(event) {
    event.preventDefault();
    
    if (event.target.id !== 'backdrop') {
      return
    }
      
    refs.modal.classList.toggle('is-hidden');
    refs.wrapp.classList.toggle('is-open');
  }

  function closeModalKeydown(event) {
    event.preventDefault();
    
    if (event.key !== 'Escape') {
      return
    }
      
    refs.modal.classList.toggle('is-hidden');
    refs.wrapp.classList.toggle('is-open');
  }

})();