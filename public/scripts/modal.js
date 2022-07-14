export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)

  function open() {
    //funcionalidade de abrir a modal//
    modalWrapper.classList.add('active')
  }
  function close() {
    //funcionalidade de remover a modal//
    document.querySelector('.modal-wrapper').classList.remove('active')
  }

  return {
    open,
    close
  }
}
