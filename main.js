// Arreglos para simular historial
const historialTemp = [];
const historialHum = [];
const etiquetas = [];

const ctx = document.getElementById('sensorChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: etiquetas,
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: historialTemp,
        borderWidth: 2,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1
      },
      {
        label: 'Humedad (%)',
        data: historialHum,
        borderWidth: 2,
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

function generarDatos() {
  const temp = parseFloat((Math.random() * (30 - 15) + 15).toFixed(1));
  const hum = parseFloat((Math.random() * (100 - 20) + 20).toFixed(1));
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

  // Actualizar gráfica
  const timestamp = new Date().toLocaleTimeString();
  if (etiquetas.length >= 10) {
    etiquetas.shift();
    historialTemp.shift();
    historialHum.shift();
  }
  etiquetas.push(timestamp);
  historialTemp.push(temp);
  historialHum.push(hum);
  chart.update();
}

actualizarInterfaz();
setInterval(actualizarInterfaz, 5000);
