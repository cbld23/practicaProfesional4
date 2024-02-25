document.getElementById("submitForm").addEventListener("click", function () {
  document.getElementById("successPopup").style.display = "block";

  // Cerrar el popup de éxito después de 2 segundos (2000 milisegundos)
  setTimeout(function () {
    document.getElementById("successPopup").style.animation =
      "fadeOut 0.5s ease-in-out forwards";
    setTimeout(function () {
      document.getElementById("successPopup").style.display = "none";
      document.getElementById("successPopup").style.animation = "none";
    }, 500); // Espera a que termine la animación de desaparición antes de ocultar el popup
  }, 2000);
});
