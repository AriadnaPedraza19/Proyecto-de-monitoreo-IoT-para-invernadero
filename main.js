// Simulación de datos IoT
function generarDatos() {
  const temp = (Math.random() * (30 - 15) + 15).toFixed(1);
  const hum = (Math.random() * (100 - 20) + 20).toFixed(1);
  return { temp, hum };
}

function actualizarInterfaz() {
  const { temp, hum } = generarDatos();

  document.getElementById("temp").textContent = `${temp} °C`;
  document.getElementById("hum").textContent = `${hum} %`;

  const mensaje = document.getElementById("mensaje");
  if (hum < 30) {
    mensaje.textContent = "⚠️ ¡Riego necesario! La humedad es baja.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "✅ Todo en orden. El ambiente es óptimo.";
    mensaje.style.color = "green";
  }
}

// Actualizar cada 5 segundos
actualizarInterfaz();
setInterval(actualizarInterfaz, 5000);
