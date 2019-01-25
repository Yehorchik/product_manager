var Product = require('./models.js');

module.exports ={
    all : (req,res)=>{
       Product.find({})
       .then(results =>{
           res.json(results)
       })
       .catch(err =>{
           res.json(err)
       })
    },
    one : (req,res) =>{
        Product.findById(req.params.id)
        .then(results =>{
            res.json(results);
        })
        .catch(err =>{
            res.json(err);
        })

    },
    create : (req,res) =>{
        Product.create(req.body)
        .then(results =>{
            res.json(results);
        })
        .catch(err =>{
            res.json(err);
        })
    },
    update : (req,res) =>{
        Product.findByIdAndUpdate(req.params.id , req.body  , {'new':true})
        .then(results =>{
            res.json(results);
        })
        .catch(err =>{
            res.json(err);
        })
    },
    delete : (req,res) =>{
        Product.findByIdAndDelete(req.params.id)
        .then(results =>{
            res.json(results);
        })
        .catch(err =>{
            res.json(err);
        })
    },

}