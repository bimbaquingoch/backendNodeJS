exports.success = (req, res, mensaje, status) => {
  res.status(status || 200).send({
    error: "",
    body: mensaje,
  });
};

exports.error = (req, res, mensaje, status) => {
  res.status(status || 500).send({
    error: mensaje,
    body: "",
  });
};
