const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    isDone: false,
    error: { err, message: err.message },
  });
};

module.exports = errorHandler;
