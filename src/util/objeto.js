class TaskModel {
    constructor(nombre, telefono, email, producto, entregado, id) {
      this[id] = {
        nombre: nombre,
        telefono: telefono,
        email: email,
        producto: producto,
        entregado: entregado
      }
    }
  }
  module.exports = { TaskModel };