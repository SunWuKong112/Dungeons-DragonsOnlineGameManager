const db = require("../models");

module.exports = {
     findAll: function(req, res){
          db.characters
               .find({})
               .sort({date:-1})
               .then(dbModel=>res.json(dbModel))
               .catch(err=>res.status(422).json(err));
     },
     findById: function(req, res){
          db.characters
               .findById(req.params.id)
               .then(dbModel=>res.json(dbModel))
               .catch(err=>res.status(422).json(err));
     },
     create: function(req, res){
          db.characters
               .create(req.body)
               .then(dbModel=>res.json(dbModel))
               .catch(err=>res.status(422).json(err));
     },
     update: function(req, res){
          db.characters
               .findOneAndUpdate({_id: req.params.id}, req.body)
               .then(dbModel=>res.json(dbModel))
               .catch(err=>res.status(422).json(err));
     },
     remove: function(req, res){
          db.characters
               .findById({_id: req.params.id})
               .then(dbModel=>dbModel.remove())
               .then(dbModel=>res.json(dbModel))
               .catch(err=>res.status(422).json(err));
     }
};