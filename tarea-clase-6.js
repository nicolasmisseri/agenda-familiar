/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

// Preguntar cantidad de integrantes
const cantidadDeIntegrantes = Number(
  prompt("Cantidad de integrantes del grupo Familiar: ")
);

// Crear elementos HTML

const div = document.querySelector("div");

function crearLabelEdad() {
  let label = document.createElement("label");
  div.appendChild(label).textContent = "Edad del integrante: ";
}

function crearInputEdad(index) {
  let input = document.createElement("input");
  let inputNuevo = div.appendChild(input);
  inputNuevo.type = "number";
  inputNuevo.id = `edad${index}`;
}

function crearLabelSalario() {
  let label = document.createElement("label");
  div.appendChild(label).textContent = "Salario del integrante: ";
}

function crearInputSalario(index) {
  let input = document.createElement("input");
  let inputNuevo = div.appendChild(input);
  inputNuevo.type = "number";
  inputNuevo.id = `salario${index}`;
}

function crearBr() {
  let br = document.createElement("br");
  div.appendChild(br);
}

function crearBotonAgregarSalario() {
  let $botonSalario = document.createElement("button");
  div.appendChild($botonSalario);
  $botonSalario.textContent = "Agregar Salario";
  $botonSalario.onclick = () => {
    crearLabelSalario();
    crearInputSalario(index);
    crearBr();
    crearBr();

    return false;
  };
}

// Crear la cantidad correspondiente a la cantidad de integrantes

for (let index = 0; index < cantidadDeIntegrantes; index++) {
  crearLabelEdad();
  crearInputEdad(index);
  crearBotonAgregarSalario();
  crearBr();
  crearBr();
}
// Traer los em para modificar

const $resultadoEdades = document.querySelector("#resultadoEdades");
const $resultadoSalarios = document.querySelector("#resultadoSalarios");

// Calcular las edades

function CalcularMenorMayorPromedioYMostrar() {
  const array = [];
  //   Inicializo totales en 0
  let totalEdades = 0;
  let totalSalarios = 0;

  // Calcular los totales
  for (let index = 0; index < cantidadDeIntegrantes; index++) {
    array.push(Number(document.querySelector(`#edad${index}`).value));
    totalEdades += Number(document.querySelector(`#edad${index}`).value);
    // totalSalarios += Number(document.querySelector(`#salario${index}`).value);
  }

  //   Buscar el mayor

  for (let index = 0; index < cantidadDeIntegrantes; index++) {
    maximo = Math.max(array[index]);
    minimo = Math.min(array[index]);
  }
  let $edadMaxima = document.querySelector("#edadMaxima");
  $edadMaxima.textContent = `La edad maxima de la familia es: ${maximo}`;

  let $edadMinima = document.querySelector("#edadMinima");
  $edadMinima.textContent = `La edad minima de la familia es: ${minimo}`;

  //   Mostrar el promedio dividiendo por la cantidad de integrantes

  $resultadoEdades.textContent = `El promedio de edad de los integrantes es de : ${
    totalEdades / cantidadDeIntegrantes
  }`;

  $resultadoSalarios.textContent = `El promedio de salario de los integrantes es de : ${
    totalSalarios / cantidadDeIntegrantes
  }`;
}

// Crear Botones

// Boton Calcular

const $botonCalcular = document.createElement("button");
$botonCalcular.innerText = "Calcular";
$botonCalcular.type = "button";
div.appendChild($botonCalcular);

$botonCalcular.onclick = () => {
  CalcularMenorMayorPromedioYMostrar();

  return false;
};

// Boton Resetear

const $botonResetear = document.createElement("button");
$botonResetear.innerText = "Resetear";
$botonResetear.type = "reset";
div.appendChild($botonResetear);

/*
  TAREA:
  Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
  Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
  
  Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
  */
