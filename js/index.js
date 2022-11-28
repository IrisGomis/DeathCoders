function toggle(q1) {
    let obj = document.getElementById(q1);
    if (obj.style.display == "block") obj.style.display = "none";
    else obj.style.display = "block";
}

let nameCoders = arrayCoders();

let listEliminar = document.querySelector("ul");
listEliminar.addEventListener('click', function (ev){
    if(ev.target.tagName === "li"){
        ev.target.classList.toggle('checked');
        nameCoders = arrayCoders();
    }

},false);

function eliminarNombre(){
    const eliminar = document.getElementsByClassName('checked');
    while(eliminar.length > 0){
        elemento[0].parentNode.removeChild(elemento[0]);
    }
    nameCoders = arrayCoders ();
}

function arrayCoders(){
    let list = [...document.querySelectorAll("li")]
        .map(element => element.id);
    return (list);
}

function checkName (name){
    if(nameCoders.find(item => item === name)){
        alert("Nombre repetido, añada otro");    
    } else{
        return false;
    }
}

function minusculaMayuscula(name){
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return name;
}


function newCoder(){

    let li = document.createElement("li");
    let name = document.getElementById("participants").value;
    name = minusculaMayuscula(name);
    let x = document.createTextNode(name);
    li.appendChild(x);
    if (name === ""){
       alert("Añada un nombre");
    } else {
        if(checkName(name) == false){
            li.setAttribute("id", name);
            document.getElementById("list-name").appendChild(li);
            nameCoders = arrayCoders();
        }
    }

    document.getElementById("participants").value = "";


    let span = document.createElement ("button");
    let txt = document.createTextNode ("Eliminar");
    span.className = "checked";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < checked.length; i++) {
        checked[i].onclick = function () {

            let div = this.parentElement;
            document.getElementById("participants").removeChild(div);
            nameCoders = arrayCoders();
        }
    }
}    