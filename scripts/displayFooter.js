function displayFooter() {
  let page = `
      <footer class="footer">
        <span class="todo-count"><strong></strong> pendiente(s)</span>
        <ul class="filters">
          <li>
            <a class="selected filtro" href="#/" onclick="showAll()">Todos</a>
          </li>
          <li>
            <a class="filtro" href="#/active" onclick="showPendientes()">Pendientes</a>
          </li>
          <li>
            <a class="filtro" href="#/completed" onclick="showCompletadas()">Completadas</a>
          </li>
        </ul>
        <button class="clear-completed">Borrar completados</button>
      </footer>
    `;
  document.querySelector('.footer').innerHTML = page;
}

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
