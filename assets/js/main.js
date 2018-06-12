const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
  //acá guardo el comentario ingresado por el usuario
  let comments = document.getElementById("comment").value;
  //limpiar el textarea
  document.getElementById("comment").value = " ";
  //contenedor donde dejare mis comentarios en html
  const cont = document.getElementById("cont");
  //crear un div contenedor
  const newComments = document.createElement("div");
  //validar que el textarea tenga un comentario
  if (comments.length === 0 || comments == null) {
    alert ("Debes ingresar un mensaje");
    return false;
  }
  //crear checkbox
  const chck = document.createElement("input");
  chck.type = "checkbox";
  //crear icono corazon
  //crear icono basura
  //nodos de texto del textarea
})