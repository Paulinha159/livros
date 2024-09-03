const livro_controller = require("../controllers/livro_controller.js");
const estudante_controller = require("../controllers/estudante_controller.js");

let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.dataAluguel != undefined &&
    body.dataDevolucao != undefined &&
    body.dataAluguel != "" &&
    body.dataAluguel > 0 &&
    body.dataDevolucao != "" &&
    body.dataDevolucao > 0 &&
    livro_controller.show(body.livro_id) &&
    estudante_controller.show(body.estudante_id)
  ) {
    return {
      id,
      dataAluguel: body.dataAluguel,
      dataDevolucao: body.dataDevolucao,
      livro_id: body.livro_id,
      estudante_id: body.estudante_id,
    };
  }
};

module.exports = model;
