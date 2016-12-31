var mongoose = require('mongoose');
var express = require('express');
var Schema = mongoose.Schema;
  	

var citySchema = new Schema({
    
    city_id: Number,
    state_id: Number,
    city_name: String
    
});
 city = mongoose.model('city', citySchema, 'city');//object that allow to interect to database
module.exports = city;

var makeSchema = new Schema({
    
    make_id: Number,
    make_name: String
    
});
 make = mongoose.model('make', makeSchema, 'make');//object that allow to interect to database
module.exports = make;

var modelSchema = new Schema({
    model_id: Number,
    make_id: Number,
    model_name: String
    
});
 model = mongoose.model('model', modelSchema, 'model');//object that allow to interect to database
module.exports = model;

var modelSchema = new Schema({
    variant_id: Number,
    model_id: Number,
    variant_name: String
    
});
 variant = mongoose.model('variant', modelSchema, 'variant');//object that allow to interect to database
module.exports = variant;


var modelSchema = new Schema({
    makeyear_id: Number,
    year: Number,
    make_id: Number
    
});
 makeyear = mongoose.model('makeyear', modelSchema, 'makeyear');//object that allow to interect to database
module.exports = makeyear;

//form.save();