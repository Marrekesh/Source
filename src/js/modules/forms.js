const forms = () => {

    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        bindPostData(form);
    });

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

    function bindPostData(form) {

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('https://jsonplaceholder.typicode.com/posts', json)
                .then(data => {
                    console.log(data);
                }).catch(() => {
                    console.log('Что-то не так');
                }).finally(() => {
                    form.reset();
                })


        })
    }

}

export default forms;