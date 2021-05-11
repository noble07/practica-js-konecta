export const handleformErrors = (formErrors) => {
        
    
    for (const error in formErrors) {
        const displayError = document.createElement('span');
        displayError.className = 'error';
        displayError.innerHTML = formErrors[error];
        const inputRef = document.querySelector(`#${error}`);
        inputRef.parentNode.insertBefore( displayError, inputRef.nextSibling );
    }

}

export const errorCleanUp = () => {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.parentNode.removeChild( error );
    });
}