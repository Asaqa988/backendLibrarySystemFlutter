import mongoose from 'mongoose';

const Authorschema = new mongoose.Schema({
  name: { type: String, required: true },
  Id: { type: String, required: true },
  nationallity: { type: String, required: true },
  email: { type: String },
  dateOfBirth: { type: String },
  phoneNumber : {type:String},
  bio: {type:String}
});

export default mongoose.model('Author', Authorschema);
