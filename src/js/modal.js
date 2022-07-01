(() => {
  const refs = {
    modal: document.querySelector('[data-modal]')    
  };

  refs.modal.addEventListener('click', closeModal);  

  function closeModal() {
    refs.modal.classList.toggle('is-hidden');
  }

})();