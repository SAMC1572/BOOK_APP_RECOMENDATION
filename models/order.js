const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId,  ref: "user"},
  book:{type:mongoose.Types.ObjectId,ref:"books",required:true},

  Status:{type:string, default:"order placed",enum:["order placed","Out for delivery,Delivered,canceled"]},
    quantity: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
    deliveryAddress: {type: String, required: true},
    deliveryDate: {type: Date, required: true},
     },
  {timestamps:true}
);
module.exports = mongoose.model('order', orderSchema);
