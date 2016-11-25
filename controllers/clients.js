var mongoose = require('mongoose');
var Client = mongoose.model('Client');

//POST - Insertar usuario
exports.add = function(req, res) {
  console.log('POST');
  console.log(req.body);

  var client = new Client({
    name: req.body.name
  });

  client.save(function(err, client){
    if(err) return res.send(500, err.message);
    res.status(200).jsonp(client);
  });
};

//GET - Retornar todos los registros
exports.findAll = function(req, res) {
  Client.find(function(err, clients) {
    if(err) res.send(500, err.message);
    res.status(200).jsonp(clients);
  });
};
