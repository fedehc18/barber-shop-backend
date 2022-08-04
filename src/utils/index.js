exports.successResponse = function (req, res, body, status) {
  res.status(status || 200).send({ data: body });
};

exports.errorResponse = function (req, res, error, status) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode || 500).send(output.payload);
  } else {
    res.status(status || 500).send({ error: error });
  }
};

exports.removePassword = function (user) {
  const response = {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    role: user.Role,
  };

  return response;
};

const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

exports.streamUpload = (req) => {
  return new Promise((resolve, reject) => {
    let stream = cloudinary.uploader.upload_stream((error, result) => {
      if (result) {
        resolve(result);
      } else {
        reject(error);
      }
    });

    streamifier.createReadStream(req.file.buffer).pipe(stream);
  });
};
