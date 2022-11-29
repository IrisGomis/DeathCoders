function toggle(q1) {
    let obj = document.getElementById(q1);
    if (obj.style.display == "block") obj.style.display = "none";
    else obj.style.display = "block";
}


//Reproducir musica suspense
/*const musica = document.getElementById('musica');

document.addEventListener('keydown', function (reproductor) {
    if (reproductor.key == 32) {

    }
})*/


// Audio
let boton = document.querySelector(".boton_logo")

    boton.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "../recursos/audio/suspense.mp3")
      etiquetaAudio.play()
    })

//Funcion popup

const openModal = document.querySelector('.hero');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e) =>{
    e.preventDefault(); // Agregar parámetro para evitar comportamiento
                        // por defecto, esto hará que no se agregue # en el enlace
   modal.classList.add('modal--show');
} );

closeModal.addEventListener('click', (e) =>{
    e.preventDefault();
   modal.classList.remove('modal--show');
} );
