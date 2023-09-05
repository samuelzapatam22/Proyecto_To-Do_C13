
  // Codigo DOM #1
  let arregloTareas = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []
   document.querySelector('.new-todo').addEventListener('keyup', (event) => {
    if (
      event.keyCode === 13 &&
      document.querySelector('.new-todo').value.length > 0
    ) {
      const nuevaTarea = document.querySelector('.new-todo')
      crearTarea(nuevaTarea)    
    }
    
  })
  
  function crearTarea(nuevaTarea) {
      nuevaTarea = {
      thing: nuevaTarea.value,
      complete: false,
      dontComplete: true,
      priority: 'Alta',
      category: 'Casa',
    }
    arregloTareas.push(nuevaTarea)
    localStorage.setItem('items', JSON.stringify(arregloTareas))
    location.reload()
    
  }
  // Codigo DOM #2
  function contadorPendientes(){
    const pendingCount = arregloTareas.filter(task => !task.complete).length;
    const countElement = document.querySelector('.todo-count strong');
    countElement.textContent = pendingCount;
  }

  window.addEventListener('load', () => {
    contadorPendientes();
  })
  editarTarea()
  
  // Codigo DOM #3
  
  // Codigo DOM #4
  
  // Codigo DOM #5
  
  // Codigo DOM #6
  
  //El sistema debe permitir EDITAR o MODIFICAR una tarea.
  function editarTarea(){
  document.querySelector('.todo-list').addEventListener('click', (event) => {
    if (event.target.classList.contains('editBtn')){ 
      activarEdit()
      activateSaveListeners()
      activateCancelListeners()
    }
  })
 };
const activarEdit = function() {
  const editarBtn = document.querySelectorAll('.editBtn')
  const controladorActualizacion = document.querySelectorAll('.update-controller')
  const input = document.querySelectorAll('.input-controller textarea')
  const seleccionarPrioridad = document.querySelectorAll(
    '.edit-controller select'
  )[0]
  const seleccionarCategoria = document.querySelectorAll(
    '.edit-controller select'
  )[1]

  editarBtn.forEach((eb, i) => {
    eb.addEventListener('click', () => {
      controladorActualizacion[i].style.display = 'block'
      input[i].disabled = false

      seleccionarPrioridad.value = arregloTareas[i].priority
      seleccionarCategoria.value = arregloTareas[i].category
    })
  })

  const prioridad = document.querySelectorAll('#priority')
  prioridad.forEach((s, i) => {
    s.addEventListener('change', (event) => {
      arregloTareas[i].priority = event.target.value
      localStorage.setItem('items', JSON.stringify(arregloTareas))
    })
  })

  const categoria = document.querySelectorAll('#category')
  categoria.forEach((s, i) => {
    s.addEventListener('change', (event) => {
      arregloTareas[i].category = event.target.value
      localStorage.setItem('items', JSON.stringify(arregloTareas))
    })
  })
};


function activateSaveListeners() {
  const guardarBtn = document.querySelectorAll('.saveBtn')
  const input = document.querySelectorAll('.input-controller textarea')
  guardarBtn.forEach((gB, i) => {
    gB.addEventListener('click', () => {
      updateItem(input[i].value, i)
    })
  })
};

function activateCancelListeners() {
  const cancelarBtn = document.querySelectorAll('.cancelBtn')
  const controladorActualizacion = document.querySelectorAll('.update-controller')
  const inputs = document.querySelectorAll('.input-controller textarea')
  
  cancelarBtn.forEach((cB, i) => {
    cB.addEventListener('click', () => {
      updateController[i].style.display = 'none'
      inputs[i].disabled = true
      inputs[i].style.border = 'none'
    })
  })
};

  
  //El sistema debe permitir ELIMINAR una tarea.
  document.querySelector('.todo-list').addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteBtn')) {
        const taskContainer = event.target.closest('.item');
        if (taskContainer) {
            eliminarTarea(taskContainer);
        }
    }
});
function eliminarTarea(taskContainer) {
    const taskIndex = obtenerIndiceTarea(taskContainer);
    if (taskIndex !== -1) {
        arregloTareas.splice(taskIndex, 1);
        localStorage.setItem('items', JSON.stringify(arregloTareas));
        contadorPendientes(); //Actualización del contador
        taskContainer.remove();
    }
}
function obtenerIndiceTarea(taskContainer) {
    const taskElements = document.querySelectorAll('.item');
    for (let i = 0; i < taskElements.length; i++) {
        if (taskElements[i] === taskContainer) {
            return i;
        }
    }
    return -1;
}

  
  //El sistema debe permitir AGREGAR una o varias items tarea.
  
  //El sistema deber permitir MARCAR una tarea como completada
  
  //El sistema debe permitir dar diferentes PRIORIDADES a las items
  //EJEMPLO:
  
  //Sacar la basura - Prioridad: media
  
  //El sistema debe permitir visualizar items por CATEGORÍAS o ETIQUETAS
  //EJEMPLO:
  
  /*Categorías disponibles: PENDIENTE, COMPLETADO o TODASE.T.C */
  
  //Recordar llamar las funciones displayItems() y displayFooter() para mostrar
  //las items en pantalla
  displayFooter()
  displayItems()

  