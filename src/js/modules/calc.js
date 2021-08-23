const calc = (modalState) => {

    const windowFormat = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeight = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('#view_type');
    const windowProfile = document.querySelectorAll('.checkbox');


    function bindActions(elem, event, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        modalState[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? modalState[prop] = 'Холодное': modalState[prop] = 'Теплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            modalState[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        modalState[prop] = item.value;
                        break;   
                }
                console.log(modalState)
            })
        })
    }
    bindActions(windowFormat,'click', 'form');
    bindActions(windowHeight,'input', 'height');
    bindActions(windowWidth,'input', 'width');
    bindActions(windowType,'change', 'type');
    bindActions(windowProfile,'change', 'profile');

}

export default calc;