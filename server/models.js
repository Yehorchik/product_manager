const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product_manager');

const ProductSchema = new mongoose.Schema({
   title : {type : String , minlength : [3,"Product title should have minimun 3 letters"]},
   price : {type : Number, required: [true, 'Price is required']},
   imageUrl : {type:String , required :[true,"Image required"]},
},{timestamps : true});

module.exports = mongoose.model('Product' , ProductSchema);