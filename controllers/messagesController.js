exports.errorMessage = (err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode).json({ message: err.message });
};
exports.welcomeMessage = (req, res) => {
  res.json({
    message: `Welcome to the Contact-Manager! To proceed, send request to "/contacts"`
  });
};
