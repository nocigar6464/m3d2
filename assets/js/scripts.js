// funcion para ejercicio 1

function borderColor() {
  const beer = document.getElementById("myBeer");
  const validation = beer.classList.contains("highlight");
  if (validation == false) {
    beer.classList.add("highlight");
  } else {
    beer.classList.remove("highlight");
  }
}

// funcion para ejercicio 2
function quantity() {
  let q1 = parseInt(document.getElementById("cantidad1").value, 10);
  let q2 = parseInt(document.getElementById("cantidad2").value, 10);
  let q3 = parseInt(document.getElementById("cantidad3").value, 10);
  let totalQuantity = q1 + q2 + q3;
  let resultVar = document.getElementById("result");

  if (totalQuantity <= 10) {
    result.innerHTML = "tienes agregado " + totalQuantity + " stickers";
  } else {
    result.innerHTML = "No puedes agregar mas de 10 stickers";
  }
}

//funcion para ejercicio 3

function password() {
  var passOne = document.getElementById("clave1").value;
  var passTwo = document.getElementById("clave2").value;
  var passThree = document.getElementById("clave3").value;
  var totalSelects = passOne + passTwo + passThree;
  var resultPassword = document.getElementById("mensaje");

  switch (totalSelects) {
    case "911":
      resultPassword.innerHTML = "CONTRASEÑA N°1 CORRECTA";
      break;
    case "741":
      resultPassword.innerHTML = "CONTRASEÑA N°2 CORRECTA";
      break;
    default:
      resultPassword.innerHTML = "CONTRASEÑA INCORRECTA";
      break;
  }
}
