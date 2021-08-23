const forms = (modalState) => {

    const forms = document.querySelectorAll('form');
    const phoneInput = document.querySelectorAll('[name = "user_phone"]');
    const calcInputs = document.querySelectorAll('.popup_calc input');

    function validateForms(input) {
        input.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/, '');
            })    
        })
    };

    validateForms(phoneInput);
    validateForms(calcInputs);

    forms.forEach(form => {
        bindPostData(form, modalState);
    });

    const massage = {
        thanks: "Спасибо! С Вами кто-то свяжется",
        loading: "Отправка данных",
        fail: "Что-то пошло не так"
    }

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            
            body: data
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        } 

        return await res.json();

    }

    function bindPostData(form, state) {

        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            let massageBlock = document.createElement('div');
                massageBlock.classList.add('massage');
                massageBlock.style.cssText = 'color: red;'
                form.appendChild(massageBlock);
    
    
            
            const formData = new FormData(form);
    
            if (form.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
    
            console.log(state);
    
    
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
            postData('https://jsonplaceholder.typicode.com/posts', json)
                .then(data => {
                    console.log(data);
                    // console.log(state);
                    massageBlock.textContent = massage.thanks;
                }).catch(() => {
                    console.log('Что-то не так');
                    massageBlock.textContent = massage.fail;
                }).finally(() => {
                    form.reset();
                    setTimeout(() => {
                        massageBlock.remove();
                    }, 4000)
                })
    
        })
    }

}

export default forms;