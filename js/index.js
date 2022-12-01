function toggle(q1) {
  let obj = document.getElementById(q1);
  if (obj.style.display == "block") obj.style.display = "none";
  else obj.style.display = "block";
}

// POPup
const openModal = document.querySelector('.hero');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e) =>{
    e.preventDefault(); // Agregar parámetro para evitar comportamiento
                        // por defecto, esto hará que no se agregue # en el enlace
   modal.classList.add('modal--show');
} );

closeModal.addEventListener('click', (e) =>{
    e.preventDefault(); // Agregar parámetro para evitar comportamiento
                        // por defecto, esto hará que no se agregue # en el enlace
   modal.classList.remove('modal--show');
} );

//Audio

/*let boton = document.querySelector(".boton_logo")

    boton.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "../recursos/audio/suspense.mp3")
      etiquetaAudio.play()
    })
*/

window.addEventListener("load",function(){
	document.getElementById("play").addEventListener("click",sonarAudio);
	document.getElementById("stop").addEventListener("click",callarAudio);			
});

function sonarAudio(){
	let sonido = document.createElement("iframe");
	sonido.setAttribute("src","recursos/audio/suspense.mp3");
	document.body.appendChild(sonido);
	document.getElementById("play").removeEventListener("click",sonarPajaros);
}

function callarAudio(){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementById("play").addEventListener("click",sonarPajaros);
	}
}

// Lista de nombres

let nameCoders = arrayCoders();

let myNodelist = document.getElementsByTagName("LI");

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

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      nameCoders = arrayCoders();
    }
  },
  false
);

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

// recarga la pagina para limpiar todo
function limpiar() {
  document.location.reload();
}
//-------------------------

function killCoder() {
  let deadIndex = Math.floor(Math.random() * nameCoders.length);
  const deadCoder = document.getElementById(nameCoders[deadIndex]);
  let msj = `Coder ${nameCoders[deadIndex]} is Dead!`;
  deadCoder.remove();
  nameCoders = arrayCoders();
  return swal({
    title: msj,
    icon: "recursos/img/ducks/img-pato-parca.png",
    buttons: "Cerrar",
  });
}
