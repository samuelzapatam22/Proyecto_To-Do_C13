// Función para mostrar tareas pendientes
function showPendientes() {
    const pendientes = document.querySelectorAll('.item');
    pendientes.forEach((element) => {
      const checkbox = element.querySelector('.toggle');
      if (checkbox.checked) {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    });
  }
  
  // Función para mostrar tareas completadas
  function showCompletadas() {
    const completadas = document.querySelectorAll('.item');
    completadas.forEach((element) => {
      const checkbox = element.querySelector('.toggle');
      if (!checkbox.checked) {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    });
  }
  