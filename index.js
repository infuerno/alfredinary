const alfy = require('alfy');
const cloudinary = require('cloudinary');
require('dotenv').config();

// Cloudinary settings, read secrets. Read from .env-file
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET
});

// Settings for path, filename and cloudinary folder name. Read from the .env-file
const fileSettings = {
  pathname: process.env.PATHNAME,
  filename: (process.argv[2] && process.argv[2] + ".jpg") || process.env.FILENAME,
  foldername: process.env.FOLDERNAME,
};

// Upload file to Cloudinary. Get back https image link, copy to the clipboard
let options = { folder: `${fileSettings.foldername}` };
if (fileSettings.filename !== process.env.FILENAME) {
   options.public_id = fileSettings.filename.replace(/\.[^/.]+$/, "");
}
cloudinary.v2.uploader.upload(
  `${fileSettings.pathname}${fileSettings.filename}`,
  options,
  function (error, result) {
    process.stdout.write(result.secure_url);
  }
);

