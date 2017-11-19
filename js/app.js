/*Seleccion de atributos dentro de la etiqueta main*/
var container = document.getElementById('container');
var boxList = document.getElementsByClassName('box-list')[0];

/*Funciones creadas*/

function createList(event) {
  //creas las etiquetas "form", "input" y "a"
  var form = document.createElement('form');
  var input = document.createElement('input');
  var button = document.createElement('a');

  //dentro del contenedor le agregas la etiqueta form
  container.appendChild(form);

  //dentro de la etiqueta form le agregas las etiquetas input y buttom
  form.appendChild(input);
  form.appendChild(button);

  //al input le agregas un atributo llamado "placeholder"
  //es una descripcion de lo que quieres agregar al input
  input.setAttribute('placeholder','Añadir una lista ...')

  //El boton llevará el nombre de "guardar"
  button.textContent = 'Guardar';
  event.preventDefault();
  container.removeChild(boxList);

  button.addEventListener('click', function(event) {
    event.preventDefault();
    tarea();
    function tarea(){
      var container2 = document.createElement('div');
      var captureText = input.value;
      container2.textContent=captureText;
      container.appendChild(container2);

      var addList = document.createElement('p');
      addList.textContent='Añadir una tarea';
      container.appendChild(addList);

      addList.addEventListener('click', function(event){
          event.preventDefault();
          var container2 = document.createElement('div');
          var captureText = input.value;
          container2.textContent=captureText;
          container.appendChild(container2);

          var addList = document.createElement('p');
          addList.textContent='Añadir una tarea';
          container.appendChild(addList);
      })
    }
  })
}

/*Llamado a los eventos*/
boxList.addEventListener('click',createList);
