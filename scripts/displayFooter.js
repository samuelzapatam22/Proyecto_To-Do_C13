
function displayFooter() {
  let page = `

      <footer class="footer">

        <span class="todo-count"><strong></strong> pendiente(s)</span>

        <ul class="filters">
          <li>
            <a class="selected filtro" href="#/">Todos</a>
          </li>
          <li>
            <a class="filtro" href="#/active">Pendientes</a>
          </li>
          <li>
            <a class="filtro" href="#/completed">Completados</a>
          </li>
        </ul>
        <button class="clear-completed">Borrar completados</button>
      </footer>
    `
  document.querySelector('.footer').innerHTML = page
}
