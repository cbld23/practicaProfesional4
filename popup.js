document.addEventListener("DOMContentLoaded", function () {
  const submitPaymentButton = document.getElementById("submitPayment");

  if (submitPaymentButton) {
    submitPaymentButton.addEventListener("click", function () {
      document.getElementById("successPaymentPopup").style.display = "block";

      // Cerrar el popup de éxito después de 2 segundos (2000 milisegundos)
      setTimeout(function () {
        const successPaymentPopup = document.getElementById(
          "successPaymentPopup"
        );
        if (successPaymentPopup) {
          successPaymentPopup.style.animation =
            "fadeOut 0.5s ease-in-out forwards";
          setTimeout(function () {
            successPaymentPopup.style.display = "none";
            successPaymentPopup.style.animation = "none";
          }, 500); // Espera a que termine la animación de desaparición antes de ocultar el popup
        }
      }, 2000);
    });
  }
});
