/* letras con movimiento */

const typed = new Typed('.typed', {
    strings: [
        '<i class="letras" >Soy Jonathan Quiroga </i>',
        '<i class="letras" >Soy Front-End Developer </i>',
        ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 90, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 55, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings, si no queremos repetir el bucle, false
	loopCount: true, // Cantidad de veces a repetir el array.  false = infinite, con numero para el numero de veces
	showCursor: true, // Mostrar cursor palpitanto, false si no queremos que se muestre el caracter de abajo
	cursorChar: '', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

});


/* ligar los enlaces del menu con la vista del apartado  */


// Obtenemos todas las secciones y enlaces del menú
const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('nav ul li a');

// Función para comprobar qué sección está visible en la ventana
function checkSectionInView() {
  // Obtenemos la posición vertical del scroll y la altura de la ventana
  const scrollPosition = window.pageYOffset;
  const windowHeight = window.innerHeight;

  // Recorremos las secciones para verificar cuál está en la ventana
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop - windowHeight / 2 &&
        scrollPosition < sectionTop + sectionHeight - windowHeight / 2) {
      // Removemos la clase "active" de todos los enlaces
      menuLinks.forEach(link => link.classList.remove('active'));

      // Agregamos la clase "active" al enlace correspondiente a la sección visible
      document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.add('active');
    }
  });
}

// Agregamos un controlador de eventos al evento scroll
window.addEventListener('scroll', checkSectionInView);







