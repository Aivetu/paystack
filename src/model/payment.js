const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = Schema({
    email:{
        type:String,
        required:true  
    },
    authorizationCode:{
        type:String
    }
});

module.exports=mongoose.model('Payment',paymentSchema);