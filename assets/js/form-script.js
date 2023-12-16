function saveAndSendMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  window.location.href =
    "https://api.whatsapp.com/send?phone=5561981715566&text=" +
    encodeURIComponent(
      "Nome: " +
        name +
        "\nEmail: " +
        email +
        "\nTelefone: " +
        phone +
        "\nAssunto: " +
        subject +
        "\nMensagem: " +
        message
    );
}
