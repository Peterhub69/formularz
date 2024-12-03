$(document).ready(function() {
    $("#registrationForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Proszę podać swoje imię",
                minlength: "Imię musi mieć co najmniej 2 znaki"
            },
            email: {
                required: "Proszę podać swój email",
                email: "Proszę podać prawidłowy email"
            },
            password: {
                required: "Proszę podać hasło",
                minlength: "Hasło musi mieć co najmniej 5 znaków"
            }
        }
    });
});
