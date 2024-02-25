document.addEventListener("DOMContentLoaded", function () {
  const mapElement = document.getElementById("map");

  if (mapElement) {
    const map = L.map("map").setView([36.7211, -4.4214], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    // Coordenadas de la ubicación para el marcador
    const ubicacionMarcador = [36.7211, -4.4214];

    // Crea un marcador y agrega un pop-up
    const marker = L.marker(ubicacionMarcador).addTo(map);
    marker.bindPopup("<b>¡Hola!</b><br>Este es tu Club de Hielo.").openPopup();
  }
});
const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");

if (openPopupButton) {
  openPopupButton.addEventListener("click", function () {
    document.getElementById("popup").style.display = "block";
  });
}

if (closePopupButton) {
  closePopupButton.addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
  });
}
const submitFormButton = document.getElementById("submitForm");

if (submitFormButton) {
  submitFormButton.addEventListener("click", function () {
    document.getElementById("successPopup").style.display = "block";

    // Cerrar el popup de éxito después de 2 segundos (2000 milisegundos)
    setTimeout(function () {
      const successPopup = document.getElementById("successPopup");
      if (successPopup) {
        successPopup.style.animation = "fadeOut 0.5s ease-in-out forwards";
        setTimeout(function () {
          successPopup.style.display = "none";
          successPopup.style.animation = "none";
        }, 500); // Espera a que termine la animación de desaparición antes de ocultar el popup
      }
    }, 2000);
  });
}
