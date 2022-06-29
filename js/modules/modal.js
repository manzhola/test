function openModal(modalSelector){
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}
function closeModal(modalSelector){
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.remove('show');
    modalWindow.classList.add('hide');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector){
    const modalWindow = document.querySelector(modalSelector),
          modalBtns = document.querySelectorAll(triggerSelector);

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector));
    });

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalWindow.style.display === 'block') {
            closeModal(modalSelector);
        }
    });
}

export default modal;
export {
    openModal,
    closeModal
};