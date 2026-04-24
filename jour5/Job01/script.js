$(document).ready(function() {
    const validateField = async (input, validator) => {
        const $input = $(input);
        const $group = $input.closest('.form-group');
        const $error = $group.find('.error-message');
        const $spinner = $group.find('.validation-spinner');

        $spinner.show();
        
        const result = await new Promise(resolve => {
            setTimeout(() => {
                resolve(validator($input.val()));
            }, 500);
        });

        $spinner.hide();

        if (result.isValid) {
            $error.removeClass('visible').text('');
            $input.css('border-color', '');
            return true;
        } else {
            $error.addClass('visible').text(result.message);
            $input.css('border-color', 'var(--error)');
            return false;
        }
    };

    const validators = {
        nom: (val) => ({
            isValid: val.length >= 2,
            message: "Le nom doit contenir au moins 2 caractères."
        }),
        prenom: (val) => ({
            isValid: val.length >= 2,
            message: "Le prénom doit contenir au moins 2 caractères."
        }),
        email: (val) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return {
                isValid: regex.test(val),
                message: "Veuillez entrer une adresse email valide."
            };
        },
        password: (val) => ({
            isValid: val.length >= 8,
            message: "Le mot de passe doit contenir au moins 8 caractères."
        }),
        adresse: (val) => ({
            isValid: val.length >= 5,
            message: "Veuillez entrer une adresse complète."
        }),
        zip: (val) => {
            const regex = /^[0-9]{5}$/;
            return {
                isValid: regex.test(val),
                message: "Le code postal doit contenir 5 chiffres."
            };
        }
    };

    $('input').on('blur', function() {
        const fieldName = $(this).attr('name');
        if (validators[fieldName]) {
            validateField(this, validators[fieldName]);
        }
    });

    $('#togglePassword').on('click', function() {
        const $input = $(this).siblings('input');
        const type = $input.attr('type') === 'password' ? 'text' : 'password';
        $input.attr('type', type);
        
        const svgEye = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
        const svgEyeOff = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
        
        $(this).html(type === 'password' ? svgEye : svgEyeOff);
    });

    $('#registrationForm, #loginForm').on('submit', async function(e) {
        e.preventDefault();
        let isFormValid = true;
        const fields = $(this).find('input');

        for (const field of fields) {
            const fieldName = $(field).attr('name');
            if (validators[fieldName]) {
                const isValid = await validateField(field, validators[fieldName]);
                if (!isValid) isFormValid = false;
            }
        }

        if (isFormValid) {
            alert("Formulaire validé avec succès !");
        }
    });
});
