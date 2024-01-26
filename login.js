document.addEventListener('DOMContentLoaded', function(){
    var form = document.getElementById('Formulario');
    var errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        var inputEmail = document.getElementById('email').value;
        var inputPassword = document.getElementById('password').value;
        var isValid = true;

        if (inputPassword.length < 8) {
            displayMessage("Error: La contraseña debe tener al menos 8 caracteres.", 'error');
            isValid = false;
        } else {
            displayMessage("", 'error');
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputEmail)) {
            displayMessage("Error: El formato del correo electrónico es inválido.", 'error');
            isValid = false;
        } else if (isValid) {
            displayMessage("Validación correcta. Email y contraseña son válidos.", 'success');
            console.log("Datos válidos. Email:", inputEmail, "Password:", inputPassword);
            // Limpiar los campos después de la validación correcta
            document.getElementById('email').value = "";
            document.getElementById('password').value = "";
            setTimeout(function() {
                displayMessage("", 'success'); // Limpiar el mensaje después de unos segundos
            }, 3000); // 3000 milisegundos = 3 segundos
        }
    });

    function displayMessage(message, type) {
        errorMessage.textContent = message;
        errorMessage.className = type;
    }
});