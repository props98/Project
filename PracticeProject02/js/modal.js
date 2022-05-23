"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const modalTrigger = document.querySelectorAll('[data-modal'),
          modal = document.querySelector('.modal'),
          closeBtn = document.querySelector('[data-close]');


    // modalTrigger.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         modal.style.cssText = 'display: block';
    //     });

    //     closeBtn.addEventListener('click', () => {
    //         modal.style.cssText = 'display: none';
    //     })
    // });

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            // modal.classList.toggle('show');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

});