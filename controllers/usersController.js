const db = require("../models");

module.exports = {
     findAll: function(req, res){
          db.users
          .find({})
          .sort({date:-1})
          .then(dbModel=>res.json(dbModel))
          .catch(err=>res.status(422).json(err));
     },
     findById: function(req, res){
          db.users
               .find(req.body)
               .then(dbModel=>res.json(dbModel))
               .catch(err=>{
                    res.status(422).json(err);
               });
     },
     create: function(req, res){
          db.users
               .create(req.body)
               .then(dbModel=>res.json(dbModel))
               .catch(err=>res.status(422).json(err));
     },
     update: function(req, res){
          db.users
               .findOneAndUpdate({id: req.params.id}, req.body)
               .then(dbModel=>res.json(dbModel))
               .catch(err=>res.status(422).json(err));
     },
     remove: function(req, res){
          db.users
               .findById({_id: req.params.id})
               .then(dbModel=>dbModel.remove())
               .then(dbModel=>res.json(dbModel))
               .catch(err=>res.status(422).json(err));
     },
     findAllCharacters: function(req, res){
          db.users
               .find({_id:req.params.id})
               .populate("characters")
               .then(dbModel=>res.json(dbModel))
               .catch(err=>{res.status(422).json(err)});
     }
};