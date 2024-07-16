function buscarNombre(lista, nombre) {
    if (lista.includes(nombre)) {
        alert("Si se encuentra");
    } else {
        alert("No se encuentra");
    }
}

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
let nombreBuscar = "Jose";

buscarNombre(students, nombreBuscar);
