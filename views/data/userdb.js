var mongoose = require('mongoose');
var express = require('express');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    
     make_name: String,
     model_name: String,
     variant_name: String,
     year: Number,
     milage: String,
     email: String,
     price: String
 });
user = mongoose.model('userdetail', userSchema);
module.exports = user;