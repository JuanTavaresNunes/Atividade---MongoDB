'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lojaSchema = new Schema({
    nome: {
        type: String,
        required: 'Digite o nome da loja'
    }
})

module.exports = mongoose.model('lojaApi',lojaSchema);