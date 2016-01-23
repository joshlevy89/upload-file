var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express()

// call to the homepage
app.use(express.static('public'));

app.post('/upload', upload.single("filename"), function (req, res) {
  if(req.file) {
      res.send(String(req.file.size));
  } else {
    res.status(400);
    res.end();
  }
});

app.listen(process.env.PORT);