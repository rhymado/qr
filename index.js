const jimp = require("jimp");
const qrReader = require("qrcode-reader");
const fs = require("fs");

const buffer = fs.readFileSync(__dirname + "\\assets\\qr.png");
jimp.read(buffer, (err, image) => {
  if (err) return console.error(err);
  const reader = new qrReader();
  reader.callback = (err, value) => {
    if (err) return console.error(err);
    console.log(value.result);
  };
  reader.decode(image.bitmap);
});
