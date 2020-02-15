'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtoSchema = new Schema({
    nome: {
        type: String,
        required: 'Digite o nome do Produto'
    },
    preco: {
        type: Number,
        required: 'Digite o valor do produto'
    },
    quantidade: {
        type: Number,
        required: 'Digite a quantidade do produto'
    }
})

module.exports = mongoose.model('produto',produtoSchema);