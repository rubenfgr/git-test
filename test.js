var datos = [
  { id: "2", nombrecentro: "IES A Piringalla", localidad: "Lugo", provincia: "Lugo" },
  { id: "10", nombrecentro: "IES As Fontiñas", localidad: "Santiago", provincia: "A Coruña" },
  { id: "9", nombrecentro: "IES As Lagoas", localidad: "Ourense", provincia: "Ourense" },
  { id: "8", nombrecentro: "IES Cruceiro Baleares", localidad: "Culleredo", provincia: "A Coruña" },
];

for (var i = 0; i < datos.length; i++) {
  document.write("Centro ID: " + datos[i].id + " - ");
  document.write("Nombre: " + datos[i].nombrecentro + " - ");
  document.write("Localidad: " + datos[i].localidad + " - ");
  document.write("Provincia: " + datos[i].provincia + "<br/>");
}

class listaElementos {
  constructor(lista) {
    this.miArray = new Array();
    for (let i = 0; i < arguments.length; i++) {
      // let crea una variable local del bloque.
      this.miArray.push(arguments[i]); // Se añaden los argumentos al final
    }
  }
  toString() {
    let devolver = "";
    for (let i = 0; i < this.miArray.length; i++) {
      devolver += this.miArray[i];
    }
    return devolver;
  }
}

coleccion = new listaElementos("perro", "gato", "canario");
document.write(coleccion); // forma correcta de mostrar el objeto con toString().
