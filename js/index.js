function toggle(q1) {
    let obj = document.getElementById(q1);
    if (obj.style.display == "block") obj.style.display = "none";
    else obj.style.display = "block";
}
//Audio

let boton = document.querySelector(".boton_logo")

    boton.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "../recursos/audio/suspense.mp3")
      etiquetaAudio.play()
    })

let nameCoders = arrayCoders();

let myNodelist = document.getElementsByTagName("LI");

function newCoder() {

    let li = document.createElement("li");
    let name = document.getElementById("participants").value;
    name = minusculaMayuscula(name);
    let x = document.createTextNode(name);
    li.appendChild(x);
    if (name === "") {
        swal("Añada un nombre", "", "error",{
            buttons: false, });
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

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        nameCoders = arrayCoders();
    }

}, false);

function eliminarNombre() {
    const eliminar = document.getElementsByClassName('checked');
    while (eliminar.length > 0) {
        eliminar[0].parentNode.removeChild(eliminar[0]);
    } 

    nameCoders = arrayCoders();
}

function arrayCoders() {
    let list = [...document.querySelectorAll("li")]
        .map(element => element.id);
    return (list);
}

function checkName(name) {
    if (nameCoders.find(item => item === name)) {
        swal("Nombre repetido", "Añada otro", "error",{
            buttons: false, });
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
//----------------------------