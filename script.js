// Función para mostrar la hora y la fecha actual
function actualizarFechaHora() {
  const ahora = new Date();

  const hora = ahora.toLocaleTimeString('es-CO', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const fecha = ahora.toLocaleDateString('es-CO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  document.getElementById('hora').textContent = hora;
  document.getElementById('fecha').textContent = fecha;
}

// Función para mostrar la ubicación del usuario
function obtenerUbicacion() {
  const ubicacionSpan = document.getElementById('ubicacion');

  if (!navigator.geolocation) {
    ubicacionSpan.textContent = "Geolocalización no soportada.";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (posicion) => {
      const { latitude, longitude } = posicion.coords;
      ubicacionSpan.textContent = `Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`;
    },
    () => {
      ubicacionSpan.textContent = "No se pudo obtener la ubicación.";
    }
  );
}

// Actualizar cada segundo
setInterval(actualizarFechaHora, 1000);
actualizarFechaHora();
obtenerUbicacion();
