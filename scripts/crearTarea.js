
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
  
  // Codigo DOM #3
  
  // Codigo DOM #4
  
  // Codigo DOM #5
  
  // Codigo DOM #6
  
  //El sistema debe permitir EDITAR o MODIFICAR una tarea.
  
  //El sistema debe permitir ELIMINAR una tarea.
  
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

  