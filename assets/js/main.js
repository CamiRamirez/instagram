const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
  //acá guardo el comentario ingresado por el usuario
  let comments = document.getElementById("comment").value;
  //limpiar el textarea
  document.getElementById("comment").value = " ";
  //contenedor donde dejare mis comentarios en html
  const cont = document.getElementById("cont");
  //crear un div contenedor
  //validar que el textarea tenga un comentario
  
})