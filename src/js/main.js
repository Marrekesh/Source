import './slider';
import modals from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calc from './modules/calc';
import timer from './modules/timer';
import images from './modules/images';

document.addEventListener('DOMContentLoaded', () => {
    let modalState = {};
    let deadline = '2021-09-09';
    modals();
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content_item', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img img', 'do_image_more');
    forms(modalState);
    calc(modalState);
    timer('.container1', deadline);
    images();
})