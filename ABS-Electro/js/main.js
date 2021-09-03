document.addEventListener('DOMContentLoaded', () => {
    const btnForm = document.querySelector('.form_btn');
    const btnPass = document.querySelector('.pass');
    const validation = (array) => {
        for (let item of array) {
            if (item.value.trim() == '') {
                const label = item.nextElementSibling;
                item.classList.add('inputError')
                label.classList.add('inputInfo_error');
                const error = label.nextElementSibling;
                error.classList.remove('hide')
            }
            else {
                const label = item.nextElementSibling;
                item.classList.remove('inputError')
                label.classList.remove('inputInfo_error');
                const error = label.nextElementSibling;
                error.classList.add('hide')
            }
        }
    }


    btnForm.addEventListener('click', (event) => {
        event.preventDefault();
        const arrayOfData = document.querySelectorAll('.inputOfForm');
        validation(arrayOfData)
    })
    btnPass.addEventListener('click', (event) => {
        event.preventDefault();
        const arrayOfData = document.querySelectorAll('.input');
        validation(arrayOfData)
    })
})