class ContactController {
  index(request, response) {
    // listar todos os registros
    response.send("Send from Contact Controller");
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Dletera um registro
  }
}

module.exports = new ContactController();
