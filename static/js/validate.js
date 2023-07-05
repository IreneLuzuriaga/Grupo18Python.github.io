function validaEmail() {
  var emailCheck = document.getElementById("email");

  var emailTest = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (emailTest.test(emailCheck.value)) {
    alert("Gracias, a la brevedad responderemos!!");
    return true; 
}
    else{
    alert("Ingrese un correo valido");
    return false;
  }
}
//comentario 
