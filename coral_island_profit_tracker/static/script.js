let dataImage = document.getElementById("dataImage");
const { createWorker } = require('tesseract.js');

const worker = await createWorker('eng');

