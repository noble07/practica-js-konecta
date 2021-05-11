import validator from 'validator';
import Swal from 'sweetalert2'
import { errorCleanUp, handleformErrors } from '../helpers/errorMessage';

if (document.querySelector('.contact-content')) {
    const formRef = document.querySelector('#contact-form');


    const validateFormData = ({
        id,
        fullName,
        phone,
        email,
        area,
        jobTitle,
        contactCity,
        contactHour
    }) => {
        
        const errorMsg = {};
    
        if (validator.isEmpty(id) || !validator.isNumeric(id)) {
            
            errorMsg['id'] = 'El id debe ser numerico y no estar vacio';
        }
    
        if (validator.isEmpty(fullName)) {
            
            errorMsg['fullName'] = 'Los Nombres y Apellido deben ser solo letras y no estar vacio';
        }
    
        if (validator.isEmpty(phone) || !validator.isNumeric(phone)) {
            
            errorMsg['phone'] = 'El teléfono debe ser numerico y no estar vacio';
        }
    
        if (validator.isEmpty(email) || !validator.isEmail(email)) {
            
            errorMsg['email'] = 'El Email debe ser valido y no estar vacio';
        }
    
        if (validator.isEmpty(area)) {
            
            errorMsg['area'] = 'El Área/operación debe ser solo letras y no estar vacio';
        }
    
        if (validator.isEmpty(jobTitle)) {
            
            errorMsg['jobTitle'] = 'El cargo debe ser solo letras y no estar vacio';
        }
    
        if (validator.isEmpty(contactCity)) {
            
            errorMsg['contactCity'] = 'La ciudad de contacto debe ser solo letras y no estar vacio';
        }
    
        if (validator.isEmpty(contactCity)) {
            
            errorMsg['contactCity'] = 'La ciudad de contacto debe ser solo letras y no estar vacio';
        }
    
        if (validator.isEmpty(contactHour)) {
            
            errorMsg['contactHour'] = 'La hora de contacto debe ser solo letras y no estar vacio';
        }
    
        return errorMsg;
    
    }

    
    const handleEventSubmit = (e) => {
        e.preventDefault();
        errorCleanUp();
    
        const formData = new FormData(formRef);
    
        const formErrors = validateFormData(Object.fromEntries(formData));
    
        if (Object.entries(formErrors).length > 0) {
            handleformErrors(formErrors);
            return;
        }

        Swal.fire('Validado', 'Formulario validado correctamente', 'success');
        formRef.reset();
    }
    
    formRef.addEventListener('submit', handleEventSubmit);   
}