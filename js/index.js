let array2 = [];

function toggle(q1) {
  let obj = document.getElementById(q1);
  if (obj.style.display == "block") obj.style.display = "none";
  else obj.style.display = "block";
}

window.addEventListener("load", function () {
  document.getElementById("play").addEventListener("click", sonarAudio);
  document.getElementById("stop").addEventListener("click", callarAudio);
});

function sonarAudio() {
  let sonido = document.createElement("iframe");
  sonido.setAttribute("src", "recursos/audio/suspense.mp3");
  document.body.appendChild(sonido);
  document.getElementById("play").removeEventListener("click", sonarPajaros);
}

function callarAudio() {
  var iframe = document.getElementsByTagName("iframe");

  if (iframe.length > 0) {
    iframe[0].parentNode.removeChild(iframe[0]);
    document.getElementById("play").addEventListener("click", sonarPajaros);
  }
}

// Lista de nombres

let nameCoders = arrayCoders();

let mylist = document.getElementsByTagName("LI"); // cambiado mynodelist por mylist

function newCoder() {
  let li = document.createElement("li");
  let name = document.getElementById("participants").value;
  name = minusculaMayuscula(name);
  let x = document.createTextNode(name);
  li.appendChild(x);
  if (name === "") {
    swal({
      title: "ERROR",
      text: "AÑADA UN NOMBRE A LA LISTA",
      icon: "error",
      buttons: "Cerrar",
    });
  } else {
    if (checkName(name) == false) {
      li.setAttribute("id", name);
      document.getElementById("list-name").appendChild(li);
      nameCoders = arrayCoders();
      console.log(nameCoders);
    }
  }

  document.getElementById("participants").value = "";
}

let list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
    nameCoders = arrayCoders();
  }
}, false);

function eliminarNombre() {
  const eliminar = document.getElementsByClassName("checked");
  while (eliminar.length > 0) {
    eliminar[0].parentNode.removeChild(eliminar[0]);
  }

  nameCoders = arrayCoders();
}

function arrayCoders() {
  let list = [...document.querySelectorAll("li")].map((element) => element.id);
  return list;
}

function checkName(name) {
  if (nameCoders.find((item) => item === name)) {
    swal({
      title: "NOMBRE REPETIDO",
      text: "AÑADA OTRO A LA LISTA",
      icon: "error",
      buttons: "Cerrar",
    });
  } else {
    return false;
  }
}

function minusculaMayuscula(name) {
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  return name;
}


function limpiar() {
  document.location.reload();
}
//-------------------------


function killCoder() {
  let msj = "";
  temp = 7000;
  for (let i = 0; i < localStorage.length; i++) {
    array2.push(localStorage.getItem(`${i}`));
  }
  console.log(localStorage.length);
  console.log(array2.length);

  localStorage.clear();

  let deadIndex = Math.floor(Math.random() * array2.length);
  let dead = array2[`${deadIndex}`];
  if (array2.length == 1) {
    temp = 0;
    swal({
      title: `Coder ${array2[0]} is Win!`,
      tex: " ",
      icon: "recursos/img/ducks/img-pato-ganador.png",
      buttons: "Cerrar",
    });
    return
  } else if (array2.length > 1) {
    array2.splice(deadIndex, 1);
    swal({
      title: `Coder ${dead} is Dead!`,
      text: " " ,
      icon: "recursos/img/ducks/img-pato-parca.png",
      buttons: "Cerrar",
    });
  }

  setTimeout(function () {
    killCoder();
  }, temp);
}

function setlocalStorage() {
  let coderKey = new Map();

  for (let i = 0; i < nameCoders.length; i++) {
    coderKey.set(i, nameCoders[i]);
    localStorage.setItem(`${i}`, nameCoders[i]);
  }
}
