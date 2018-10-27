var express = require('express')
var app = express()
var mysql = require('mysql');
var multer = require('multer');
var bodyParser = require('body-parser');
var request = require("request");
var convert = require('xml-js');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "top4ek2281337?",
  database: "fixit"
});

app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.send('Working')
})




 app.get("/", function(req, res) {
     res.send(` <form id="frmUploader" enctype="multipart/form-data" action="api/Upload/?fuck=123" method="post">
        <input type="file" name="imgUploader" multiple />
        <input type="submit" name="submit" id="btnSubmit" value="Upload" /> </form>`);
 });
 app.post("/api/Upload", function(req, res) {
     upload(req, res, function(err) {
         if (err) {
             return res.end("Something went wrong!");
         }
         return res.end("File uploaded sucessfully!.");
     });
 });

app.post('/create', (req, res) => {
  con.query("SELECT * FROM problems", (err, result, fields) => {
    var photo = "https://arteri.pro/FixIt/Backend/images/"+ (result.length + 1) + ".JPG";
    var Storage = multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null, "images");
        },
        filename: function(req, file, callback) {
            callback(null, file.fieldname + (result.length+1) + ".JPG");
        }
    });

    var upload = multer({
        storage: Storage
    }).array("a", 3);

     var options = { method: 'GET',
        url: 'https://geocode-maps.yandex.ru/1.x/',
        qs:
         { geocode: req.query.lng+','+req.query.lat,
           apikey: 'c06046a5-cbe3-486b-937b-ac3a447bcb47' } };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var x = convert.xml2json(body, {compact: true, spaces: 4});
        var z = JSON.parse(x)
        var country = z.ymaps.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Component[0].name._text
        var city = z.ymaps.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Component[4].name._text
        console.log(country);
        var params = `'`+req.query.name+`', '`+req.query.lng+`,`+req.query.lat+`','`+req.query.ip+`', '`+photo+`', '`+req.query.info+`', '`+req.query.address+`', '`+country+`', '`+city+`', `+req.query.likes+`, '`+req.query.type1+`'`;
        var sql = `INSERT INTO problems (name, geo_location, ip, photo, info, address, country, city, likes, type) VALUES (`+params+`)`;
        console.log(sql);
        con.query(sql, function (err, result_insert) {
          console.log("Mysql here -> "+result_insert);
          upload(req, res, function(err) {
              if (err) {
                  console.log(err);
                  return res.end("Something went wrong!");
              }
              return res.end("File uploaded sucessfully!.");
          });
        })
      });
  })
})

app.post('/get_all', (req, res) => {
  con.query("SELECT * FROM problems", (err, result, fields) => {
    var json = JSON.stringify(result);
    res.send(json)
  })
})

app.listen('1337', () => {
  console.log('Server listening on port 1337');
  con.connect(function(err) {
    con.query("SELECT * FROM fixit", function (err, result, fields) {
      console.log('Connect to database is successful');
    });
  });
})
