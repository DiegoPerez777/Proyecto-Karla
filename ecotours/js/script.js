document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formContacto");

    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            const nombre = document.getElementById("nombre").value;

            alert(
                "Gracias " +
                nombre +
                ". Tu mensaje ha sido recibido."
            );

            formulario.reset();

        });

    }

});