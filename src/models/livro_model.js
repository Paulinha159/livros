let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.titulo != undefined &&
    body.autor != undefined &&
    body.genero != undefined &&
    body.ano != undefined &&
    body.titulo != "" &&
    body.autor != "" &&
    body.genero != "" &&
    body.ano != "" &&
    body.ano > 0
  ) {
    return {
      id,
      titulo: body.titulo,
      autor: body.autor,
      genero: body.genero,
      ano: body.ano,
    };
  }
};

module.exports = model;
