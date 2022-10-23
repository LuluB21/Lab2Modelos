
function validarDatos(){
    (function () {
        'use strict'
        var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              // if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              // }
              form.classList.add('was-validated')
            }, false)
          })
      })()
}

function mayorACero(e){
  let key = window.event ? e.which : e.keyCode;
	if (key == 48 || key == 49) {
	  e.preventDefault();
	  alert("[Error] El numero N tiene que ser mayor que 1.");
	//   return true;
	}
}