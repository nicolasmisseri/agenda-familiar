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

function crearLabelEdad(divIntegrante, index) {
  let label = document.createElement("label");
  divIntegrante.appendChild(label).textContent = "Edad del integrante: ";
}

function crearInputEdad(divIntegrante, index) {
  let input = document.createElement("input");
  let inputNuevo = divIntegrante.appendChild(input);
  inputNuevo.type = "number";
  inputNuevo.id = `edad${index}`;
}

function crearLabelSalario(divIntegrante, index) {
  let label = document.createElement("label");
  divIntegrante.appendChild(label).textContent = "Salario del integrante: ";
}

function crearInputSalario(divIntegrante, index) {
  let input = document.createElement("input");
  let inputNuevo = divIntegrante.appendChild(input);
  inputNuevo.type = "number";
  inputNuevo.id = `salario${index}`;
}

function crearBr(divIntegrante, index) {
  let br = document.createElement("br");
  divIntegrante.appendChild(br);
}

function botonAgregarSalario(divIntegrante, index) {
  let $botonSalario = document.createElement("button");
  divIntegrante.appendChild($botonSalario);
  $botonSalario.textContent = "Agregar Salario";
  $botonSalario.type = "button";
  $botonSalario.className = "btn btn-success m-2";

  $botonSalario.onclick = () => {
    crearLabelSalario(divIntegrante, index);
    crearInputSalario(divIntegrante, index);
    crearBr(divIntegrante, index);
    crearBr(divIntegrante, index);

    return false;
  };
}

// Crear un integrante de la familia

function crearIntegrante(index) {
  let divIntegrante = document.createElement("div");
  divIntegrante.id = `integrante${index}`;
  div.appendChild(divIntegrante);

  crearLabelEdad(divIntegrante, index);
  crearInputEdad(divIntegrante, index);
  botonAgregarSalario(divIntegrante, index);
  crearBr(divIntegrante, index);
  crearBr(divIntegrante, index);
}
// Crear la cantidad correspondiente a la cantidad de integrantes

for (let index = 0; index < cantidadDeIntegrantes; index++) {
  crearIntegrante(index);
}
// Traer los em para modificar

const $resultadoEdades = document.querySelector("#resultadoEdades");
const $resultadoSalarios = document.querySelector("#resultadoSalarios");

// Calcular las edades

function CalcularMenorMayorPromedioYMostrar() {
  // CREO LOS ARRAYS
  const arrayEdades = [];
  const arraySalarios = [];

  //   Inicializo totales en 0
  let totalEdades = 0;
  let totalSalarios = 0;

  // Calcular los totales Y relleno los arrays

  for (let index = 0; index < cantidadDeIntegrantes; index++) {
    arrayEdades.push(Number(document.querySelector(`#edad${index}`).value));
    totalEdades += Number(document.querySelector(`#edad${index}`).value);

    arraySalarios.push(
      Number(document.querySelector(`#salario${index}`).value)
    );
    totalSalarios += Number(document.querySelector(`#salario${index}`).value);
  }
  $resultadoEdades.textContent = `El promedio de edad de los integrantes es de : ${
    totalEdades / cantidadDeIntegrantes
  }`;
  $resultadoSalarios.textContent = `El promedio de salario de los integrantes es de : ${
    totalSalarios / cantidadDeIntegrantes
  }`;

  //   Buscar el mayor y el menor

  //   EDADES

  for (let index = 0; index < cantidadDeIntegrantes; index++) {
    let minimoEdades = 99999999;
    let maximoEdades = -1;
    for (let index = 0; index < arrayEdades.length; index++) {
      if (arrayEdades[index] < minimoEdades) {
        minimoEdades = arrayEdades[index];
      }
      if (arrayEdades[index] > maximoEdades) {
        maximoEdades = arrayEdades[index];
      }
    }
    let $edadMaxima = document.querySelector("#edadMaxima");
    $edadMaxima.textContent = `La edad maxima de la familia es: ${maximoEdades}`;

    let $edadMinima = document.querySelector("#edadMinima");
    $edadMinima.textContent = `La edad minima de la familia es: ${minimoEdades}`;
  }

  //   SALARIOS

  for (let index = 0; index < cantidadDeIntegrantes; index++) {
    let minimoSalarios = 99999999;
    let maximoSalarios = -1;
    for (let index = 0; index < arraySalarios.length; index++) {
      if (arraySalarios[index] < minimoSalarios) {
        minimoSalarios = arraySalarios[index];
      }
      if (arraySalarios[index] > maximoSalarios) {
        maximoSalarios = arraySalarios[index];
      }
    }
    let $edadMaxima = document.querySelector("#salarioMaximo");
    $edadMaxima.textContent = `El salario maximo de la familia es: ${maximoSalarios}`;

    let $edadMinima = document.querySelector("#salarioMinimo");
    $edadMinima.textContent = `El salario minimo de la familia es: ${minimoSalarios}`;
  }
}

// CREAR BOTONES

// Boton Calcular

const $botonCalcular = document.createElement("button");
$botonCalcular.innerText = "Calcular";
$botonCalcular.type = "button";
$botonCalcular.className = "btn btn-primary m-2";
div.appendChild($botonCalcular);

$botonCalcular.onclick = () => {
  CalcularMenorMayorPromedioYMostrar();

  return false;
};

// Boton Resetear

const $botonResetear = document.createElement("button");
$botonResetear.innerText = "Resetear";
$botonResetear.type = "reset";
$botonResetear.className = "btn btn-primary m-2";
div.appendChild($botonResetear);

/*
  TAREA:
  Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
  Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
  
  Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
  */
