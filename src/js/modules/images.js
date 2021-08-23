const images = () => {
    const popup = document.createElement('div');
    const workSpace = document.querySelector('.works');
    const bigImg = document.createElement('img');
    
    
    popup.classList.add('popup');
    workSpace.appendChild(popup);

    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    popup.style.display = 'none';

    popup.appendChild(bigImg);

    workSpace.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if (target && target.classList.contains('preview')) {
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        };

        if (target.matches('div.popup')) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }

    })

}

export default images;