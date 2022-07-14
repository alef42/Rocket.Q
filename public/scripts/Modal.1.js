export default function Modal() {
  function open() {
    //funcionalidade de abrir a modal//
    document.querySelector('.modal-wrapper').classList.add('active')
  }
  function close() {
    //funcionalidade de remover a modal//
  }

  return {
    open,
    close
  }
}
