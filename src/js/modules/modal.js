const modals = () => {

    function bindModals(triggerSelector, modalSelector, closeSelector, closeOverlay = true) {

        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        window = document.querySelectorAll('[data-modal]');


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {

                if (e.target) {
                    e.preventDefault();
                }

                window.forEach(item => {
                    item.style.display = 'none'
                });

                modal.style.display = "flex";
                document.body.style.overflow = "hidden";
            });
        })

        close.addEventListener('click', () => {

            window.forEach(item => {
                item.style.display = 'none'
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeOverlay) {

                window.forEach(item => {
                    item.style.display = 'none'
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'flex';
            document.body.style.overflow = "";
        }, time)
    }


    // let modalState = {};

    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModals('.phone_link', '.popup', '.popup .popup_close');
    bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc .popup_calc_close');

    bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup_engineer', 2000);
};

export default modals;