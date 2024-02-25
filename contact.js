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

document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map").setView([36.7211, -4.4214], 13); // Ubicación de Málaga
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);
  // Coordenadas de la ubicación para el marcador
  const ubicacionMarcador = [36.7211, -4.4214];

  // Crea un marcador y agrega un pop-up
  const marker = L.marker(ubicacionMarcador).addTo(map);
  marker.bindPopup("<b>¡Hola!</b><br>Este es tu Club de Hielo.").openPopup();
});
